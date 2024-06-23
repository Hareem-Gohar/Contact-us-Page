import React from 'react'
import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import { LuMessagesSquare } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
const ContactForm = () => {
      return (
            <div className="container">
                  <div className="flex justify-between items-center flex-wrap lg:flex-row flex-col-reverse gap-y-10">
                        <div className="Form w-full lg:w-auto">
                              <div className="flex gap-6 mb-5 w-full flex-wrap justify-center">
                                    <Button text="VIA SUPPORT CHAT" icon={<LuMessagesSquare fontSize={20} />} />
                                    <Button text="VIA CALL" icon={<FiPhoneCall fontSize={20} />
                                    } />
                              </div>
                              <Button isOutline={true} text="VIA EMAIL FORM" icon={<FiPhoneCall fontSize={20} />
                              } />
                              <form action="submit" className='flex flex-col justify-center items-end mt-6 gap-5'>
                                    <div className={styles.formControl}>
                                          <label htmlFor="">Name</label>
                                          <input type="text" />
                                    </div>
                                    <div className={styles.formControl}>
                                          <label htmlFor="">Email</label>
                                          <input type="email" />
                                    </div>
                                    <div className={styles.formControl}>
                                          <label htmlFor="">Text</label>
                                          <textarea type="text"></textarea>
                                    </div>
                                    <Button text="Submit" />
                              </form>
                        </div>
                        <div className="ContantUs-img w-full lg:w-1/2">
                              <img className='w-full'  src="../public/Images/Contact-img.png" alt="" />
                        </div>
                  </div>
            </div>

      )
}

export default ContactForm