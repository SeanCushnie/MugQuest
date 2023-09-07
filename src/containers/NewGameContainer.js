import React from 'react'
import CreatePlayer from '../components/CreatePlayer'

const NewGameContainer = ({setPlayer}) => {
    return (
        <>
        <div>NewGameContainer</div>
        <CreatePlayer setPlayer = {setPlayer} />
        </>
    )
}

export default NewGameContainer