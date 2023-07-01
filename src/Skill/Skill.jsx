import React from 'react';
import styles from './skill.module.scss';
import Fillbar from '../Fillbar/Fillbar'

const Skill = ({name,precent}) => {
  return (
    <div className={styles.skill}>
    <span>{name}</span>
    <Fillbar percentage={precent}/>
  </div>
  )
}

export default Skill