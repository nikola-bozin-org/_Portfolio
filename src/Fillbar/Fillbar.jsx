import React, { useState, useEffect, useRef } from 'react';
import styles from './fillbar.module.scss';
import useIsMobile from '../Hooks/useIsMobile'

const Fillbar = ({ percentage }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const [hovered,setHovered] = useState(false);
    const fillbarRef = useRef(null);
    const isMobile = useIsMobile();

    const onClick = ()=>{
        if(isMobile){
            setHovered((hovered)=>!hovered)
        }
    }

    const onMouseEnter = ()=>{
        if(isMobile) return;
        setHovered(true);
    }
    const onMouseLeave = ()=>{
        if(isMobile) return;
        setHovered(false);
    }

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

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            setIsVisible(entries[0].isIntersecting);
        });
        if (fillbarRef.current) {
            observer.observe(fillbarRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={fillbarRef} className={styles.fillbarContainer}>
            <div
                className={styles.filler}
                style={{ width: `${progress}%` }}>
            </div>
                <span className={`${styles.precentageNumber} ${!hovered?`${styles.precentageNumberHidden}`:``}`}>{percentage}%</span>
        </div>
    );
};

export default Fillbar;
