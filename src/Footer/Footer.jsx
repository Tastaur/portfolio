import React from 'react'
import s from './Footer.module.css'
import facebookIcon from './facebook.png'
import vkIcon from './vk-social-logotype.png'
import githubIcon from './github.png'
import telegramIcon from './telegram.png'
import phoneIcon from './call.png'
import twitterIcon from './twitter.png'

const Footer = (props) => {
  return <div className={s.container} id={'footer'}>
   <div className={s.imgContainer}>
     <a href='https://facebook.com/lth.tastaur.1/'><img className={s.img} src={facebookIcon} alt=''/></a>
     <a href='https://vk.com/tastaur'><img className={s.img} src={vkIcon} alt=''/></a>
     <a href='https://github.com/Tastaur/'><img className={s.img} src={githubIcon} alt=''/></a>
     <a href='https://t.me/Tastaur'><img className={s.img} src={telegramIcon} alt=''/></a>
     <a href='tel:+79372318808'><img className={s.img} src={phoneIcon} alt=''/></a>
     <a href='https://twitter.com/Tastaur_Rex/'><img className={s.img} src={twitterIcon} alt=''/></a>
   </div>
    <div><p className={s.subtitle}>
      &copy; Tastaur. From Togliatti, Russia, 2020
    </p></div>
  </div>
}

export default Footer
