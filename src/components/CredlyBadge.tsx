import { useEffect, useState } from 'react';

interface CredlyBadgeProps {
    badgeId: string;
}

const CredlyBadge = ({ badgeId }: CredlyBadgeProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Check if script already exists to avoid duplicates
        const scriptId = 'credly-embed-script';
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = '//cdn.credly.com/assets/utilities/embed.js';
            script.async = true;
            document.body.appendChild(script);
        }

        script.onload = () => setIsLoaded(true);

        return () => {
            // Optional: Cleanup but generally we leave the script there
        };
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id={badgeId}
                data-share-badge-host="https://www.credly.com"
            ></div>
        </div>
    );
};

export default CredlyBadge;
