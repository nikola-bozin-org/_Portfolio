import useIsMobile from "./useIsMobile";
import React, { useState, useEffect, useRef } from 'react';

const useFillbarComponent =({percentage})=>{
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

    return {isVisible,setIsVisible,progress,setProgress,hovered,setHovered,fillbarRef,isMobile}
}



export default useFillbarComponent;