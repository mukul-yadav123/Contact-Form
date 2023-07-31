import { MdMessage} from 'react-icons/md'
import styles from './ContactForm.module.css'
import Button from './Button'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import { useState } from 'react'

const ContactForm = () => {

  const[name,setName] = useState('Mukul');
  const[email,setEmail] = useState('Mukul@gmail.com');
  const[text,setText] = useState('Hello World');
  

  const onSubmit = (event) =>
  {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
  
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>

      <Button text="VIA CHAT SUPPORT" icon={<MdMessage fontSize='24px'/>} />
      <Button text="VIA CALL" icon={<FaPhoneAlt fontSize='24px'/>} />
        </div>
        <Button
        isOutline = {true} text="VIA EMAIL FORM" 
        icon={<HiMail fontSize='24px'/>} />
      <form action="" onSubmit={onSubmit}>
        <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' />
        </div>
        <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' />
        </div>
        <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
        <textarea rows="8" type="text" name='text' />
        </div>
        <div style = {
          {
            display: "flex",
            justifyContent: "end"
          }
        }>
        <Button
        isOutline = {false} text="SUBMIT BUTTON" 
        />
        </div>
        <div>
          { name + " " + email+ " " + text}
        </div>
      </form>
      </div>

      <div className={styles.contact_image}>
        <img src="images\Service 24_7-pana 1.svg" alt="contact-img" />
      </div>
    </section>
  )
}

export default ContactForm