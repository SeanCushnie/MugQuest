import React from 'react'
import yourhouse from '../static/yourhouse.svg'


export default function AsciiImage() {
  return (
    <>
    <div className='ascii-image-container'>
      <img src={yourhouse}
      alt='ascii house'
      className='ascii'
      loading lazy
    //   width='300px'
      />
      <div>
        <p className='label'>HOUSE</p>
      </div>
    </div>
    </>
  )
}
