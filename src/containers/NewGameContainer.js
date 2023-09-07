import React from 'react'
import CreatePlayer from '../components/CreatePlayer'
import NewGame from '../components/NewGame'

const NewGameContainer = ({setPlayer, user, player}) => {
    return (
        <>
        <div>NewGameContainer</div>
        <CreatePlayer setPlayer = {setPlayer} />
        <NewGame player = {player} user = {user}/>
        </>
    )
}

export default NewGameContainer