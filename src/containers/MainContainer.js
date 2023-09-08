import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomeContainer from "../containers/HomeContainer";
import NewGameContainer from "./NewGameContainer";
import request from "../Helpers/request";
import GameContainer from "./GameContainer";


const MainContainer = () => {

    const [userEmail, setUserEmail] = useState("");
    const [user, setUser] = useState({});
    const [player, setPlayer] = useState({})
    const [game, setGame] = useState({});
    const [location, setLocation] = useState({});



    return (
        <div className="main-container">
            <Router>
                <Routes>
                    <Route element={<HomeContainer setUserEmail={setUserEmail} setUserDetails={setUser} />} path="/" />
                    <Route element={<NewGameContainer userEmail={userEmail} setPlayer = {setPlayer} user = {user} player = {player} setGame={setGame}/>} path="/new" />
                    <Route element={<GameContainer game={game} setGame={setGame} location={location} setLocation={setLocation} user={user} player={player}/>} path="/play"/>
                </Routes>
                <NavBar />
            </Router>
        </div>
    );
}

export default MainContainer;
