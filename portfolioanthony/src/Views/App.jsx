import React from "react";
import Home from "./Body/HomeScreen/subjectOverview";
import WIP from "./HelperPages/wip";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Body from "./Body/body";
import '../Styles/container.scss';

import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="wrapper utils_flex utils_column space_evenly utils_grid-layout-webpage">

                <Header/>

                <Body/>

                <Footer/>

            </div>
        </Router>
    );
}

export default App;
