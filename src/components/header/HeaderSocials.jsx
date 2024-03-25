import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/panyamtarun/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Tarunpanyam" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials