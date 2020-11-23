import React from "react";
import {Link} from "react-router-dom";

function SubjectCard({title, description, link}) {
    return (
        <Link className="text_Circularpro-font
        subject-overview_hover-for-img
        subject-overview_center-text"
              to={link}>

            <h1> {title} </h1>
            <h2> {description} </h2>

        </Link>
    )
}

export default SubjectCard;