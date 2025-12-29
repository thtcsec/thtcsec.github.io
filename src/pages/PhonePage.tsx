import { useState, useEffect } from "react";
import { ArrowLeft, Home, Smartphone, Battery, Zap, Cpu, Camera, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import ImageModal from "@/components/ImageModal";

const specs = [
    { icon: Battery, label: "Battery", value: "6000mAh", detail: "Silicon Carbon" },
    { icon: Zap, label: "Charging", value: "90W", detail: "Fast Charging" },
    { icon: HardDrive, label: "RAM/ROM", value: "16/512GB", detail: "LPDDR5X + UFS 4.0" },
    { icon: Cpu, label: "Chipset", value: "Dimensity 9400", detail: "MediaTek Flagship" },
    { icon: Camera, label: "Camera", value: "ZEISS", detail: "APO Telephoto" },
];

// Lazy loaded image component with skeleton
const LazyImage = ({
    src,
    alt,
    className,
    onClick
}: {
    src: string;
    alt: string;
    className?: string;
    onClick?: () => void;
}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative" onClick={onClick}>
            {!loaded && (
                <div className={`absolute inset-0 bg-neutral-800 animate-pulse rounded-xl ${className}`} />
            )}
            <img
                src={src}
                alt={alt}
                className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
};

const PhonePage = () => {
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
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            <Smartphone size={16} />
                            Daily Driver
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                            vivo X200 Pro
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            The flagship camera phone with ZEISS optics & Dimensity 9400
                        </p>
                    </div>

                    {/* Main Gallery */}
                    <div className="max-w-6xl mx-auto">
                        {/* Hero Images - 2 GIFs side by side */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Phone GIF */}
                            <div
                                className="relative rounded-2xl overflow-hidden bg-neutral-900 p-6 cursor-pointer group"
                            >
                                <LazyImage
                                    src="/images/vivo/vivo_phone.gif"
                                    alt="vivo X200 Pro"
                                    className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-500"
                                    onClick={() => setModalImage({ src: "/images/vivo/vivo_phone.gif", alt: "vivo X200 Pro" })}
                                />
                            </div>

                            {/* Bounce GIF */}
                            <div
                                className="relative rounded-2xl overflow-hidden bg-neutral-900 p-6 cursor-pointer group"
                            >
                                <LazyImage
                                    src="/images/vivo/vivo_bounce.gif"
                                    alt="vivo X200 Pro Bounce"
                                    className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-500"
                                    onClick={() => setModalImage({ src: "/images/vivo/vivo_bounce.gif", alt: "vivo X200 Pro Bounce" })}
                                />
                            </div>
                        </div>

                        {/* Box - Full Width */}
                        <div
                            className="relative rounded-2xl overflow-hidden bg-neutral-900 p-6 mb-8 cursor-pointer group"
                        >
                            <LazyImage
                                src="/images/vivo/vivo_box.jpg"
                                alt="vivo X200 Pro Box"
                                className="w-full max-w-2xl mx-auto h-auto rounded-xl group-hover:scale-105 transition-transform duration-500"
                                onClick={() => setModalImage({ src: "/images/vivo/vivo_box.jpg", alt: "vivo X200 Pro Box" })}
                            />
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                            {specs.map((spec, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all"
                                >
                                    <spec.icon size={24} className="mx-auto mb-2 text-primary" />
                                    <p className="text-lg font-bold text-foreground">{spec.value}</p>
                                    <p className="text-xs text-muted-foreground">{spec.detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* Feature Images */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {/* Dimensity 9400 */}
                            <div
                                className="relative rounded-2xl overflow-hidden bg-neutral-900 p-4 cursor-pointer group"
                            >
                                <LazyImage
                                    src="/images/vivo/vivo_dimen_9400.jpg"
                                    alt="Dimensity 9400"
                                    className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-500"
                                    onClick={() => setModalImage({ src: "/images/vivo/vivo_dimen_9400.jpg", alt: "Dimensity 9400" })}
                                />
                                <p className="text-center text-sm text-muted-foreground mt-2">Dimensity 9400</p>
                            </div>

                            {/* Origin OS */}
                            <div
                                className="relative rounded-2xl overflow-hidden bg-neutral-900 p-4 cursor-pointer group"
                            >
                                <LazyImage
                                    src="/images/vivo/vivo_origin_os.jpg"
                                    alt="Origin OS 5"
                                    className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-500"
                                    onClick={() => setModalImage({ src: "/images/vivo/vivo_origin_os.jpg", alt: "Origin OS 5" })}
                                />
                                <p className="text-center text-sm text-muted-foreground mt-2">Origin OS 5</p>
                            </div>

                            {/* ZEISS */}
                            <div
                                className="relative rounded-2xl overflow-hidden bg-neutral-900 p-4 cursor-pointer group"
                            >
                                <LazyImage
                                    src="/images/vivo/vivo_zeiss.png"
                                    alt="ZEISS Optics"
                                    className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-500"
                                    onClick={() => setModalImage({ src: "/images/vivo/vivo_zeiss.png", alt: "ZEISS Optics" })}
                                />
                                <p className="text-center text-sm text-muted-foreground mt-2">ZEISS T* Coating</p>
                            </div>
                        </div>

                        {/* Easter Egg Message */}
                        <div className="text-center py-8">
                            <p className="text-muted-foreground italic text-lg mb-2">
                                🐰 You found the easter egg! 🐰
                            </p>
                            <p className="text-sm text-muted-foreground/60">
                                This is my daily driver phone - hê hê hê
                            </p>
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

export default PhonePage;
