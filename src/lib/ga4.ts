import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;

export const initGA = () => {
    if (GA_MEASUREMENT_ID) {
        ReactGA.initialize(GA_MEASUREMENT_ID);
        console.log("GA4 Initialized");
    } else {
        console.warn("GA4 Measurement ID is missing!");
    }
};

export const sendEvent = (name: string, params?: any) => {
    if (!GA_MEASUREMENT_ID) return;

    ReactGA.event(name, params);
};

export const sendPageView = (path: string) => {
    if (!GA_MEASUREMENT_ID) return;

    ReactGA.send({ hitType: "pageview", page: path });
}
