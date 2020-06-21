import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import firstSlide from './1.png'
import secondSlide from './2.png'
import thirdSlide from './3.png'
import fourthSlide from './4.png'
import fivthSlide from './5.png'
import sixSlide from './6.png'
import firstSlideMain from '../photo/1.jpg'
import secondSlideMain from '../photo/2.jpg'
import thirdSlideMain from '../photo/3.jpg'
import fourthSlideMain from '../photo/4.jpg'
import fivthSlideMain from '../photo/5.jpg'
import sixSlideMain from '../photo/6.jpg'
import s from './WorkPage.module.css'

const WorkPage = (props) => {
  return <div className={s.container} id={'work'}>
    <Carousel className={s.wrapper} >
      <Carousel.Item>
        <img className={s.item} src={firstSlideMain} alt=''/>

        <Carousel.Caption>
          <a href='https://tastaur.github.io/IC_RepairDP_SobolevMA/'><img
              src={firstSlide}
              alt="First slide"
              className={s.workImg}
          /></a>
          <h3>Сайт для вымышленной строительно фирмы</h3>
          <p>Использовались: HTML, CSS, JavaScript</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={s.item} src={secondSlideMain} alt=''/>
        <Carousel.Caption>
          <a href='https://tastaur.github.io/SocNet/#/profile'><img
              className={s.workImg}
              src={secondSlide}
              alt="Third slide"

          /></a>
          <h3>Вымышленная социальная сеть</h3>
          <p>Использовались React, React-Redux, Redux-Form, Redux-Thunk</p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className={s.item}
            src={thirdSlideMain}
            alt="Third slide"
        />

        <Carousel.Caption>
          <a href='https://tastaur.github.io/paymantSystem/index.html'><img
              src={thirdSlide}
              className={s.workImg}
              alt="Third slide"
          /></a>
          <h3>Лендинг платёжной системы</h3>
          <p>Использовались: HTML, CSS, JavaScript</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
            className={s.item}
            src={fourthSlideMain}
            alt="Third slide"
        />

        <Carousel.Caption>
          <a href='https://tastaur.github.io/testAAA/'><img
              src={fourthSlide}
              className={s.workImg}
              alt="Third slide"
          /></a>
          <h3>Небольшое тестовое задание</h3>
          <p>Использовались: React, Redux, React-Bootstrap</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
            className={s.item}
            src={fivthSlideMain}
            alt="Third slide"
        />

        <Carousel.Caption>
          <a href='https://transpot-group.firebaseapp.com/auth/'><img
              src={fivthSlide}
              className={s.workImg}
              alt="Third slide"
          /></a>
          <h3>Приложение для аренды спец техники (вёрстка)</h3>
          <p>Использовались: Ionic</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
            className={s.item}
            src={sixSlideMain}
            alt="Third slide"
        />

        <Carousel.Caption>
          <a href='https://tastaur.github.io/test-form/'><img
              src={sixSlide}
              className={s.workImg}
              alt="Third slide"
          /></a>
          <h3>Работа с формами</h3>
          <p>Использовались: React, React-Redux, Redux-Form</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  </div>
}

export default WorkPage
