import styles from './card.module.scss';
import useCardComponent from '../../hooks/useCardComponent'

const Card = ({ isMobile, title,flipAnimationName,wordsToHighlight, bulletpoints = [], utilities = [] }) => {
    const { hovered,highlightWords, loaded, handleMouseEnter, handleMouseLeave, handleClick } = useCardComponent(isMobile, flipAnimationName, wordsToHighlight,styles);
      return (
        <div
         onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`${styles.card} ${styles[flipAnimationName]} ${hovered ? `${styles.flippedCard}` : `${loaded?`${styles.reverseFlippedCard}`:``}`}`}>
                <h1 className={`${styles.cardTitle} ${hovered ? `${styles.flippedChild}` : ""}`}>{!hovered?title:`Utility`}</h1>
                { <ul className={`${styles.bulletpoint} ${hovered ? `${styles.flippedChild}` : ""}`} style={{ textAlign: 'start' }} >
                    {!hovered? bulletpoints.map((point, index) => (
                        <li key={index}>{highlightWords(point)}</li>
                    )):utilities.map((point, index) => (
                        <li key={index}>{highlightWords(point)}</li>
                    ))}
                </ul>}
            </div>
        </div>
    );
};


export default Card
