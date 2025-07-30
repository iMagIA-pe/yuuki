import { useEffect, useState } from 'react';

export const useWindowScreen = (callback, options) => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                }
            });
        }, options);

        elements.forEach(element => {
            if (element) observer.observe(element);
        });

        return () => {
            elements.forEach(element => {
                if (element) observer.unobserve(element);
            });
        };
    }, [elements, options, callback]);

    return setElements;
};
