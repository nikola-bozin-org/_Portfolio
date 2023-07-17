import React, { useState, useEffect, useRef } from 'react';
import styles from './fillbar.module.scss';
import useFillbarComponent from '../../Hooks/useFillbarComponent'


const Fillbar = ({ percentage,animationDuration =3.5,animationDelay=0}) => {
    const {isVisible,setIsVisible,progress,setProgress,hovered,setHovered,fillbarRef,isMobile} = useFillbarComponent(percentage);

    const onClick = ()=>{
        setHovered((hovered)=>!hovered)
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
                style={{
                    '--animation-duration': `${animationDuration}s`,
                    '--animation-delay': `${animationDelay}s`,
                     width: `${progress}%`
                    }}>
            </div>
                <span className={`${styles.precentageNumber} ${!hovered?`${styles.precentageNumberHidden}`:``}`}>{percentage}%</span>
        </div>
    );
};

export default Fillbar;
