import React, { useState } from 'react';
import './header.css'

export default function Header() {

    window.addEventListener('scroll', function(){
        const header =document.querySelector('.header')
        if (this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove('scroll-header')
        })
    const [Toggle,showMenu] =useState(false)
    const [active,setActive] =useState("#home")
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav__logo'>Awadhesh Yadav</a>
            <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                <ul className='nav__list grid'>
                    <li className='nav__item'>
                        <a href='#home' className={active === '#home' ? 'nav__link active-link' : 'nav__link'} onClick={()=>setActive('#home')}>
                            <i className='uil uil-estate nav__icon'></i>Home
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#about' className={active === '#about' ? 'nav__link active-link' : 'nav__link'} onClick={()=>setActive('#about')}>
                            <i className='uil uil-user nav__icon'></i>About
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#skills' className={active === '#skills' ? 'nav__link active-link' : 'nav__link'} onClick={()=>setActive('#skills')}>
                            <i className='uil uil-file-alt nav__icon'></i>Skills
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#services' className={active === '#services' ? 'nav__link active-link' : 'nav__link'} onClick={()=>setActive('#services')}>
                            <i className='uil uil-briefcase-alt nav__icon'></i>Services
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#portfolio' className={active === '#portfolio' ? 'nav__link active-link' : 'nav__link'} onClick={()=>setActive('#portfolio')}>
                            <i className='uil uil-scenery nav__icon'></i>Portfolio
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#contact' className={active === '#contact' ? 'nav__link active-link' : 'nav__link'} onClick={()=>setActive('#contact')}>
                            <i className='uil uil-message nav__icon'></i>Contact
                        </a>
                    </li>
                </ul>
                <i className='uil uil-times nav__close' onClick={()=>showMenu(!Toggle)}></i>
            </div>
            <div className='nav__toggle' onClick={()=>showMenu(!Toggle)}>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>
  )
}
