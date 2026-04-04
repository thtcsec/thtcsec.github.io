import { useState } from 'react';

interface CredlyBadgeProps {
    badgeId: string;
}

const CredlyBadge = ({ badgeId }: CredlyBadgeProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="w-full h-full flex items-center justify-center relative bg-transparent text-transparent">
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10 rounded-xl">
                    <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                </div>
            )}
            <iframe 
                src={`https://www.credly.com/embedded_badge/${badgeId}`}
                width="150" 
                height="270" 
                frameBorder="0" 
                scrolling="no"
                title="Credly Badge"
                onLoad={() => setIsLoaded(true)}
                className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            ></iframe>
        </div>
    );
};

export default CredlyBadge;
