import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUp, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";
import Footer from "@/components/portfolio/Footer";
import ProjectHeader from "@/components/portfolio/ProjectHeader";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogDetailPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { id } = useParams<{ id: string }>();
  
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/research" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <ProjectHeader />
      
      <main className="flex-grow pb-20">
        <article className="w-full relative">
          {post.imageUrl && (
            <div className="relative w-full aspect-video md:aspect-[2.5/1] overflow-hidden mb-12 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 z-20">
                <div className="container mx-auto px-4 max-w-4xl pb-8 md:pb-12">
                  <Link 
                    to="/research"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 font-mono text-sm group bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50 shadow-sm"
                  >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to articles
                  </Link>
                  
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight max-w-4xl drop-shadow-2xl">
                    {post.title}
                  </h1>
                </div>
              </div>
            </div>
          )}

          <div className="container mx-auto px-4 max-w-3xl pt-8">
            <header className="mb-12 border-b border-border/50 pb-8">
              {!post.imageUrl && (
                <div className="mb-12 pt-16">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight leading-tight">
                    {post.title}
                  </h1>
                </div>
              )}
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground font-mono text-sm">
                <div className="flex items-center gap-2 bg-secondary/30 px-4 py-2 rounded-full border border-border/50">
                  <Calendar size={16} className="text-primary" />
                  <time>{post.date}</time>
                </div>
                <div className="flex items-center gap-2 bg-secondary/30 px-4 py-2 rounded-full border border-border/50">
                  <Clock size={16} className="text-primary" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-mono font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

          <div className="prose prose-invert prose-lg md:prose-xl max-w-none mx-auto
            prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-4 prose-h2:mt-12 prose-h2:mb-6
            prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-foreground/90 prose-p:leading-[1.8] md:prose-p:leading-[1.9]
            prose-a:text-primary prose-a:decoration-primary/50 hover:prose-a:decoration-primary prose-a:underline-offset-4 prose-a:font-medium transition-all
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:text-foreground/90 prose-li:marker:text-primary/70
            prose-ol:text-foreground/90
            prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:font-medium
            prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border/50
            prose-blockquote:border-l-4 prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-foreground/80 prose-blockquote:my-8
            prose-img:rounded-xl prose-img:shadow-2xl prose-img:mx-auto prose-img:my-10
            prose-table:w-full prose-table:my-8
            prose-th:bg-secondary/50 prose-th:text-left prose-th:p-4 prose-th:border prose-th:border-border/50
            prose-td:p-4 prose-td:border prose-td:border-border/50
            prose-hr:border-border/50 prose-hr:my-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
          </div>
        </article>
      </main>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center backdrop-blur-sm group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
