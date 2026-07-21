import { useState } from "react";
import { Gamepad2, Eye, Info } from "lucide-react";
import ProjectHeader from "@/components/portfolio/ProjectHeader";
import ImageModal from "@/components/ImageModal";
import Footer from "@/components/portfolio/Footer";

interface GameItem {
  id: string;
  title: string;
  subtitle: string;
  category: "HoYoverse" | "MOBA" | "All";
  image: string;
  status: "Active" | "Casual" | "Archived";
  statusColor: string;
}

const gamesList: GameItem[] = [
  {
    id: "hsr",
    title: "Honkai: Star Rail",
    subtitle: "HoYoverse · Space Fantasy RPG",
    category: "HoYoverse",
    image: "/images/games/hsr.png",
    status: "Active",
    statusColor: "bg-emerald-500"
  },
  {
    id: "gi",
    title: "Genshin Impact",
    subtitle: "HoYoverse · Open World RPG",
    category: "HoYoverse",
    image: "/images/games/gi.png",
    status: "Active",
    statusColor: "bg-emerald-500"
  },
  {
    id: "aov",
    title: "Arena of Valor",
    subtitle: "Garena · 5v5 Tactical MOBA",
    category: "MOBA",
    image: "/images/games/aov.jpg",
    status: "Active",
    statusColor: "bg-emerald-500"
  },
  {
    id: "mlbb",
    title: "Mobile Legends: Bang Bang",
    subtitle: "Moonton · 5v5 Mobile MOBA",
    category: "MOBA",
    image: "/images/games/mlbb.jpg",
    status: "Active",
    statusColor: "bg-emerald-500"
  }
];

const ArcadePage = () => {
  const [selectedFilter, setSelectedFilter] = useState<"All" | "HoYoverse" | "MOBA">("All");
  const [activeImageModal, setActiveImageModal] = useState<{ src: string; title: string } | null>(null);

  const filteredGames = gamesList.filter(
    (g) => selectedFilter === "All" || g.category === selectedFilter
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* Shared ProjectHeader (same as /about route) */}
      <ProjectHeader backLink="/" backLabel="Back to Home" />

      <main className="flex-1 container mx-auto px-4 pt-28 pb-16 max-w-6xl">
        {/* Top Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card/90 via-card/40 to-background p-6 md:p-10 mb-10 shadow-2xl backdrop-blur-xl">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
                <Gamepad2 size={14} className="animate-pulse" />
                <span>Classified Vault // Gamer Lounge</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Arcade Showcase
              </h1>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                A personal archive of captured battle moments and gaming highlights.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Bar & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 p-1.5 bg-card/60 border border-border/70 rounded-2xl backdrop-blur-md">
            {(["All", "HoYoverse", "MOBA"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedFilter === filter
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {filter === "All" ? "All Games" : filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 px-3.5 py-2 rounded-xl border border-border/50">
            <Info size={14} className="text-primary shrink-0" />
            <span>Click any screenshot to view in full resolution</span>
          </div>
        </div>

        {/* Compact List Layout: Narrow Left Info Column, Large Right Image */}
        <div className="space-y-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="group relative flex flex-col lg:flex-row items-stretch rounded-3xl border border-border/70 bg-card/40 hover:bg-card/75 hover:border-primary/40 transition-all duration-300 overflow-hidden shadow-xl"
            >
              {/* LEFT SIDE: Narrow Info Column */}
              <div className="w-full lg:w-72 xl:w-80 shrink-0 p-6 md:p-8 flex flex-col justify-center space-y-4 border-b lg:border-b-0 lg:border-r border-border/60 bg-card/20">
                {/* Category Badge */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-semibold uppercase tracking-wider">
                    {game.category}
                  </span>
                </div>

                {/* Game Title & Subtitle */}
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground mt-1 leading-snug">
                    {game.subtitle}
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE: Large Game Screenshot */}
              <div
                className="flex-1 h-64 sm:h-80 lg:h-96 relative overflow-hidden bg-black/60 cursor-pointer"
                onClick={() => setActiveImageModal({ src: game.image, title: game.title })}
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card/60 via-transparent to-transparent opacity-60" />

                {/* Hover Zoom Prompt */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye size={15} /> View Fullscreen Screenshot
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {/* Screenshot Modal Lightbox */}
      <ImageModal
        isOpen={!!activeImageModal}
        imageSrc={activeImageModal?.src}
        imageAlt={activeImageModal?.title || "Game Screenshot"}
        onClose={() => setActiveImageModal(null)}
      />
    </div>
  );
};

export default ArcadePage;
