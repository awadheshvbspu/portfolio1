import React from 'react';
import './skills.css'
import Frontend from './Frontend';

export default function Skills() {
  return (
    <div className='skills section' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>My Technical level</span>
        <div className='skills__container container grid'>
            <Frontend/>
            
        </div>
    </div>
  )
}
