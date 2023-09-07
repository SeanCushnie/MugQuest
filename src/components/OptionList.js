import React from 'react';
import Result from './Result';

const OptionList = ({ game, showResult, setShowResult, selectedOption, handleOptionClick }) => {

  const currentOptions = game.location.dialogueOptions.filter((dialogueOption) => {
    return !dialogueOption.previousId;
  });

  const OptionsElements = currentOptions.map((option, index) => {
    return (
      <ul key={index}>
        <button className='button' onClick={() => handleOptionClick(option)}>
          {option.dialogue}
        </button>
      </ul>
    );
  });

  return (
    <div>
      {!showResult && <div>{OptionsElements}</div>}
      {showResult && <Result game={game} selectedOption={selectedOption} />}
    </div>
  );
};
export default OptionList;