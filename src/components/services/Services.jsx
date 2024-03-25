import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>Front-End Optimization</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Reduce bundle size and enhance application performance</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Implement features like Infinity scroll and Debouncing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Optimize React applications for efficient re-rendering</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Utilize webpack configuration for environment-based optimizations</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Conduct performance testing using Lighthouse and developer tools</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Ensure cross-device compatibility through responsive design techniques</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Develop scalable and interactive web applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Futurestic Web designing using latest Tech Stack</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Utilize React JS, Node JS, and other frameworks effectively</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Ensure optimized performance and responsiveness</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Employ Redux for efficient state management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Ensure compliance with web accessibility and security standards</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="services">
          <div className="service__head">
            <h3>Full-Stack Integration</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Develop reusable components and custom hooks </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Integrate frontend with backend services using RESTful APIs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Employ Redux and Redux-SAGA for comprehensive state management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Collaborate with cross-functional teams following Agile methodology</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Utilize Git and Bitbucket for version control and code review</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services