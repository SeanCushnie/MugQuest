import React from "react";
import { useNavigate } from "react-router-dom";
import request from "../Helpers/request";

export default function NewGame({ user, player, setGame }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (user.id && player.id){
    const game = await request.createGame(user.id, player.id);
    setGame(game);
    // Use the navigate function to navigate to the game screen
    navigate("/play");
    } 
  };

  

  return (
    <div>
      
      <button className='button' onClick={handleSubmit} >Start Game</button>
    </div>
  );
}

