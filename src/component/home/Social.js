import React from 'react';
import {FaInstagram,FaGithubAlt, FaLinkedin} from 'react-icons/fa'

export default function Social() {
  return (
    <>
        <div className='home__social'>
             <a href='https://www.linkedin.com/' className='home__social-icon' target='_blank'>
                <FaLinkedin color='black'/>
            </a>
            <a href='https://www.github.com/' className='home__social-icon' target='_blank'>
                <FaGithubAlt color='black'/>
            </a>
            <a href='https://www.instagram.com/' className='home__social-icon' target='_blank'>
                <FaInstagram color='black'/>
            </a>
        </div>
    </>
  )
}
