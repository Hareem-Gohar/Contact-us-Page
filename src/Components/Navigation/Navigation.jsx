import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import styles from './Navigation.module.css';
const Navigation = () => {
      // console.log(styles);
       const [openMenu, setOpenMenu]=useState("false");
       const toggleMenu = () =>{
            setOpenMenu(!openMenu); 
       }
  return (
      
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
            <a href="#"><img src="../public/Images/logo.png" alt="" /></a>
      </div>
      <div className="navLinks md:block hidden">
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
      <div className='md:hidden block'>
            <button onClick={toggleMenu} className="navToggle">
            {openMenu ? <FiAlignJustify fontSize={30} /> : <MdOutlineCancel fontSize={30}/>}
            </button>
            <div className={openMenu ? "showMenu" : "closeMenu"}>
            <ul className='flex flex-col justify-center absolute top-20 left-0 bg-black py-10  text-white text-center w-full'>
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
      </div>
      
    </nav>
  )
}

export default Navigation
