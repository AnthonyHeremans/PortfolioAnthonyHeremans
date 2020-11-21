import React from "react";
// import '../../../Styles/Body/HomeScreen/SubjectCard.scss';
// import '../../../Styles/Utilities/Utils.scss';

function SubjectCard({title, description}) {


    return (
        <div className="BalooFont textStyleMainPage hoverForImg centerText">

                <h1> {title} </h1>
                <h2> {description} </h2>

            {/*<div>*/}
            {/*    <h1> {title} </h1>*/}
            {/*    <h2> {description} </h2>*/}
            {/*    <img className="show" src="http://www.placecage.com/100/100" alt="test"/>*/}
            {/*</div>*/}

        </div>
    )
}

export default SubjectCard;