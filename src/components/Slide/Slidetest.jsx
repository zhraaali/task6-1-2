import React,{useState} from 'react'
import './Slidetest.css'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"
const Slidetest = ({data}) => {
  console.log(data)
  const [slide,setSlide]= useState(0);

  const nextSlide=() =>{
    setSlide ( slide===mydata.length - 1 ? 0 : slide +1);
  }

  const prevSlide=() =>{
    setSlide (slide === 0 ? mydata.length - 1 :  slide - 1);
  }

  const mydata= Object.values(data)
  return (
    <div className='carousel'>
    <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
    {mydata.map((item,idx) =>{
      return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? 'slide' : 'slide slide-hidden'}/>
    })}
    <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
    
    </div>
  )
}

export default Slidetest