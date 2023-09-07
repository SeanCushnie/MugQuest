import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomeContainer from "../containers/HomeContainer";
import NewGameContainer from "./NewGameContainer";
import request from "../Helpers/request";


const MainContainer = () => {

    const [userEmail, setUserEmail] = useState("");
    const [user, setUser] = useState({});
    const [player, setPlayer] = useState({})

    // useEffect(() => {
    //     if (userEmail) {
    //         const user = request.getUser(userEmail);
    //         setUser(user);
    //     }
    // }, [userEmail])

    return (
        <div>
            <h1>Main Container</h1>
            <Router>
                <NavBar />
                <Routes>
                    <Route element={<HomeContainer setUserEmail={setUserEmail} setUserDetails={setUser} />} path="/" />
                    <Route element={<NewGameContainer userEmail={userEmail} setPlayer = {setPlayer}/>} path="/new" />
                </Routes>
            </Router>
        </div>
    );
}

export default MainContainer;
