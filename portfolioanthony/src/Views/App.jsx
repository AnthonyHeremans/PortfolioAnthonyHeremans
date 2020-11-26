import React from "react";
import '../Styles/container.scss';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AboutMe from "./Body/SubjectPages/AboutMe/aboutMe";
import WIP from "./HelperPages/wip";

import PageNotFound from "./HelperPages/pageNotFound";
import SubjectOverview from "./Body/HomeScreen/subjectOverview";
import Work from "./Body/SubjectPages/Work/work";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/AboutMe' component={AboutMe} />
                <Route exact path='/WIP' component={WIP} />
                <Route exact path='/Work' component={Work} />
                <Route exact path='/' component={SubjectOverview} />
                <Route component={PageNotFound}/>

            </Switch>
        </Router>
    );
}

export default App;
