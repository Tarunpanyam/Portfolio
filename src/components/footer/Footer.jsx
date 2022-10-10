import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram, FiTwitter} from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Panyam Tarun</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testmonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://www.instagram.com/tarun_panyam/"><FiInstagram /></a>
        <a href="https://twitter.com/panyam_tarun"><FiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Panyam Tarun. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer