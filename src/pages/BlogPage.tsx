import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import Footer from "@/components/portfolio/Footer";
import ProjectHeader from "@/components/portfolio/ProjectHeader";
import { useEffect } from "react";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <ProjectHeader />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Research & Articles
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              A collection of my research notes, technical deep-dives, and insights into artificial intelligence, cybersecurity, and modern software engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/research/${post.id}`}
                className="group flex flex-col h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {post.imageUrl && (
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
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
                  
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-3">
                    {post.title}
                  </h2>
                  
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
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
