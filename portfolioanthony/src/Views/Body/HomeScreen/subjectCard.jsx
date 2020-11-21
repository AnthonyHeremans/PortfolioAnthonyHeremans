import React from "react";

function SubjectCard({title, description}) {
    return (
        <div className="utils_baloo-font subject-overview_hover-for-img subject-overview_center-text">

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