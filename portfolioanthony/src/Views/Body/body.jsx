import {Route, Switch} from "react-router-dom";

import Home from "./HomeScreen/subjectOverview";
import WIP from "../HelperPages/wip";

function Body() {
    return (

        <Switch>

            <Route path='/WIP' component={WIP}/>
            <Route exact path='/' component={Home}/>

        </Switch>)
}

export default Body;

