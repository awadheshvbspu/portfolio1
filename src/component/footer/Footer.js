import React from 'react';
import {FaInstagram,FaGithubAlt, FaLinkedin} from 'react-icons/fa'
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Awadhesh</h1>
            <ul className='footer__list'>
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>
                <li>
                    <a href='#portfolio' className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href='#testimonial' className='footer__link'>Testimonials</a>
                </li>
            </ul>
            <div className='footer__social'>
            <a href='https://www.linkedin.com/' className='footer__social-link' target='_blank'>
                <FaLinkedin  size={25}/>
            </a>
            <a href='https://www.github.com/' className='footer__social-link' target='_blank'>
                <FaGithubAlt  size={25}/>
            </a>
            <a href='https://www.instagram.com/' className='footer__social-link' target='_blank'>
                <FaInstagram size={25}/>
            </a>
            </div>
            <span className='footer__copy'>
            &#169; Awadhesh Yadav. All rigths reserved
            </span>
        </div>
    </footer>
  )
}
