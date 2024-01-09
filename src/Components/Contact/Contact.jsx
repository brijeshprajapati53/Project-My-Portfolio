import React,{useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {themeContext} from '../../Context'
import { useContext } from 'react'
// import swal from 'sweetalert';



// const Swal = require('sweetalert2')


const  Contact = () => {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const form = useRef();


  const [done,setDone]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_snsb229', 'template_ehbtoxn', form.current, '7fSEPuJw_evxm-w7C')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset(e)
  };


  return (

    
    <div className="contact-form" style={{background:darkMode? '#191919': ''}} id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode? 'white': ''}}>Get in Touch</span>
                <span > Contact ME</span>
                <div className="blur s-blur" style={{
                    background:"ABF1FF94"
                }}></div>

            </div>
        </div>

  <div className="c-right">
      <form  ref={form} onSubmit={sendEmail}>
        <input type="text" name='user-name'  className='user' placeholder='Name'/>
        <input type="email" name='user-email'  className='user' placeholder='Email'/>
         <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='user'></textarea>
        <input  className='button' type="submit" value='Send'  />
        <span>{done && "Thanks for contacting me !" }</span>
 <br />
        <div className="blur c-blur" style={{
            background:'var(--purple)'
        }}></div>
      </form>
  </div>




    </div>
  )
}

export default Contact