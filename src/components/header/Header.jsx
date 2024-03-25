import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
//import ME from '../../assets/me.png'
import ME from '../../assets/me.jpeg'
// import ME from '../../assets/me2.jpeg'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Panyam Tarun</h1>
        <h5 className="text-light">Web Application Devloper</h5>
        <CTA/>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header