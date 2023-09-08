import React, { useEffect, useState } from "react";
import OptionList from "./OptionList";

export default function Result({ selectedOption, game, showResult, setShowResult }) {
  const [responseText, setResponseText] = useState("");
  const [showOptionsList, setShowOptionsList] = useState(false);

  useEffect(() => {
    if (selectedOption) {
      setResponseText(selectedOption.responseText);
    }
  }, [selectedOption]);

  const handleContinueClick = () => {
    setShowResult(false)
  };

  return (
    <div>
      <p>{responseText}</p>
      <button onClick={handleContinueClick}>Continue</button>
    </div>
  );
}
