import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import firstSlide from './1.png'
import secondSlide from './2.png'
import thirdSlide from './3.png'
import firstSlideMain from './nature-forest-trees-park-38136.jpg'
import secondSlideMain from './gray-bridge-and-trees-814499.jpg'
import thirdSlideMain from './bright-daylight-environment-forest-240040.jpg'
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
    </Carousel>
  </div>
}

export default WorkPage
