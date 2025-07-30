import { useState, useEffect, useCallback } from 'react';

const useScrollPosition = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.scrollY === 0) {
            setIsScrolled(false);
        } else {
            setIsScrolled(true);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Initial check in case the user is already scrolled
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return isScrolled;
};

export default useScrollPosition;
