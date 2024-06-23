import React, { useState } from 'react'
import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import { LuMessagesSquare } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
const ContactForm = () => {
      const [name , setName] = useState("")
      const [ email, setEmail] = useState("")
      const [text, setText] = useState("")
      // on submission ---Submit Data
      const onSubmit = () => {
            event.preventDefault();
            // console.log("name:", event.target[0]);
            console.log("name:", event.target[0].value);
            console.log("Email:", event.target[1].value);
            console.log("Text:", event.target[2].value);
            
            setName(event.target[0].value)
            setEmail(event.target[1].value)
            setText(event.target[2].value)

      }
      const viaOnCall = () => {
            window.open("tel:+2348030000000", "_self");
      }
      return (
            <div className="container">
                  <div className="flex justify-between items-center flex-wrap lg:flex-row flex-col-reverse gap-y-10">
                        <div className="Form w-full lg:w-auto">
                              <div className="flex gap-6 mb-5 w-full flex-wrap justify-center">
                                    <Button text="VIA SUPPORT CHAT" icon={<LuMessagesSquare fontSize={20} />} />
                                    <Button onClick={viaOnCall} text="VIA CALL" icon={<FiPhoneCall fontSize={20} />
                                    } />
                              </div>
                              <Button isOutline={true} text="VIA EMAIL FORM" icon={<FiPhoneCall fontSize={20} />
                              } />
                              <form action="submit" onSubmit={onSubmit} className='flex flex-col justify-center items-end mt-6 gap-5'>
                                    <div className={styles.formControl}>
                                          <label htmlFor="name">Name</label>
                                          <input type="text" name='text' />
                                    </div>
                                    <div className={styles.formControl}>
                                          <label htmlFor="email">Email</label>
                                          <input type="email" name='email' />
                                    </div>
                                    <div className={styles.formControl}>
                                          <label htmlFor="text">Text</label>
                                          <textarea type="text"></textarea>
                                    </div>
                                    <Button text="Submit" />
                              </form>
                        </div>
                        <div className="ContantUs-img w-full lg:w-1/2">
                              <img className='w-full' src="../public/Images/Contact-img.png" alt="" />
                        </div>
                  </div>
                  <div className='py-4 px-2 border-2 text-lg border-black my-4'>
                        Data you entered in Form: <br />{
                             "Name: " + name + "  " + "Email: " +  email + " "  + "Text: " +" " + text
                        }
                  </div>
            </div>

      )
}

export default ContactForm