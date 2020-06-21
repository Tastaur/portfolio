import React from 'react'
import './App.css'
import Header from './Header/Header'
import MeetSection from './MeetSection/MeetSection'
import AboutPage from './AboutPage/AboutPage'
import WorkPage from './WorkPage/WorkPage'
import Footer from './Footer/Footer'
import { BackTop } from 'antd';
import 'antd/dist/antd.css';

const App=()=> {
  return (
      <div className="App">
        <Header/>
        <div className="wrapper">
          <BackTop/>
        <MeetSection/>
        <AboutPage/>
        <WorkPage/>
        </div>
       <Footer/>
      </div>
  )
}

export default App;
