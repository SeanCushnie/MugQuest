import React from 'react'
import Auth from '../components/Auth'
import Hero from '../components/Hero'


export const HomeContainer = ({setUserEmail, setUserDetails}) => {


    return (

        <div className='home-page'>
            <Auth setUserEmail={setUserEmail} setUserDetails={setUserDetails} />

            <Hero/>
        </div>
    )
}

export default HomeContainer
