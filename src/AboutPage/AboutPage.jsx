import React from 'react'
import s from './AboutPage.module.css'
import portPhoto from './LPLx1R9fl4Q.jpg'

const AboutPage = (props)=>{
  return <div className={s.container} id={'about'}>
<div className={s.leftSection}><h2 className={s.title}>Пару слов про меня</h2>
  <p className={s.subtitle}>Родился и вырос в городе Тольятти. После окончания школы ушёл в армию, по возвращению решил продолжить служить на благо стране, но уже в полиции. <br/>
  В 2019 году понял, что пора менять свою жизнь координально, так как все мои идеалы были разрушены.<br/>
  В конце 2019 года записался на курсы SkillFactory по направлению Frontend — developer. Так же паралельно занимаюсь самообразованием читая документацию и просматривая видео на Youtube.<br/>
  Главная цель для меня стать профессионалом в этой профессии и дать своему ребенку достойное будущее.<br/>
  Женат, воспитываю дочь Ксению.</p>


  <ul><b>Профессиональные навыки:</b>
    <li> HTML5, CSS3, JS;</li>
    <li> знание React (Redux, Thunk, Form, Bootstrap)/Ionic;</li>
      <li> адаптивная и кросс-браузерная верстка;</li>
        <li> опыт создания HTML-страницы сайта на основе дизайн-макетов;</li>
    <li> знание CMS WordPress</li>
  </ul>
  <ul><b>Личные качества:</b>
    <li>Умение работать в режиме многозадачности.</li>
    <li>Дисциплинированность и ответственность.</li>
    <li> Коммуникабельность.</li>
    <li> Обучаемость и трудолюбивость</li>
  </ul>


  </div>
    <div className={s.rightSection}>
      <img src={portPhoto} alt='' className={s.img}/>
    </div>
  </div>
}

export default AboutPage
