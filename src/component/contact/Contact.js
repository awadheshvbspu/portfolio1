
import {FaArrowRight,FaTelegramPlane} from 'react-icons/fa';
import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gu2d31r', 'template_g10h9up', form.current, 'wi_lXlXSSLJVEHrUT')
      e.target.reset();
  };
  return (
    <section className='contact section' id='contact'>
        <h2 className='section__title'>Get in Touch</h2>
        <span className='section__subtitle'>Contact Me</span>
        <div className='contact__container container grid'>
            <div className='contact__info'>
            <h3 className='contact__title'>Talk to me</h3>
                <div className='contact__card'>
                    <i className='bx bx-mail-send contact__card-icon'></i>
                    <h3 className='contact__card-title'>Email</h3>
                    <span className='contact__card-data'>ay8595@gmail.com</span>
                    <a href='mailto:ay8595@gmail.com'>Write me <FaArrowRight className='contact__button-icon'/> </a>
                </div>
                <div className='contact__card'>
                    <i className='bx bxl-whatsapp contact__card-icon'></i>
                    <h3 className='contact__card-title'>Whatsapp</h3>
                    <span className='contact__card-data'>+91 9984503627</span>
                    <a href='https://api.whatsapp.com/send?phone=9984503627&text=Hello, more information!'>Write me <FaArrowRight className='contact__button-icon'/> </a>
                </div>
                <div className='contact__card'>
                    <i className='bx bxl-instagram contact__card-icon'></i>
                    <h3 className='contact__card-title'>Instagram</h3>
                    <span className='contact__card-data'>awadhesh3201</span>
                    <a href='https://instagram.com/awadhesh3201'>Write me <FaArrowRight className='contact__button-icon'/> </a>
                </div>
            </div>
        <div className='contact__content'>
            <h3 className='contact__title'>Write me your project</h3>
            <form className='contact__form'  ref={form} onSubmit={sendEmail}>
                <div className='contact__form-div'>
                    <label className='contact__form-tag'>Name</label>
                    <input type='text' name='name' className='contact__form-input' placeholder='Enter Your name'/>
                </div>
                <div className='contact__form-div'>
                    <label className='contact__form-tag'>Email</label>
                    <input type='email' name='email' className='contact__form-input' placeholder='Enter Your email'/>
                </div>
                <div className='contact__form-div contact__form-area'>
                    <label className='contact__form-tag'>Project</label>
                    <textarea name='project' cols='30' rows='10' className='contact__form-input' placeholder='Write Your Message'></textarea>
                </div>
                <button href='#contact' className='button button--flex' type="submit">
            Send Message <FaTelegramPlane size={25}/>

        </button>
            </form>
        </div>
        </div>

    </section>
  )
}
