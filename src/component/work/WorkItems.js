import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function WorkItems({item}) {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img'/>
        <h3 className='work__title'>{item.title}</h3>
        <a href='' className='work__button'>
            Demo <FaArrowRight className='work__button-icon'/>
        </a>
    </div>
  )
}
