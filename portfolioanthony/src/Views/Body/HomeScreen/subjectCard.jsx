import React from "react";
import {Link} from "react-router-dom";

function SubjectCard({title, description}) {
    return (
        <Link className="utils_Circularpro-font
        subject-overview_hover-for-img
        subject-overview_center-text"
              to={'/WIP'}>

            <h1> {title} </h1>
            <h2> {description} </h2>

        </Link>
    )
}

export default SubjectCard;