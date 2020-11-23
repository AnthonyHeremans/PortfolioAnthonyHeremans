import React from "react";
import '../Styles/container.scss';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AboutMe from "./Body/AboutMe/aboutMe";
import WIP from "./HelperPages/wip";

import PageNotFound from "./HelperPages/pageNotFound";
import SubjectOverview from "./Body/HomeScreen/subjectOverview";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/AboutMe' component={AboutMe} />
                <Route exact path='/WIP' component={WIP} />
                <Route exact path='/' component={SubjectOverview} />
                <Route component={PageNotFound}/>

            </Switch>
        </Router>
    );
}

export default App;
