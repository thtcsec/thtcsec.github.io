import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
    isOpen: boolean;
    imageSrc?: string;
    images?: string[];
    initialIndex?: number;
    imageAlt: string;
    onClose: () => void;
}

const ImageModal = ({ isOpen, imageSrc, images, initialIndex = 0, imageAlt, onClose }: ImageModalProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const validImages = images && images.length > 0 ? images : (imageSrc ? [imageSrc] : []);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
        }
    }, [isOpen, initialIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % validImages.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, validImages.length]);

    if (!isOpen || validImages.length === 0) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white z-10 transition-colors"
                aria-label="Close"
            >
                <X size={24} />
            </button>

            {/* Main Image Container */}
            <div className="relative flex items-center justify-center w-full flex-1 min-h-0 overflow-hidden px-4 md:px-16 py-4" onClick={(e) => e.stopPropagation()}>
                {validImages.length > 1 && (
                    <button onClick={handlePrev} className="absolute left-2 md:left-6 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white z-10 transition-colors">
                        <ChevronLeft size={32} />
                    </button>
                )}
                
                <img
                    src={validImages[currentIndex]}
                    alt={`${imageAlt} - ${currentIndex + 1}`}
                    className="max-w-full max-h-full object-contain select-none"
                    style={{ imageRendering: 'high-quality' }}
                />

                {validImages.length > 1 && (
                    <button onClick={handleNext} className="absolute right-2 md:right-6 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white z-10 transition-colors">
                        <ChevronRight size={32} />
                    </button>
                )}
            </div>

            {/* Thumbnails */}
            {validImages.length > 1 && (
                <div className="w-full flex justify-center gap-2 px-4 pb-6 pt-2 h-20 md:h-24 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
                    {validImages.map((src, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`relative h-full aspect-video flex-shrink-0 overflow-hidden rounded-md border-2 transition-all ${idx === currentIndex ? 'border-primary opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                        >
                            <img src={src} alt="Thumbnail" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageModal;
