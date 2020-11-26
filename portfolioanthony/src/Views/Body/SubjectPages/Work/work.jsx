import React, {useEffect} from "react";
import SubjectLayout from "../../../Layout/subjectLayout";
import Layout from "../../../Layout/layout";
import helperFunctions from '../../../../Logic/Helpers/helperFunctions'

function Work() {

    useEffect(() => {
       helperFunctions.goToTopOfPage();
    }, [])

    return (
        <Layout styleForWrapper='utils_flex utils_column space_evenly'>
            <SubjectLayout title='Work Experience' nextSubject='Achievements' linkNextPage='/WIP' >

                {/*<div className='about-me_title-text'>Anthony Heremans</div>*/}

            </SubjectLayout>
        </Layout>
    );
}

export default Work;
