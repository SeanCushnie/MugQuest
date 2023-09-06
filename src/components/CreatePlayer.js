import React, { useState } from 'react';
import request from '../Helpers/request';

const CreatePlayer = () => {
  const [playerName, setPlayerName] = useState('');

  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  

  return (
    <div className='characterQuestions'>
      <h4>Enter Player Name:</h4>
      <input
        type="text"
        value={playerName}
        onChange={handlePlayerNameChange}
      />
      <button onClick={() => request.createPlayer(playerName)}>Create Player</button>
    </div>
  );
}

export default CreatePlayer