// import '../../../Styles/Body/HomeScreen/SubjectOverview.scss';
// import '../../../Styles/Utilities/Utils.scss';
import SubjectCard from './SubjectCard';
import React from "react";
import MovingSquares from "./MovingSquares";

function SubjectOverview() {
    return (

    <div className="animation-area">

        <MovingSquares />

        <div className="subject_overview_grid">
            <SubjectCard title="Anthony" description="About me"/>

            <SubjectCard title="Work" description="Experience"/>

            <SubjectCard title="Achievements" description="Prices"/>

            <SubjectCard title="Blog" description="Social"/>
        </div>

    </div>
    );
}

export default SubjectOverview;
