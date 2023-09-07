import React, { useEffect, useState } from "react";


export default function Narrative({ game, location }) {
    const [showDesc, setShowDesc] = useState(true);


    
    return (
        <div className="narrative">
            {game.location.description}
            {/* {showDesc && <p>{location.description}</p>}
            {showDesc && <p>Do you:</p>} */}
        </div>
    );
}
