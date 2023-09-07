import React, { useState } from 'react';
import request from '../Helpers/request';

const CreatePlayer = () => {
  const [playerName, setPlayerName] = useState('');

  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  

  return (
    <div className='characterQuestions'>
      <label>Enter Player Name:</label>
      <input
        type="text"
        value={playerName}
        onChange={handlePlayerNameChange}
      />
      <button className='button'onClick={() => request.createPlayer(playerName)}>Create Player</button>
    </div>
  );
}

export default CreatePlayer