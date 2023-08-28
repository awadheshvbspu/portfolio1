import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';


export default function Frontend() {
  return (
   <div className='skills__container'>
     <div className='skills__content'>
        <h3 className='skills__title'>Frontend Developer</h3>
        <div className='skills__box'>
        <div className='skills__group'>

        <div className='skills__data'>
            <FaCheckCircle size={20} className='icon'/>
            <div>
                <h3 className='skills__name'>HTML</h3>
                <span className='skills__level'>Basic</span>
            </div>
        </div>
        <div className='skills__data'>
            <FaCheckCircle size={20} className='icon'/>
            <div>
                <h3 className='skills__name'>CSS</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
        </div>
        <div className='skills__data'>
            <FaCheckCircle size={20} className='icon'/>
            <div>
                <h3 className='skills__name'>JavaScript</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
        </div>
        
        </div>
        <div className='skills__group'>

        <div className='skills__data'>
            <FaCheckCircle size={20} className='icon'/>
            <div>
                <h3 className='skills__name'>ReactJS</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
        </div>
        <div className='skills__data'>
            <FaCheckCircle size={20} className='icon'/>
            <div>
                <h3 className='skills__name'>Bootstrap</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
        </div>
        <div className='skills__data'>
            <FaCheckCircle size={20} className='icon'/>
            <div>
                <h3 className='skills__name'>Tailwind CSS</h3>
                <span className='skills__level'>Intermediate</span>
            </div>
        </div>
        </div>

        </div>
    </div>
   </div>
  )
}
