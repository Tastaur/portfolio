import React from 'react'
import s from './MeetSection.module.css'
import mainPic from '../photo/1.jpg'
import {Fade} from 'react-reveal'


const MeetSection = (props)=>{
  return <section id={'home'} className={s.home}>
      <div className={s.wrapper}>
        <img src={mainPic} alt='' className={s.mainPic}/>
        <div className={s.background}></div>
      </div>
    <div className={s.titleContainer}>
      <Fade bottom><h1 className={s.title}> Привет, меня зовут Марк!</h1>
      <h3 className={s.subtitle}>Я начинающий Frontend-developer
      <br/>На данной странице я расскажу немного о себе</h3></Fade>
      <button  className={s.button}><a href={'mailto:trrrrex93@gmail.com'}>Написать на почту</a></button>
    </div>
  </section>
}

export default MeetSection
