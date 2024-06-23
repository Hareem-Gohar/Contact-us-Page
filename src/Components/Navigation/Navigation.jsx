import React from 'react'
import styles from './Navigation.module.css';
const Navigation = () => {
      // console.log(styles);
  return (
      
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
            <a href="#"><img src="../public/Images/logo.png" alt="" /></a>
      </div>
      <div className="navLinks">
            <ul>
                  <li>
                        <a href="#">Home</a>
                  </li>
                  <li>
                        <a href="#">Login</a>
                  </li>
                  <li>
                        <a href="#">Contact Us</a>
                  </li>
            </ul>
      </div>
    </nav>
  )
}

export default Navigation
