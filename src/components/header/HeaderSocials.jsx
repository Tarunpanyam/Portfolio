import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/panyam-tarun-3b0456199/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Tarunpanyam" target="_blank"><BsGithub /></a>
        <a href="http://dribbble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials