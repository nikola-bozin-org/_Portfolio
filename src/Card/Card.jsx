import React, { useEffect, useState } from 'react';
import styles from './card.module.scss';


const Card = ({ title,flipAnimationName, bulletpoints = [], utilities = [] }) => {
    const wordsToHighlight = ["Substrate","Rust", "EIP", "OpenZeppelin", "ChainLink", "testing", "Smart","Contracts", "Solidity","JWT","OAuth", "authorization","authentication", "MongoDB", "oriented", "data", "reliable ", "secure","efficient", "express","Nodejs","APIs","Bridging","Context","Zustand","Redux","HTML5","CSS3","React","JavaScript", "TypeScript", "responsive","thoroughness","best","practices", "user-centric", "Quality"];
    const [hovered, setHovered] = useState(false);
    const [loaded,setLoaded] = useState(false);

    const highlightWords = (sentence) => {
        const words = sentence.split(' ');
        return words.map((word, i) =>
            wordsToHighlight.includes(word.replace(',', ''))
                ? <span key={i} className={styles.bold}>{word} </span>
                : word + ' '
        );
    }

    useEffect(()=>{
        const binding ={
            'flip1':1000,
            'flip2':1500,
            'flip3':2000,
        }
        const timer = setTimeout(()=>{
            setLoaded(true);
        },binding[flipAnimationName])

        return () => clearTimeout(timer);
    },[])

    const handleMouseEnter = () => {
        if(!loaded) return;
        setHovered(true);
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
      };

      return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`${styles.card} ${styles[flipAnimationName]} ${hovered ? `${styles.flippedCard}` : `${loaded?`${styles.reverseFlippedCard}`:``}`}`}>
                <h1 className={`${styles.cardTitle} ${hovered ? `${styles.flippedChild}` : ""}`}>{!hovered?title:`Utility`}</h1>
                <ul className={`${styles.bulletpoint} ${hovered ? `${styles.flippedChild}` : ""}`} style={{ textAlign: 'start' }} >
                    {bulletpoints.map((point, index) => (
                        <li key={index}>{highlightWords(point)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
    
    
};


export default Card