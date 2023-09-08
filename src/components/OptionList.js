import React from 'react';
import Result from './Result';
import Option from './Option';

const OptionList = ({ game, setGame, showResult, setShowResult, selectedOption, handleOptionClick }) => {
    
    const unselectedOptions = game.location.dialogueOptions.filter(option => 
      !game.player.selectedDialogueOptions?.includes(option)
    )


    console.log(unselectedOptions)

  const currentOptions = unselectedOptions.filter((option) => {
    return !option.previousId || game.player.selectedDialogueOptions?.some(opt => opt.nextId === option.id)
  });

  console.log(currentOptions)

  const handleClick = (option) => {
    console.log(option);
    handleOptionClick(option);
    
  }

  const OptionsElements = currentOptions.map((option, index) => {
    return (
      
        <Option key={index} handleClick={handleClick} option={option} index={index}/>

    );
  });




  return (
    <div className='choices-list'>

      {!showResult && <div>{OptionsElements}</div>} 

      {showResult && <Result game={game} selectedOption={selectedOption} setShowResult={setShowResult} />}
    </div>
  );
};
export default OptionList;