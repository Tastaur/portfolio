import React from 'react'
import './App.css'
import Header from './Header/Header'
import MeetSection from './MeetSection/MeetSection'
import AboutPage from './AboutPage/AboutPage'
import WorkPage from './WorkPage/WorkPage'
import Footer from './Footer/Footer'

const App=()=> {
  return (
      <div className="App">
        <Header/>
        <div className="wrapper">
        <MeetSection/>
        <AboutPage/>
        <WorkPage/>
        </div>
       <Footer/>
      </div>
  )
}

export default App;
