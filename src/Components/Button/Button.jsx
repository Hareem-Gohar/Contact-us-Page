import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
      // console.log(props);
      const {isOutline , text, icon, ...rest} = props;
      return (
            <button {...rest} className={isOutline ? styles.outlineBtn : styles.btn}>{icon}{text}</button>
      )
}

export default Button
