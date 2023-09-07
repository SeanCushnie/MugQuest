import React from 'react'
import CreatePlayer from '../components/CreatePlayer'
import NewGame from '../components/NewGame'

const NewGameContainer = ({setPlayer, user, player, setGame}) => {
    return (
        <>
        
        <div className='new-game'>
        
        <div className='new-game-content'>
        <CreatePlayer setPlayer = {setPlayer} />
        </div>
        <NewGame player = {player} user = {user} setGame={setGame}/>

        </div>

        </>
    )
}

export default NewGameContainer