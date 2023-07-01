import React, { useState, useEffect, useRef } from 'react';
import styles from './fillbar.module.scss';

const Fillbar = ({ percentage }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const fillbarRef = useRef(null);

    // Run animation when component is visible
    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setProgress(oldProgress => {
                    if (oldProgress < percentage) {
                        return oldProgress + 1;
                    }
                    clearInterval(interval);
                    return oldProgress;
                });
            }, 20);
        }
    }, [isVisible, percentage]);

    // Setup intersection observer on mount
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            // entries[0] is the first (and only) entry in the array
            // isIntersecting is true when element is visible
            setIsVisible(entries[0].isIntersecting);
        });

        if (fillbarRef.current) {
            observer.observe(fillbarRef.current);
        }

        // Clean up observer on unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={fillbarRef} className={styles.fillbarContainer}>
            <div 
                className={styles.filler} 
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default Fillbar;
