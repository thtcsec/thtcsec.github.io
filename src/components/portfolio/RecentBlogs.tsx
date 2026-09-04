import { ArrowRight, BookOpen, CheckCircle2, Award, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { publicationsData } from "@/data/publications";

const RecentBlogs = () => {
  // Get accepted publication (VNICT 2026)
  const acceptedPub = publicationsData.find((p) => p.status === "Accepted" || p.status === "Camera Ready") || publicationsData[3];

  return (
    <section id="research" className="cinema-section bg-background overflow-hidden py-20">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <div className="max-w-2xl">
              <div className="cinema-kicker mb-3">
                Research & Publications
              </div>
              <h2 className="cinema-title mb-3 text-left md:text-4xl">
                Featured Publication
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Accepted peer-reviewed conference paper in AI, Deep Learning, and Log Intelligence.
              </p>
            </div>

            <Link
              to="/publications"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 font-semibold text-xs transition-all shrink-0"
            >
              <BookOpen size={15} />
              View All Submissions & Papers ({publicationsData.length})
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Accepted Paper Card */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-card via-card to-emerald-500/5 p-6 md:p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/60 group">
            {/* Ambient emerald glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-bl-full pointer-events-none blur-2xl" />

            <div className="relative z-10">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 tracking-wide uppercase">
                  <CheckCircle2 size={13} className="shrink-0" />
                  {acceptedPub.status === "Camera Ready" ? "Accepted / Camera-Ready" : acceptedPub.status}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary/10 text-primary border border-primary/25">
                  <Award size={12} className="shrink-0" />
                  {acceptedPub.abbreviation}
                </span>
                {acceptedPub.indexing && (
                  <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono text-muted-foreground bg-muted/60 border border-border">
                    {acceptedPub.indexing}
                  </span>
                )}
                <span className="ml-auto text-xs font-mono text-muted-foreground">
                  {acceptedPub.year}
                </span>
              </div>

              {/* Title & Conference logo */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <div className="h-16 w-28 p-2 rounded-xl bg-white border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={acceptedPub.conferenceLogos?.[0] || acceptedPub.conferenceLogo || "/images/hanu.jpg"}
                    alt={acceptedPub.abbreviation}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {acceptedPub.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="font-semibold text-foreground">Venue: </span>
                    {acceptedPub.conference}
                  </p>
                </div>
              </div>

              {/* Authors & Affiliation */}
              <div className="text-xs text-muted-foreground space-y-0.5 mb-4 font-mono">
                <div>
                  <span className="text-foreground font-semibold">Authors: </span>
                  {acceptedPub.authors.join(", ")}
                </div>
                <div className="truncate">
                  <span className="text-foreground font-semibold">Affiliation: </span>
                  {acceptedPub.affiliation}
                </div>
              </div>

              {/* Abstract quote */}
              <p className="text-xs md:text-sm text-muted-foreground/90 leading-relaxed line-clamp-3 mb-6 italic border-l-2 border-emerald-500/40 pl-3">
                "{acceptedPub.abstract}"
              </p>

              {/* Tags & Action CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
                <div className="flex flex-wrap gap-1.5">
                  {acceptedPub.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-muted text-muted-foreground border border-border"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to="/publications"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-md"
                  >
                    <FileText size={13} />
                    View Details & BibTeX
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;

