import React, {useState} from 'react';
// import Result from './result'


const OptionList = ({game}) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onResultSelected(option);
    }

    const currentOptions = game.location.dialogueOptions.filter((dialogueOption) => {
        return !dialogueOption.previousId
    })

    const OptionsElements = currentOptions.map((option, index) => {
        return(
        <ul key={index}>
            <button className='button' onClick={() => handleOptionClick(option)}/>
            {option.dialogue}              
        </ul>)
    })


  return (
    <div>{OptionsElements}</div>
  )
}

export default OptionList