import { useEffect, useState } from "react";

export function useIsInViewPort(targetElementId: string) {
    const [isInViewPort, setIsInViewPort] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isLoaded) return;

                setIsInViewPort(entry.isIntersecting);
                setIsLoaded(entry.isIntersecting);
            },
            {
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        let target: HTMLElement | null;

        if (typeof window !== "undefined") {
            target = document.getElementById(targetElementId);
            if (target) {
                observer.observe(target);
            }
        }

        if (isLoaded) {
            observer.unobserve(target!);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, [targetElementId, isLoaded]);

    return isInViewPort;
}
