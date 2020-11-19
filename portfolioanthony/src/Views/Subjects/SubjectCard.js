import React from "react";
import './SubjectCard.scss';
import '../../Utilities/Utils.scss';

function SubjectCard({title, description}) {


    return (
        <div className="BalooFont textStyleMainPage ">
            <div className="hoverForImg">
                <h1> {title} </h1>
                <h2> {description} </h2>
            </div>
            <img className="show" src="http://www.placecage.com/100/100" alt="test"/>
        </div>
    )
}

export default SubjectCard;