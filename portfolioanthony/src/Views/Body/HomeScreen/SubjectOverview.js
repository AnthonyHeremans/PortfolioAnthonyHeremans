// import '../../../Styles/Body/HomeScreen/subjectOverview.scss';
// import '../../../Styles/Utilities/utils.scss';
import SubjectCard from './subjectCard';
import React from "react";
import MovingSquares from "./movingSquares";

function SubjectOverview() {
    return (

    <div className="subject-overview_animation-area">

        <MovingSquares />

        <div className="subject_overview-grid">
            <SubjectCard title="Anthony" description="About me"/>

            <SubjectCard title="Work" description="Experience"/>

            <SubjectCard title="Achievements" description="Prices"/>

            <SubjectCard title="Blog" description="Social"/>
        </div>

    </div>
    );
}

export default SubjectOverview;
