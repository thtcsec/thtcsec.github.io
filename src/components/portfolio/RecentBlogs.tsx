import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";

const RecentBlogs = () => {
  // Get the 3 most recent posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="research" className="cinema-section bg-background overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="cinema-kicker mb-4">
              Research
            </div>
            <h2 className="cinema-title mb-4 text-left md:text-4xl">
              Articles and notes
            </h2>
            <p className="text-muted-foreground text-lg">
              Short write-ups on security, systems, and the technical work behind the portfolio.
            </p>
          </div>
          <Link
            to="/research"
            className="group flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors whitespace-nowrap"
          >
            View all articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/research/${post.id}`}
              className="cinema-card group block h-full overflow-hidden transition-colors hover:border-primary/50"
            >
              {post.imageUrl && (
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                     {post.tags.slice(0, 2).map((tag, i) => (
                       <span key={i} className="px-3 py-1 bg-background/80 backdrop-blur-md text-xs font-semibold rounded-full border border-border/50 text-foreground">
                         {tag}
                       </span>
                     ))}
                  </div>
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article <ArrowRight size={14} />
                  </span>
                  {post.icon && <post.icon size={20} className="text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
