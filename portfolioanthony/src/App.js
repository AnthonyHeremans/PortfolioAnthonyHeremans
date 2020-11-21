//import './Styles/App.scss';
import React from "react";
import SubjectOverview from "./Views/Body/HomeScreen/SubjectOverview";
import Header from "./Views/Header/header";
import Footer from "./Views/Footer/footer";
//import './Styles/Utilities/Utils.scss';
import './Styles/container.scss';


function App() {
    return (
        <div className="wrapper flex column space_evenly grid" style={{height:'100vh'}}>
            <Header />

            <SubjectOverview />

            <Footer />
        </div>
    );
}

export default App;
