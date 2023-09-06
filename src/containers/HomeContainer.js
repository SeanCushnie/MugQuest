import React from 'react'
import Auth from '../components/Auth'
import Hero from '../components/Hero'


export const HomeContainer = ({setUserEmail}) => {


    return (
        <div>
            <Auth setUserEmail={setUserEmail} />
            <Hero/>
        </div>
    )
}

export default HomeContainer
