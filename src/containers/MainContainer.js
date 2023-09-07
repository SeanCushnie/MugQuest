import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomeContainer from "../containers/HomeContainer";
import NewGameContainer from "./NewGameContainer";


const MainContainer = () => {

    const [userEmail, setUserEmail] = useState("");

    return (
        <div className="main-container">
            <Router>
                <Routes>
                    <Route element={<HomeContainer setUserEmail={setUserEmail} />} path="/" />
                    <Route element ={<NewGameContainer userEmail = {userEmail} />} path="/new"/>
                </Routes>
                <NavBar />
            </Router>
        </div>
    );
}

export default MainContainer;
