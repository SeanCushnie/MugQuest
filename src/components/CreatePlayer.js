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
      <h4>Enter Player Name:</h4>
      <input
        type="text"
        value={playerName}
        onChange={handlePlayerNameChange}
      />
      <button onClick={handleClick}>Create Player</button>
    </div>
  );
}

export default CreatePlayer