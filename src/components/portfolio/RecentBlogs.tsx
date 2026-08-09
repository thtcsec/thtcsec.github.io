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
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-card via-card to-emerald-500/5 p-6 md:p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/60">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none blur-xl" />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Logo Box */}
              <div className="shrink-0 h-20 w-32 p-2 rounded-xl bg-white border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-center overflow-hidden">
                <img
                  src={acceptedPub.conferenceLogos?.[0] || acceptedPub.conferenceLogo || "/images/hanu.jpg"}
                  alt={acceptedPub.abbreviation}
                  className="w-full h-full object-contain scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                    <CheckCircle2 size={13} />
                    {acceptedPub.status === "Camera Ready" ? "Accepted / Camera-Ready" : acceptedPub.status}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-primary/10 text-primary border border-primary/20">
                    {acceptedPub.abbreviation}
                  </span>
                  {acceptedPub.indexing && (
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                      {acceptedPub.indexing}
                    </span>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-extrabold text-foreground leading-snug">
                  {acceptedPub.title}
                </h3>

                <p className="text-xs text-muted-foreground font-medium">
                  <span className="text-foreground font-semibold">Venue:</span> {acceptedPub.conference}
                </p>

                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-foreground font-semibold">Authors:</span> {acceptedPub.authors.join(", ")} ({acceptedPub.affiliation})
                </p>
              </div>
            </div>

            {/* Tags & Action Footer */}
            <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {acceptedPub.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[11px] font-mono rounded bg-muted text-muted-foreground border border-border">
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                to="/publications"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/30 hover:scale-[1.02]"
              >
                <FileText size={14} />
                Read Paper Abstract & Details
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
