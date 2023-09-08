import React from 'react'

const Option = ({handleClick, option, index}) => {
  return (

        <button className='options' value={option} onClick={() => handleClick(option)}>
          {option.dialogue}
        </button>

  )
}

export default Option