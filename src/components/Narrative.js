import React, { useEffect, useState } from "react";


export default function Narrative({ user, player, game, location }) {
    const [showDesc, setShowDesc] = useState(true);

    
    
    return (
        <div className="narrative">
            {/* {showDesc && <p>{location.description}</p>}
            {showDesc && <p>Do you:</p>} */}
            <h1>narrative</h1>
        </div>
    );
}
