import React, { useState } from 'react';
import './qualification.css'

export default function Qualification() {
    const [toggle,setToggle] = useState(0);
    const toggleTab =(i)=>{
        setToggle(i);
    }
  return (
    <section className='qualification section'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My Personel Journey</span>
        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className={toggle ===1 ? 'qualification__button qualification__active button--flex':'qualification__button  button--flex'} onClick={()=>toggleTab(1)}>
                    <i className='uil uil-graduation-cap  qualification__icon'></i>Education
                </div>
                <div className={toggle ===2 ? 'qualification__button qualification__active button--flex':'qualification__button  button--flex'} onClick={()=>toggleTab(2)}>
                    <i className='uil uil-briefcase-alt qualification__icon'></i>Experience
                </div>
            </div>
            <div className='qualification__section'>
                <div className={toggle===1 ? 'qualification__content qualification__content-active':'qualification__content'}>
                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>Bachelor of Technology</h3>
                        <span className='qualification__subtitle'>Veer Bahadur Singh Purvanchal University Jaunpur(U.P)</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i>2018 - 2022
                        </div>
                    </div>
                    <div className=''>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>
                <div className='qualification__data'>
                <div></div>
                <div className=''>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                    <div>
                        <h3 className='qualification__title'>Information Technology</h3>
                        <span className='qualification__subtitle'></span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i>2018 - 2022
                        </div>
                    </div>
                    
                </div>
                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>Intermediate</h3>
                        <span className='qualification__subtitle'>Dr. S Nath Inter College Mardapur Sadat Ghazipur(U.P)</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i>2014 - 2016
                        </div>
                    </div>
                    <div className=''>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>
                <div className='qualification__data'>
                <div></div>
                <div className=''>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                    <div>
                        <h3 className='qualification__title'>PCM</h3>
                        <span className='qualification__subtitle'></span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i>2014 - 2016
                        </div>
                    </div>
                    
                </div>
                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>High School</h3>
                        <span className='qualification__subtitle'>Mata Dulari H S S Mirpur Manihari Ghazipur(U.P)</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i>2013 - 2014
                        </div>
                    </div>
                    <div className=''>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>
                <div className='qualification__data'>
                <div></div>
                <div className=''>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                    <div>
                        <h3 className='qualification__title'>Science</h3>
                        <span className='qualification__subtitle'></span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i>2013 - 2014
                        </div>
                    </div>
                    
                </div>
                </div>
                <div className={toggle===2 ? 'qualification__content qualification__content-active':'qualification__content'}>
                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>Software Development <br/>(intern)</h3>
                        <span className='qualification__subtitle'>Speqto Technologies Pvt Ltd Noida(U.P)</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i>April 2023 - July 2023
                        </div>
                    </div>
                    <div className=''>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>
                <div className='qualification__data'>
                <div></div>
                <div className=''>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                    <div>
                        <h3 className='qualification__title'>Frontend Development Design</h3>
                        <span className='qualification__subtitle'>ReactJS</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i>April 2023 - July 2023
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
