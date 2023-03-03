import React from 'react'
import './about.css'
import logo2 from '../../assets/logo2.webp'

function About() {
  return (
    <div className='about section__padding'>
        <div className='about__content'>
            <div className="about__content-image">
                <img src={logo2} alt= 'logo2' />

            </div>

            <div className='about__content-text'>
                <h1>Comfort are perfectly combined here</h1>
                <p>This charming private 19th century mansion, which originally belonged to the family, has been completely renovated with care & passion while respecting the spirit of place.</p>
                <br></br>
                <p>Divo Hotel surrounded herself by a team of French artisans to create a sophisticated place in a refined.</p>

                <div className='about__content-button'>
                   <button type='button'>BOOK YOUR RESERVATION NOW</button>
                </div>

            </div>

        </div>


    </div>
  )
}

export default About