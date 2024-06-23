import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
      // console.log(props);
      const {isOutline , text, icon} = props;
      return (
            <button className={isOutline ? styles.outlineBtn : styles.btn}>{icon}{text}</button>
      )
}

export default Button
