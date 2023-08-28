import React from 'react';
import {FaAward, FaBriefcase,FaHeadphones} from 'react-icons/fa'

export default function Info() {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
      <FaAward size={25} className='about__icon'/>
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'>3 months working</span>
      </div>
      <div className='about__box'>
      <FaBriefcase size={25} className='about__icon'/>
        <h3 className='about__title'>4+ Projects</h3>
        <span className='about__subtitle'>Completed</span>
      </div>
      <div className='about__box'>
      <FaHeadphones size={25} className='about__icon'/>
        <h3 className='about__title'>Support</h3>
        <span className='about__subtitle'>Online 24/7</span>
      </div>
      
    </div>
  )
}
