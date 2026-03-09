import { useState, useEffect, useRef } from 'react';

/**
 * Hook to detect when an element enters the viewport using Intersection Observer.
 * @param {Object} options - Intersection Observer options (threshold, rootMargin).
 * @returns {[RefObject, boolean]} - The ref to attach to the element and its visibility state.
 */
export const useScrollReveal = (options = { threshold: 0.1, rootMargin: '0px' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Once it's visible, we can stop observing if we only want entrance animations
                if (elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            }
        }, options);

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options]);

    return [elementRef, isVisible];
};
