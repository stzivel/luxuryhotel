import React from 'react'
import './header.css'
import logo1 from '../../assets/logo1.jpg'

function Header() {
  return (
    <div className='header' id='Home'>

        <div className='header__content'>

          <div className='header__content-title'>

                <h1>Welcome to our luxury hotel</h1>

            </div>

            <div className="header__content-button">
                <button type='button'>Book now</button>
            </div>



        </div>

       

    </div>
  )
}

export default Header