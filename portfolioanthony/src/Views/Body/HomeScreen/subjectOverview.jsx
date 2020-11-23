import SubjectCard from './subjectCard';
import React from "react";
import MovingSquares from "./movingSquares";

function SubjectOverview() {
    return (

    <div className="subject-overview_animation-area subject-overview_background">

        <MovingSquares />

        <div className="subject_overview-grid subject-overview_text-color">
            <SubjectCard title="Anthony" description="About me"/>

            <SubjectCard title="Work" description="Experience"/>

            <SubjectCard title="Achievements" description="Prices"/>

            <SubjectCard title="Blog" description="Social"/>
        </div>

    </div>
    );
}

export default SubjectOverview;
