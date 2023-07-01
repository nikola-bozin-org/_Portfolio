import React from 'react';
import styles from './skill.module.scss';
import Fillbar from '../Fillbar/Fillbar'

const Skill = ({name,precent}) => {
  return (
    <div className={styles.skill}>
    <span>{name}</span>
    <Fillbar percentage={precent} animationDelay={Math.random()*2} animationDuration={Math.max(Math.random()*40,10)}/>
  </div>
  )
}

export default Skill