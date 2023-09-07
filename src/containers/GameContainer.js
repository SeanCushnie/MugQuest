import React from 'react'
import Narrative from '../components/Narrative'
import OptionList from '../components/OptionList'
import {useState} from 'react';

const GameContainer = ({game, location, user}) => {

    const [showResult, setShowResult] = useState(false);

    return (
        <>
        <div>GameContainer</div>
        <Narrative user={user} game = {game} location = {location}/>
        {!showResult && (
        <OptionList game={game} showResult={showResult} setShowResult={setShowResult} />)}
        </>
    )
}

export default GameContainer