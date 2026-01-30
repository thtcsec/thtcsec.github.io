import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendPageView } from "@/lib/ga4";

const PageTracker = () => {
    const location = useLocation();

    useEffect(() => {
        sendPageView(location.pathname + location.search);
    }, [location]);

    return null;
};

export default PageTracker;
