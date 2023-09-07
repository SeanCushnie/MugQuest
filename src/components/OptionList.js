import React from 'react';
import Result from './Result';

const OptionList = ({ game, showResult, setShowResult, selectedOption, handleOptionClick }) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        // onResultSelected(option);
        setShowResult(true);
    }

    const currentOptions = game.location.dialogueOptions.filter((dialogueOption) => {
        return !dialogueOption.previousId
    })

    const OptionsElements = currentOptions.map((option, index) => {
        return(
        <ul key={index}>
            <button className='options' onClick={() => handleOptionClick(option)}>
            {option.dialogue}
            </button>              
        </ul>)
    })


  return (
    <div className='choices'>
      {!showResult && <div>{OptionsElements}</div>}
      {showResult && <Result game={game} selectedOption={selectedOption} />}
    </div>
  );
};
export default OptionList;