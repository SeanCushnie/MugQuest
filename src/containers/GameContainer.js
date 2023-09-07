import React from 'react'
import Narrative from '../components/Narrative'
import OptionList from '../components/OptionList'
import {useState} from 'react';

const GameContainer = ({game, location, user}) => {

    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

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