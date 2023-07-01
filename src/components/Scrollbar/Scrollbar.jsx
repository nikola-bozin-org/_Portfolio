import React, { useEffect, useState } from 'react';
import './scrollbar.css';

const Scrollbar = ({thumbHeight=30}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollbarHeight, setScrollbarHeight] = useState(0);
  

  useEffect(() => {
    const calculateScrollDistance = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = getDocumentHeight();

      const totalDocScrollLength = docHeight - windowHeight;
      const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * (100 - thumbHeight));

      setScrollPosition(scrollPosition);
      setScrollbarHeight(windowHeight * 0.95);
    }

    const getDocumentHeight = () => {
      return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
    }

    window.addEventListener("scroll", calculateScrollDistance);
    window.addEventListener("resize", calculateScrollDistance);

    calculateScrollDistance();

    return () => {
      window.removeEventListener("scroll", calculateScrollDistance);
      window.removeEventListener("resize", calculateScrollDistance);
    }

  }, []);

  return (
    <div className='scrollbar' style={{height: `${scrollbarHeight}px`, top: '2.5vh'}}>
      <div 
        className='thumb' 
        style={{height: `${thumbHeight}%`, top: `${scrollPosition}%`}}
      />
    </div>
  );
};

export default Scrollbar;
