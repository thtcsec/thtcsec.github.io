import { useEffect, useState, useRef } from 'react';
import { sendEvent } from '@/lib/ga4';

const HUMAN_ACTIVITY_EVENT = 'human_activity';
const MIN_SCROLL_DEPTH = 0.5; // 50%
const MIN_TIME_ON_PAGE = 10000; // 10 seconds

export const useHumanActivity = () => {
    const [isHuman, setIsHuman] = useState(false);
    const hasFired = useRef(false);
    const timeRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Check if already marked as human in this session
        const sessionHuman = sessionStorage.getItem('is_human');
        if (sessionHuman) {
            setIsHuman(true);
            hasFired.current = true;
            return;
        }

        const handleActivity = () => {
            if (hasFired.current) return;

            // Conditions
            const scrollDepth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
            const isScrollValid = scrollDepth > MIN_SCROLL_DEPTH;

            // If we want stricter: AND condition. For now, let's say interaction OR scroll + time
            // The user req: scroll > 50%, click button, stay > 10s.
            // Let's track them independently and fire when a threshold is met.

            // We'll trust "click" as a strong signal.
            // We'll trust "scroll > 50%" as a strong signal.
            // Time is passive, so time alone might not be enough? 
            // User said: "stay > 10s" AND others? Or OR?
            // "Ví dụ: scroll > 50%, click button, stay > 10s" - imply ANY or ALL?
            // Usually "human" means they successfully did meaningful interaction.
            // Let's require: (Scroll > 50% OR Click) AND (Time > 10s).
            // Actually simpler: Just fire if they stay 10s AND do something.
        };

        // Let's implement a robust check:
        // 1. Must stay for > 10s
        // 2. AND (Scroll > 50% OR Click)

        let timeSatisfied = false;
        let interactionSatisfied = false;

        const checkHuman = () => {
            if (hasFired.current) return;
            if (timeSatisfied && interactionSatisfied) {
                console.log("Human detected! Sending event.");
                sendEvent(HUMAN_ACTIVITY_EVENT, {
                    event_category: "engagement",
                    value: 1
                });
                sessionStorage.setItem('is_human', 'true');
                setIsHuman(true);
                hasFired.current = true;

                // Cleanup
                window.removeEventListener('scroll', onScroll);
                window.removeEventListener('click', onClick);
            }
        }

        // Timer for 10s
        timeRef.current = setTimeout(() => {
            timeSatisfied = true;
            checkHuman();
        }, MIN_TIME_ON_PAGE);

        const onScroll = () => {
            const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
            if (scrollPercent > MIN_SCROLL_DEPTH) {
                interactionSatisfied = true;
                checkHuman();
            }
        };

        const onClick = () => {
            interactionSatisfied = true;
            checkHuman();
        }

        window.addEventListener('scroll', onScroll);
        window.addEventListener('click', onClick);

        return () => {
            if (timeRef.current) clearTimeout(timeRef.current);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('click', onClick);
        };
    }, []);

    return isHuman;
};
