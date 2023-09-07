import React from 'react'
import mug from '../static/mug.svg'
import mugquest from '../static/mugquest.svg'


const Hero = () => {
  return (


    <>
        <div className='hero'>
            <div className='mug-quest'>
                <img src={mug}
                alt='ascii mug' 
                />
                <img src={mugquest}
                alt='ascii mug quest text'
                />
            </div>
        </div>
    </>
  )
}

export default Hero;