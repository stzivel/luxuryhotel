import React from 'react'
import './room.css'

function Room({image, title, price, text}) {
  return (
    <div className='room ' id='Appartments'>
        <div className="room__card">
            <div className="room__card-image">

                <img src={image} alt="room" />

            </div>

            

            <div className="room__card-title">
                <h2>{title}</h2>

            </div>

            <div className='room__card-price'>

                <h3>{price}€/NIGHT</h3>


            </div>

            <div className='room__card-text'>
                <p>{text}</p>

            </div>

            




        </div>
    </div>
  )
}

export default Room