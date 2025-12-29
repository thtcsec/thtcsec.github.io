import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredCertificates, featuredAchievements } from "@/data/certificates";
import { Link } from "react-router-dom";
import ImageModal from "@/components/ImageModal";

const Certificates = () => {
    const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <section id="certificates" className="py-20 relative">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Credentials
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                        Certificates & Achievements
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Professional certifications and recognition for continuous learning
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                        <span className="text-2xl">📜</span> Certificates
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredCertificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                                onClick={() => setModalImage({ src: cert.image, alt: cert.title })}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                                        }}
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-xs text-primary font-medium mb-1">{cert.issuer}</p>
                                    <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements Grid */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                        <span className="text-2xl">🏆</span> Achievements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {featuredAchievements.map((achievement) => (
                            <div
                                key={achievement.id}
                                className="group flex flex-col md:flex-row gap-4 rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                                onClick={() => setModalImage({ src: achievement.image, alt: achievement.title })}
                            >
                                <div className="md:w-48 aspect-video md:aspect-square overflow-hidden bg-muted flex-shrink-0">
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="w-full h-full object-contain bg-neutral-900 p-2 transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                                        }}
                                    />
                                </div>
                                <div className="p-4 flex flex-col justify-center">
                                    <p className="text-xs text-primary font-medium mb-1">{achievement.issuer}</p>
                                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                        {achievement.title}
                                    </h4>
                                    {achievement.description && (
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {achievement.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Button size="lg" variant="outline" asChild className="group">
                        <Link to="/certificates">
                            View All Certificates & Achievements
                            <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
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

export default Certificates;
