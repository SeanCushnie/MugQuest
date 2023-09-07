import React, { useState } from 'react';
import request from '../Helpers/request';

const CreatePlayer = ({setPlayer}) => {
  const [playerName, setPlayerName] = useState('');


  

  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleClick = async () => {
    const player = await request.createPlayer(playerName)
    setPlayer(player);
  }

  return (
    <div className='characterQuestions'>
      <label>Enter Player Name:</label>
      <input
        type="text"
        value={playerName}
        onChange={handlePlayerNameChange}
      />

      <button className='button' onClick={handleClick}>Create Player</button>

    </div>
  );
}

export default CreatePlayer