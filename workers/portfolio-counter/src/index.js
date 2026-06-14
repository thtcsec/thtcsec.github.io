export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get("Origin") || "*";
    
    // Setup CORS headers dynamically to support credentials (cookies)
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Cookie",
      "Access-Control-Allow-Credentials": "true"
    };

    // Handle CORS preflight options request
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Only route /visit (increments counts) and /stats (read-only query)
    if (path !== "/visit" && path !== "/stats") {
      return new Response("Not Found", { status: 404, headers: corsHeaders });
    }

    const kv = env.PORTFOLIO_DB;
    if (!kv) {
      return new Response(
        JSON.stringify({ error: "KV namespace PORTFOLIO_DB not bound." }), 
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get current values
    let totalViews = parseInt(await kv.get("total_views") || "0", 10);
    let uniqueVisitors = parseInt(await kv.get("unique_visitors") || "0", 10);

    if (path === "/visit") {
      // 1. Increment total page views
      totalViews += 1;
      await kv.put("total_views", totalViews.toString());

      // 2. Identify unique visitors using the client-side visitorId query parameter
      const visitorId = url.searchParams.get("visitorId");
      let isNewVisitor = false;

      if (visitorId) {
        const hasVisited = await kv.get(`visitor:${visitorId}`);
        if (!hasVisited) {
          isNewVisitor = true;
          // Store visitor key permanently to prevent duplicate counting
          await kv.put(`visitor:${visitorId}`, "true");
        }
      }

      if (isNewVisitor) {
        uniqueVisitors += 1;
        await kv.put("unique_visitors", uniqueVisitors.toString());
      }

      const responseData = {
        views: totalViews,
        visitors: uniqueVisitors
      };

      return new Response(JSON.stringify(responseData), {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      });
    }

    // path === "/stats"
    return new Response(JSON.stringify({ views: totalViews, visitors: uniqueVisitors }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"
      }
    });
  }
};
