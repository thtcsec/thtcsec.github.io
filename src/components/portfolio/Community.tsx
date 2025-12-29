import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { communities } from "@/data/communities";
import ImageModal from "@/components/ImageModal";

const Community = () => {
    const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <section id="community" className="py-20 relative">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Community
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                        Forums & Tech Communities
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Active participation in developer communities and tech events
                    </p>
                </div>

                {/* Community Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {communities.map((community) => (
                        <div
                            key={community.id}
                            className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image - Click to open modal */}
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

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {community.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
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
