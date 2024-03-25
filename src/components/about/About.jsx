import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
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
              <small>3+ years</small>
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
            An enthusiastic engineer who is a self-starter and goal-oriented full-stack developer with over 2+ years of expertise 
            in Web development. Strong in design, development, and integration, with intuitive problem-solving skills. 
            Expertise in developing scalable and interactive web applications using React JS, Node JS, HTML, CSS, JavaScript, 
            Redux, Next JS, Svelte, Material UI, ES6, JSON, Spring Boot, Java, and MariaDB. Experience working with Agile 
            methodology and collaborating with cross-functional teams.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    
    </section>
  )
}

export default About