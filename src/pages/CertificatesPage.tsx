import { useState, useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { certificates, achievements } from "@/data/certificates";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import ImageModal from "@/components/ImageModal";

const CertificatesPage = () => {
    const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 glass py-4">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button variant="outline" size="sm" asChild>
                            <Link to="/">
                                <Home size={16} className="mr-2" />
                                Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            Credentials
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                            Certificates & Achievements
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Professional certifications and recognition demonstrating continuous learning and growth
                        </p>
                    </div>

                    {/* Certificates Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
                            <span className="text-3xl">📜</span> Certificates
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certificates.map((cert) => (
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
                                    <div className="p-5">
                                        <p className="text-xs text-primary font-medium mb-1">{cert.issuer}</p>
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                            {cert.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
                            <span className="text-3xl">🏆</span> Achievements
                        </h2>
                        <div className="space-y-6">
                            {achievements.map((achievement) => (
                                <div
                                    key={achievement.id}
                                    className="group flex flex-col md:flex-row gap-6 rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                                    onClick={() => setModalImage({ src: achievement.image, alt: achievement.title })}
                                >
                                    <div className="md:w-96 aspect-video md:aspect-auto md:h-64 overflow-hidden bg-neutral-900 flex-shrink-0">
                                        <img
                                            src={achievement.image}
                                            alt={achievement.title}
                                            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = "/placeholder.svg";
                                            }}
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col justify-center">
                                        <p className="text-sm text-primary font-medium mb-2">{achievement.issuer}</p>
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                                            {achievement.title}
                                        </h3>
                                        {achievement.description && (
                                            <p className="text-muted-foreground leading-relaxed">
                                                {achievement.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 border-t border-border">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Trinh Hoang Tu. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Image Modal */}
            <ImageModal
                isOpen={!!modalImage}
                imageSrc={modalImage?.src || ""}
                imageAlt={modalImage?.alt || ""}
                onClose={() => setModalImage(null)}
            />
        </div>
    );
};

export default CertificatesPage;
