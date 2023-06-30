import React from 'react';
import styles from './card.module.scss';

const Card = ({ title,flipAnimationName, bulletpoints = [], utilities = [] }) => {
    const wordsToHighlight = ["Substrate","Rust", "EIP", "OpenZeppelin", "ChainLink", "testing", "Smart","Contracts", "Solidity","JWT","OAuth", "authorization","authentication", "MongoDB", "oriented", "data", "reliable ", "secure","efficient", "express","Nodejs","APIs","Bridging","Context","Zustand","Redux","HTML5","CSS3","React","JavaScript", "TypeScript", "responsive","thoroughness","best","practices", "user-centric", "Quality"];

    const highlightWords = (sentence) => {
        const words = sentence.split(' ');
        return words.map((word, i) =>
            wordsToHighlight.includes(word.replace(',', ''))
                ? <span key={i} className={styles.bold}>{word} </span>
                : word + ' '
        );
    }
    return (
        <div className={`${styles.card} ${styles[flipAnimationName]}`}>
            <h1 className={styles.cardTitle}>{title}</h1>
            <ul className={styles.bulletpoint} style={{ textAlign: 'start' }} >
                {bulletpoints.map((point, index) => (
                    <li key={index}>{highlightWords(point)}</li>
                ))}
            </ul>
        </div>
    );
};


export default Card