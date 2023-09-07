import React, { useState } from 'react';
import OptionList from '../components/OptionList';
import Narrative from '../components/Narrative';
import Result from '../components/Result';

const GameContainer = ({ game, location, user }) => {

  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowResult(true);
  };

  return (
    <>
    <div className='game-area'>
      <Narrative user={user} game={game} location={location} />
      
        <OptionList
          game={game}
          showResult={showResult}
          setShowResult={setShowResult}
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />

        {/* <Result /> */}
      
      </div>
    </>
  );
};
export default GameContainer;