import React, { useState } from 'react';
import OptionList from '../components/OptionList';
import Narrative from '../components/Narrative';
import Result from '../components/Result';

const GameContainer = ({ game, setGame, location, user }) => {

  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);


  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowResult(true);
    const updateGame = game;
    updateGame.player.selectedDialogueOptions.push(option);
    setGame(updateGame);
  };


  return (
    <>

    <div className='game-area'>
    <div className='game-content'>
      <Narrative user={user} game={game} setGame={setGame} location={location} />

      
        <OptionList
          game={game}
          showResult={showResult}
          setShowResult={setShowResult}
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />

        {/* <Result /> */}
      
      </div>
      </div>
    </>


  );
};
export default GameContainer;