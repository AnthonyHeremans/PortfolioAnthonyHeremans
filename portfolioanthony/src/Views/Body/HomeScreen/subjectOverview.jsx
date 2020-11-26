import SubjectCard from './subjectCard';
import React from "react";
import MovingSquares from "./movingSquares";
import Footer from "../../Footer/footer";
import Layout from "../../Layout/layout";

function SubjectOverview() {
    return (
        <Layout styleForWrapper='wrapper utils_flex utils_column space_evenly utils_grid-layout-webpage'>

            <div className="subject-overview_animation-area subject-overview_background">

                <MovingSquares/>

                <div className="subject_overview-grid color_background">
                    <SubjectCard title="Anthony" description="About me" link='/AboutMe'/>

                    <SubjectCard title="Work" description="Experience" link='/Work'/>

                    <SubjectCard title="Achievements" description="Prices"/>

                    <SubjectCard title="Blog" description="Social"/>
                </div>

                <Footer/>

            </div>

        </Layout>
    );
}

export default SubjectOverview;
