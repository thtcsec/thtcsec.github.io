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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 animate-in fade-in duration-200"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all duration-200 hover:rotate-90 z-10"
                aria-label="Close"
            >
                <X size={28} />
            </button>

            {/* Image */}
            <img
                src={imageSrc}
                alt={imageAlt}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
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
