import React from 'react';
import styles from './self.module.scss';
import Skill from '../Skill/Skill'
const Self = () => {
  return (
    <div data-aos='fade-in' className={styles.selfWrapper}>
    <div className={`${styles.self}`} >
      <span className={`${styles.introText}`}>Self Skills Evaluation</span>
      <div className={styles.skillsContainer}>
        <Skill name={"Frontend"} precent={87}/>
        <Skill name={"Backend"} precent={89}/>
        <Skill name={"Web3"} precent={79}/>
      </div>
    </div>
    </div>
  )
}


export default Self