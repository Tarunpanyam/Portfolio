import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about"> 
      <h5>Get to Known Projects</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>

          <p>
            Dedicated and efficient full stack developer with 1+ years experience in application layers, presentation layers, and databases. Certified in both F/E and B/E technologies. 
            Spearheaded successful transition from LAMP stack to MEAN which cut latency by 40% and increased effectiveness of database administrators by 20%. 
            Seeking to further improve HTML5 and CSS3 skills as the future full stack developer at DBS TECH India.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    
    </section>
  )
}

export default About