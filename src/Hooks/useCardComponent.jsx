import { useState, useEffect } from 'react';

const useCardComponent = (isMobile, flipAnimationName, wordsToHighlight,styles) => {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isScaling, setIsScaling] = useState(false);


  const highlightWords = (sentence) => {
    const words = sentence.split(' ');
    return words.map((word, i) =>
      wordsToHighlight.includes(word.replace(',', ''))
        ? <span key={i} className={styles.bold}>{word} </span>
        : word + ' '
    );
  }

  useEffect(() => {
    const binding = {
      'flip1': 1000,
      'flip2': 1500,
      'flip3': 2000,
    };
    const timer = setTimeout(() => {
      setLoaded(true);
    }, binding[flipAnimationName]);

    return () => clearTimeout(timer);
  }, [flipAnimationName]);


  const handleMouseEnter = () => {
    if (isMobile || !loaded) return;
    setHovered(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setHovered(false);
  };

  const handleClick = () => {
    if (isMobile)
      setHovered((prevHovered) => !prevHovered);
  }

  return { hovered, loaded, highlightWords, handleMouseEnter, handleMouseLeave, handleClick };
};

export default useCardComponent;
