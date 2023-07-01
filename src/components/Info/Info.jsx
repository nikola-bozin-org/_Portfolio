import React from 'react';
import styles from './info.module.scss';
import githubImg from '../../images/github.png'
import linkedinImg from '../../images/linkedin.png'

const Info = () => {
    return (
      <div className={`${styles.Info}`}>
        <a href="https://github.com/nikola-bozin-org" target="_blank" rel="noopener noreferrer">
          <img src={githubImg} alt="" className={styles.infoImage} />
        </a>
        <a href="https://www.linkedin.com/in/nikola-bozin-299048272/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinImg} alt="" className={styles.infoImage} />
        </a>
      </div>
    )
}
  

export default Info