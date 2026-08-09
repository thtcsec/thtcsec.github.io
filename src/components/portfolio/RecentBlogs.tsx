import { ArrowRight, BookOpen, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  return (
    <section id="research" className="cinema-section bg-background overflow-hidden py-20">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="cinema-kicker mb-4">
                Research
              </div>
              <h2 className="cinema-title mb-4 text-left md:text-4xl">
                Publications & Research
              </h2>
              <p className="text-muted-foreground text-lg">
                Research manuscripts and conference submissions in Cybersecurity, AI, and Network Systems.
              </p>
            </div>
          </div>

          {/* CTA Card — placeholder until papers are published */}
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg">
            {/* Icon */}
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <FlaskConical size={36} className="text-primary" />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">
                Papers under peer review
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                Research articles will be posted here once accepted and officially published.
                In the meantime, browse the full list of submitted works — including abstracts, conference tracks, and author details.
              </p>
            </div>

            {/* Button */}
            <Link
              to="/publications"
              className="group shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/30 hover:scale-[1.03]"
            >
              <BookOpen size={16} />
              View Publications
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
