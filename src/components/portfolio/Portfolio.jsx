import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Client Connect',
    github: 'https://www.eddytandesign.com/client-serving-dbs',
    demo: 'https://www.eddytandesign.com/client-serving-dbs'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Spanish Bolo',
    github: 'https://spanishbolo.com',
    demo: 'https://spanishbolo.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Chi-Square Correlation of Heart-Rate and Blood-Pressure',
    github: 'https://github.com/Tarunpanyam/Chi-Square-Correlation-of-Heart-Rate-and-Blood-Pressure/tree/main',
    demo: 'https://github.com/Tarunpanyam/Chi-Square-Correlation-of-Heart-Rate-and-Blood-Pressure/tree/main'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta" data-testid={id}>
                <a href={github} className='btn' target="_blank">GitHub</a>
                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio