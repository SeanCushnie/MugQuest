import React, { useEffect, useState } from "react";


export default function Narrative({ user, player, game, location }) {
    const [showDesc, setShowDesc] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch("http://localhost:8080/api/locations")
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching game data:", error);
            });
    };

    return (
        <div className="narrative">
            {showDesc && <p>{location.description}</p>}
            {showDesc && <p>Do you:</p>}
        </div>
    );
}
