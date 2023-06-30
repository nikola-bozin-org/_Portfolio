import React from 'react';
import styles from './fillbar.module.scss';

const Fillbar = ({ percentage }) => {
    return (
      <div className={styles.fillbarContainer}>
        <div 
          className={styles.filler} 
          style={{width: `${percentage}%`}}
        />
      </div>
    );
  };

export default Fillbar