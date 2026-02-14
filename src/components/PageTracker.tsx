import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendPageView } from "@/lib/ga4";

const PageTracker = () => {
    const location = useLocation();

    useEffect(() => {
        sendPageView(location.pathname + location.search);
        
        // Update page title based on route
        const titles: Record<string, string> = {
            '/silentpipe': 'SilentPipe - Trình phát media ẩn danh & mạnh mẽ',
            '/projects': 'Projects - Trinh Hoang Tu',
            '/certificates': 'Certificates - Trinh Hoang Tu',
            '/contact': 'Contact - Trinh Hoang Tu',
            '/': 'Trinh Hoang Tu - Cybersecurity & DevSecOps'
        };
        
        const title = titles[location.pathname] || 'Trinh Hoang Tu - Cybersecurity & DevSecOps';
        document.title = title;
    }, [location]);

    return null;
};

export default PageTracker;
