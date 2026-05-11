import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { communities } from "@/data/communities";
import ImageModal from "@/components/ImageModal";

const Community = () => {
    const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <section id="community" className="cinema-section">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <span className="cinema-kicker mb-4">
                        Community
                    </span>
                    <h2 className="cinema-title mb-4">
                        Communities and ecosystem
                    </h2>
                    <p className="cinema-subtitle">
                        Collaboration, leadership, and active participation across developer programs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {communities.map((community) => (
                        <div
                            key={community.id}
                            className="cinema-card group relative overflow-hidden transition-colors hover:border-primary/50"
                        >
                            <div
                                className="relative aspect-video overflow-hidden bg-neutral-900 cursor-pointer"
                                onClick={() => setModalImage({ src: community.image, alt: community.title })}
                            >
                                <img
                                    src={community.image}
                                    alt={community.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {community.title}
                                    </h3>
                                    {community.link && (
                                        <a
                                            href={community.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>

                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                    {community.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {community.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground/80"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub Contributions */}
                <div className="mt-16 max-w-5xl mx-auto">
                    <div className="cinema-card overflow-hidden p-6 transition-colors hover:border-primary/50 md:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        GitHub Activity
                                    </h3>
                                    <p className="text-sm text-muted-foreground">Open-source consistency over time</p>
                                </div>
                            </div>
                            <a
                                href="https://github.com/thtcsec"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                            >
                                <span>View GitHub</span>
                                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        <div className="w-full overflow-x-auto pb-2 custom-scrollbar">
                            <img
                                src="https://ghchart.rshah.org/8A2BE2/thtcsec"
                                alt="thtcsec's GitHub Contributions"
                                className="min-w-[800px] w-full mt-2 filter drop-shadow-sm opacity-90 hover:opacity-100 transition-opacity"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            <ImageModal
                isOpen={!!modalImage}
                imageSrc={modalImage?.src || ""}
                imageAlt={modalImage?.alt || ""}
                onClose={() => setModalImage(null)}
            />
        </section>
    );
};

export default Community;
