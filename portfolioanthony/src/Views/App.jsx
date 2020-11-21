import React from "react";
import SubjectOverview from "./Body/HomeScreen/subjectOverview";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import '../Styles/container.scss';

function App() {
    return (
        <div className="wrapper utils_flex utils_column space_evenly utils_grid-layout-webpage" style={{height:'100vh'}}>

            <Header />

            <SubjectOverview />

            <Footer />

        </div>
    );
}

export default App;
