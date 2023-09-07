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
        <div className='game-content'>
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

//Old return commented out as I'm not sure if it's the correct one or not
//     return (
       

//         <Narrative user={user} game = {game} location = {location}/>
//         <div className='choices-list'>
//         {!showResult && (
//         <OptionList game={game} showResult={showResult} setShowResult={setShowResult} />)}
//         </div>
//         </div>
//         </div>
//     )
// }
  );
};
export default GameContainer;