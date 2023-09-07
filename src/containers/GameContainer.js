import React from 'react'
import Narrative from '../components/Narrative'

const GameContainer = (user, player, game) => {
    return (
        <>
        <div>GameContainer</div>
        <Narrative user={user} game = {game} player = {player}/>
        </>
    )
}

export default GameContainer