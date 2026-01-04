import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
    isOpen: boolean;
    imageSrc: string;
    imageAlt: string;
    onClose: () => void;
}

const ImageModal = ({ isOpen, imageSrc, imageAlt, onClose }: ImageModalProps) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={onClose}
            style={{ willChange: 'opacity' }}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white z-10"
                aria-label="Close"
            >
                <X size={24} />
            </button>

            {/* Image */}
            <img
                src={imageSrc}
                alt={imageAlt}
                className="max-w-[90vw] max-h-[90vh] object-contain"
                style={{ 
                    imageRendering: 'high-quality',
                    contentVisibility: 'auto'
                }}
                onClick={(e) => e.stopPropagation()}
            />

            {/* Hint */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                Press ESC or click outside to close
            </p>
        </div>
    );
};

export default ImageModal;
