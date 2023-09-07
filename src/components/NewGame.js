import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewGame({ user, player, setGame }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the navigate function to navigate to the game screen
    navigate("/play");
  };

  return (
    <main>
      <h2>This is where a new game starts!</h2>
      <button onClick={handleSubmit}>Start Game</button>
    </main>
  );
}

