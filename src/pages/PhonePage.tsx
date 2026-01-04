import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import ImageModal from "@/components/ImageModal";

const keyFeatures = [
    {
        icon: "mdi:battery-charging-100",
        title: "6000mAh Battery",
        description: "Si/C Battery • 90W Wired • 30W Wireless",
        color: "text-green-500"
    },
    {
        icon: "mdi:camera-iris",
        title: "Triple ZEISS Camera",
        description: "200MP Periscope • 50MP Wide • 50MP Ultra Wide",
        color: "text-blue-500"
    },
    {
        icon: "mdi:television",
        title: "4500 Nits Display",
        description: "6.78'' LTPO AMOLED • 120Hz • HDR10+ • Dolby Vision",
        color: "text-purple-500"
    },
    {
        icon: "mdi:chip",
        title: "Dimensity 9400",
        description: "3nm Process • Immortalis-G925 GPU • AnTuTu 2.6M",
        color: "text-orange-500"
    }
];

const specs = [
    { icon: "mdi:cellphone", label: "Display", value: "6.78'' LTPO", detail: "2800×1260 • 4500 nits" },
    { icon: "mdi:refresh", label: "Refresh Rate", value: "120Hz", detail: "2160Hz PWM dimming" },
    { icon: "mdi:chip", label: "Chipset", value: "Dimensity 9400", detail: "3nm • Cortex-X925" },
    { icon: "mdi:gpu", label: "GPU", value: "Immortalis-G925", detail: "3DMark: 6173" },
    { icon: "mdi:memory", label: "RAM/ROM", value: "16/512GB", detail: "UFS 4.0" },
    { icon: "mdi:camera", label: "Main Camera", value: "50MP", detail: "1/1.28'' • OIS" },
    { icon: "mdi:telescope", label: "Telephoto", value: "200MP", detail: "3.7x • Periscope" },
    { icon: "mdi:camera-iris", label: "Ultra Wide", value: "50MP", detail: "119° • AF" },
    { icon: "mdi:camera-front", label: "Selfie", value: "32MP", detail: "4K@60fps" },
    { icon: "mdi:video", label: "Video", value: "8K@30fps", detail: "Dolby Vision HDR" },
    { icon: "mdi:battery-charging-100", label: "Battery", value: "6000mAh", detail: "Si/C Battery" },
    { icon: "mdi:flash", label: "Charging", value: "90W", detail: "30W Wireless" },
    { icon: "mdi:android", label: "OS", value: "Origin OS 6", detail: "Android 16" },
    { icon: "mdi:weight", label: "Weight", value: "223g", detail: "8.2mm Thin" },
    { icon: "mdi:water", label: "Durability", value: "IP68/IP69", detail: "Armor Glass" },
    { icon: "mdi:wifi", label: "Connectivity", value: "Wi-Fi 7", detail: "Bluetooth 5.4" },
];

const whyChoose = [
    { icon: "mdi:lightning-bolt", title: "Flagship Performance", desc: "AnTuTu 2.6M • Gaming at peak performance" },
    { icon: "mdi:camera-plus", title: "ZEISS Photography", desc: "200MP Periscope • 8K Video • Dolby Vision" },
    { icon: "mdi:battery-heart", title: "All-Day Battery", desc: "6000mAh Si/C • 90W Fast + 30W Wireless" },
    { icon: "mdi:android", title: "Latest Android 16", desc: "Origin OS 6 • 4 Major OS Updates" },
    { icon: "mdi:brightness-7", title: "Brightest Display", desc: "4500 nits Peak • LTPO AMOLED • 120Hz" },
    { icon: "mdi:shield-check", title: "Military Grade", desc: "IP68/IP69 • Armor Glass • Drop Resistant" },
];

const benchmarkScores = [
    { name: "AnTuTu v10", score: "2,609,095", icon: "mdi:speedometer", color: "text-red-500" },
    { name: "GeekBench 6", score: "8,152", icon: "mdi:chip", color: "text-blue-500" },
    { name: "3DMark Wild Life", score: "6,173", icon: "mdi:gamepad-variant", color: "text-purple-500" },
    { name: "Display Brightness", score: "1,881 nits", icon: "mdi:brightness-7", color: "text-yellow-500" },
];

const colorOptions = [
    { name: "Cosmos Black", color: "bg-black", border: "border-gray-700" },
    { name: "Titanium Grey", color: "bg-gray-500", border: "border-gray-400" },
    { name: "Blue", color: "bg-blue-600", border: "border-blue-500" },
    { name: "White", color: "bg-white", border: "border-gray-300" },
];

// Optimized lazy loaded image with Intersection Observer
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
    const [inView, setInView] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px', // Load slightly before visible
                threshold: 0.01
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={imgRef} className="relative" onClick={onClick}>
            {!loaded && (
                <div className={`absolute inset-0 bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 rounded-xl ${className}`}>
                    {inView && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                        </div>
                    )}
                </div>
            )}
            {inView && (
                <img
                    src={src}
                    alt={alt}
                    className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setLoaded(true)}
                />
            )}
        </div>
    );
};

const PhonePage = () => {
    const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 glass py-4">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                        <Icon icon="mdi:arrow-left" className="w-5 h-5" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button variant="outline" size="sm" asChild>
                            <Link to="/">
                                <Icon icon="mdi:home" className="w-4 h-4 mr-2" />
                                Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>

            <main className="pt-16">
                {/* Hero Section - Full Screen */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-orange-500/10" />
                    
                    <div className="container mx-auto px-4 py-20 relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left: Text Content */}
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                    <Icon icon="mdi:cellphone" className="w-4 h-4" />
                                    Daily Driver
                                </div>
                                
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                                    vivo X200 Pro
                                </h1>
                                
                                <p className="text-xl md:text-2xl text-muted-foreground">
                                    Flagship Camera Phone with ZEISS Optics & Dimensity 9400
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Button size="lg" className="text-lg px-8" asChild>
                                        <a href="#specs">
                                            <Icon icon="mdi:information" className="w-5 h-5 mr-2" />
                                            View Specs
                                        </a>
                                    </Button>
                                    <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                                        <a href="#gallery">
                                            <Icon icon="mdi:image-multiple" className="w-5 h-5 mr-2" />
                                            Gallery
                                        </a>
                                    </Button>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-3 gap-4 pt-6">
                                    <div className="text-center p-4 rounded-xl bg-card border border-border">
                                        <p className="text-2xl font-bold text-primary">6000</p>
                                        <p className="text-xs text-muted-foreground">mAh Battery</p>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-card border border-border">
                                        <p className="text-2xl font-bold text-primary">200MP</p>
                                        <p className="text-xs text-muted-foreground">ZEISS Tele</p>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-card border border-border">
                                        <p className="text-2xl font-bold text-primary">90W</p>
                                        <p className="text-xs text-muted-foreground">Fast Charge</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Phone Image */}
                            <div className="relative">
                                <div className="relative cursor-pointer group" onClick={() => setModalImage({ src: "/images/vivo/vivo_phone.gif", alt: "vivo X200 Pro" })}>
                                    <LazyImage
                                        src="/images/vivo/vivo_phone.gif"
                                        alt="vivo X200 Pro"
                                        className="w-full h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                        <Icon icon="mdi:chevron-down" className="w-8 h-8 text-muted-foreground" />
                    </div>
                </section>

                {/* Key Features Section */}
                <section className="py-20 bg-card/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                                Flagship Features
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Powered by cutting-edge technology for the ultimate smartphone experience
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {keyFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform`}>
                                        <Icon icon={feature.icon} className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Smooth Origin OS Section */}
                <section className="py-20 relative overflow-hidden">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(/images/vivo/vivo_smooth_origin.jpg)`,
                            transform: `translateY(${scrollY * 0.3}px)`,
                            filter: 'brightness(0.7)'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-sm font-medium mb-6">
                                <Icon icon="simple-icons:vivo" className="w-4 h-4" />
                                Origin OS 6
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                                Smooth at Origin
                            </h2>
                            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
                                Experience the fluidity of Origin OS 6 - built for performance, designed for beauty
                            </p>
                            <Button 
                                size="lg" 
                                className="bg-white text-black hover:bg-white/90"
                                onClick={() => setModalImage({ src: "/images/vivo/vivo_smooth_origin.jpg", alt: "Origin OS 5 - Smooth at Origin" })}
                            >
                                <Icon icon="mdi:fullscreen" className="w-5 h-5 mr-2" />
                                View Full Image
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Detailed Specs Section */}
                <section id="specs" className="py-20 bg-card/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                                Technical Specifications
                            </h2>
                            <p className="text-muted-foreground">
                                Every detail engineered to perfection
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                            {specs.map((spec, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                                >
                                    <Icon icon={spec.icon} className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                                    <p className="text-xs text-muted-foreground mb-1 text-center">{spec.label}</p>
                                    <p className="text-lg font-bold text-foreground text-center">{spec.value}</p>
                                    <p className="text-xs text-muted-foreground text-center mt-1">{spec.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section id="gallery" className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                                Product Gallery
                            </h2>
                        </div>

                        <div className="max-w-6xl mx-auto space-y-8">
                            {/* Box Unboxing - Full Width */}
                            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 p-8 cursor-pointer group">
                                <LazyImage
                                    src="/images/vivo/vivo_box.jpg"
                                    alt="vivo X200 Pro Unboxing"
                                    className="w-full max-w-3xl mx-auto h-auto rounded-xl group-hover:scale-105 transition-transform duration-500"
                                    onClick={() => setModalImage({ src: "/images/vivo/vivo_box.jpg", alt: "vivo X200 Pro Box" })}
                                />
                            </div>

                            {/* Brand Features - 4 Cards Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Bounce Animation */}
                                <div className="relative rounded-2xl overflow-hidden bg-neutral-900 p-6 cursor-pointer group">
                                    <LazyImage
                                        src="/images/vivo/vivo_bounce.gif"
                                        alt="vivo Animation"
                                        className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                                        onClick={() => setModalImage({ src: "/images/vivo/vivo_bounce.gif", alt: "vivo Bounce Animation" })}
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="text-lg font-bold text-white mb-1">vivo Brand</h3>
                                        <p className="text-sm text-gray-400">Smooth Experience</p>
                                    </div>
                                </div>

                                {/* Dimensity 9400 */}
                                <div className="relative rounded-2xl overflow-hidden bg-neutral-900 p-6 cursor-pointer group">
                                    <LazyImage
                                        src="/images/vivo/vivo_dimen_9400_new.jpg"
                                        alt="Dimensity 9400 Chipset"
                                        className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                                        onClick={() => setModalImage({ src: "/images/vivo/vivo_dimen_9400_new.jpg", alt: "Dimensity 9400" })}
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="text-lg font-bold text-white mb-1">Dimensity 9400</h3>
                                        <p className="text-sm text-gray-400">3nm Flagship Chipset</p>
                                    </div>
                                </div>

                                {/* Origin OS */}
                                <div className="relative rounded-2xl overflow-hidden bg-neutral-900 p-6 cursor-pointer group">
                                    <LazyImage
                                        src="/images/vivo/vivo_origin_os.jpg"
                                        alt="Origin OS 6"
                                        className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                                        onClick={() => setModalImage({ src: "/images/vivo/vivo_origin_os.jpg", alt: "Origin OS 6" })}
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="text-lg font-bold text-white mb-1">Origin OS 6</h3>
                                        <p className="text-sm text-gray-400">Android 16</p>
                                    </div>
                                </div>

                                {/* ZEISS */}
                                <div className="relative rounded-2xl overflow-hidden bg-neutral-900 p-6 cursor-pointer group">
                                    <LazyImage
                                        src="/images/vivo/vivo_zeiss.png"
                                        alt="ZEISS Optics Partnership"
                                        className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                                        onClick={() => setModalImage({ src: "/images/vivo/vivo_zeiss.png", alt: "ZEISS Optics" })}
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="text-lg font-bold text-white mb-1">ZEISS T* Coating</h3>
                                        <p className="text-sm text-gray-400">Professional Optics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Shot on vivo Gallery - Easter Egg */}
                <section className="py-20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-orange-500/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-4">
                                <Icon icon="mdi:camera-enhance" className="w-6 h-6 text-primary" />
                                <span className="text-sm font-semibold text-primary">Easter Egg Unlocked</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                                Shot on vivo X200 Pro
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Real-world photography captured with 200MP ZEISS camera system
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {[
                                { src: "/images/gallery/shot_on_vivo_new/IMG_20260104_093210.jpg", alt: "Morning Shot - Jan 4, 2026" },
                                { src: "/images/gallery/shot_on_vivo_new/IMG_20251203_220142.jpg", alt: "Night Photography - Dec 3, 2025" },
                                { src: "/images/gallery/shot_on_vivo_new/IMG_20251130_135117.jpg", alt: "Afternoon Light - Nov 30, 2025" },
                                { src: "/images/gallery/shot_on_vivo_new/IMG_20251125_110903.jpg", alt: "Urban Scene - Nov 25, 2025" },
                                { src: "/images/gallery/shot_on_vivo_new/IMG_20251119_090659.jpg", alt: "Morning Photography - Nov 19, 2025" },
                                { src: "/images/gallery/shot_on_vivo_new/IMG_20251119_090115.jpg", alt: "Landscape - Nov 19, 2025" },
                                { src: "/images/gallery/shot_on_vivo_new/IMG_20251119_085949.jpg", alt: "Nature Photography - Nov 19, 2025" },
                                { src: "/images/gallery/shot_on_vivo_new/IMG_20251119_083642.jpg", alt: "Outdoor Scene - Nov 19, 2025" },
                                { src: "/images/gallery/shot_on_vivo_new/IMG_20251116_132820.jpg", alt: "Afternoon Shot - Nov 16, 2025" },
                                { src: "/images/gallery/shot_on_vivo_new/IMG_20251116_132533.jpg", alt: "Portrait Mode - Nov 16, 2025" },
                                { src: "/images/gallery/shot_on_vivo_new/IMG_20251116_114355.jpg", alt: "Midday Photography - Nov 16, 2025" },
                                { src: "/images/gallery/shot_on_vivo_new/IMG_20251105_181752.jpg", alt: "Evening Golden Hour - Nov 5, 2025" }
                            ].map((photo, index) => (
                                <div
                                    key={index}
                                    className="relative rounded-2xl overflow-hidden cursor-pointer bg-card border border-border/50"
                                    style={{ 
                                        minHeight: '400px',
                                        contentVisibility: 'auto',
                                        contain: 'layout style paint'
                                    }}
                                    onClick={() => setModalImage({ src: photo.src, alt: photo.alt })}
                                >
                                    <LazyImage
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full h-[400px] object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm p-4 pointer-events-none">
                                        <div className="flex items-center gap-2 text-white">
                                            <Icon icon="mdi:camera" className="w-4 h-4" />
                                            <span className="text-xs font-medium">200MP ZEISS</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-sm text-muted-foreground">
                                <Icon icon="mdi:information-outline" className="inline w-4 h-4 mr-1" />
                                All photos captured with vivo X200 Pro | No post-processing
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="py-20 bg-card/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                                Why I Chose This Phone
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                The perfect balance of performance, photography, and battery life
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {whyChoose.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Icon icon={item.icon} className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benchmark Scores Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                                Performance Benchmarks
                            </h2>
                            <p className="text-muted-foreground">
                                Real-world testing results from GSMArena
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {benchmarkScores.map((benchmark, index) => (
                                <div
                                    key={index}
                                    className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                                >
                                    <Icon icon={benchmark.icon} className={`w-12 h-12 mx-auto mb-4 ${benchmark.color} group-hover:scale-110 transition-transform`} />
                                    <p className="text-sm text-muted-foreground mb-2">{benchmark.name}</p>
                                    <p className="text-3xl font-bold text-foreground mb-1">{benchmark.score}</p>
                                    <div className="h-1 w-full bg-muted rounded-full mt-4 overflow-hidden">
                                        <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "95%" }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Color Options Section */}
                <section className="py-20 bg-card/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                                Available Colors
                            </h2>
                            <p className="text-muted-foreground">
                                Choose your perfect style
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                            {colorOptions.map((color, index) => (
                                <div
                                    key={index}
                                    className="group text-center cursor-pointer"
                                >
                                    <div className={`w-20 h-20 rounded-full ${color.color} border-4 ${color.border} shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-3`} />
                                    <p className="text-sm font-medium text-foreground">{color.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Easter Egg - moved to Why Choose section */}

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary/20 via-purple-500/20 to-orange-500/20 border border-primary/30">
                            <Icon icon="simple-icons:vivo" className="w-16 h-16 mx-auto mb-6 text-primary" />
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                                Experience vivo X200 Pro
                            </h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                The ultimate flagship smartphone for creators and tech enthusiasts
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" asChild>
                                    <a href="https://www.vivo.com" target="_blank" rel="noopener noreferrer">
                                        <Icon icon="mdi:web" className="w-5 h-5 mr-2" />
                                        Visit vivo Website
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link to="/">
                                        <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-2" />
                                        Back to Portfolio
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
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
