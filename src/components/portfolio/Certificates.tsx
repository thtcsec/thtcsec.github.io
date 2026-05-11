import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredCertificates, featuredAchievements } from "@/data/certificates";
import { Link } from "react-router-dom";
import ImageModal from "@/components/ImageModal";
import CredlyBadge from "@/components/CredlyBadge";

const Certificates = () => {
    const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <section id="certificates" className="cinema-section">
            <div className="container mx-auto px-4">
                <div className="cinema-reveal mb-12 text-center">
                    <span className="cinema-kicker mb-4">
                        Credentials
                    </span>
                    <h2 className="cinema-title mb-4">
                        Certificates and awards
                    </h2>
                    <p className="cinema-subtitle">
                        Verified learning paths and competition outcomes with practical impact.
                    </p>
                </div>

                <div className="mb-12">
                    <h3 className="mb-6 text-xl font-bold text-foreground">
                        Certificates
                    </h3>
                    <div className="cinema-stagger grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredCertificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="cinema-card group relative cursor-pointer overflow-hidden transition-colors hover:border-primary/50"
                                onClick={() => {
                                    if (!cert.credlyBadgeId) {
                                        setModalImage({ src: cert.image, alt: cert.title });
                                    }
                                }}
                            >
                                <div 
                                    className="relative overflow-hidden aspect-[4/3] flex items-center justify-center"
                                    style={cert.credlyBadgeId ? { 
                                        backgroundImage: 'url(/images/certificates/credly_frame.png)', 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center' 
                                    } : {}}
                                >
                                    {cert.credlyBadgeId ? (
                                        <div className="relative z-10 scale-90 md:scale-105">
                                            <CredlyBadge badgeId={cert.credlyBadgeId} />
                                        </div>
                                    ) : (
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = "/placeholder.svg";
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="p-4">
                                    <div className="mb-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{cert.issuer}</div>
                                    <h4 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                                        {cert.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="mb-6 text-xl font-bold text-foreground">
                        Awards and prizes
                    </h3>
                    <div className="cinema-stagger grid md:grid-cols-2 gap-6">
                        {featuredAchievements.map((achievement) => (
                            <div
                                key={achievement.id}
                                className="cinema-card group flex cursor-pointer flex-col gap-4 overflow-hidden transition-colors hover:border-primary/50 md:flex-row"
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
                                    <div className="mb-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{achievement.issuer}</div>
                                    <h4 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                                        {achievement.title}
                                    </h4>
                                    {achievement.description && (
                                        <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                                            {achievement.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Button size="lg" variant="outline" asChild className="group">
                        <Link to="/certificates">
                            View All Certificates & Awards
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
