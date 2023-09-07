import React from 'react'
import Narrative from '../components/Narrative'
import OptionList from '../components/OptionList'
import {useState} from 'react';

const GameContainer = ({game, location, user}) => {

    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className='game-area'>
        <div className='game-content'>

        <Narrative user={user} game = {game} location = {location}/>
        <div className='choices-list'>
        {!showResult && (
        <OptionList game={game} showResult={showResult} setShowResult={setShowResult} />)}
        </div>
        </div>
        </div>
    )
}

export default GameContainer