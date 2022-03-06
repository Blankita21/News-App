import React from 'react'
import './Navnews.css'
import icon from '../icon.png'
import NewsSlider from './NewsSlider'

export const Navnews = ({setCategory}) => {
  return (
    <div className="nav">
      <div className="icon"> <NewsSlider setCategory= {setCategory} /> </div>
      <img 
        style={{cursor: "pointer"}}
        src={icon}
        height= "90%" 
        alt="icon" 
      />  
    </div>
  )
}

