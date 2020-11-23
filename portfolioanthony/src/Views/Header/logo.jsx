import React from "react";
import icon from '../../icon-white.png';
import {Link} from "react-router-dom";


function Logo() {
    return (
        <Link className="utils_flex u-m-l-10" to={'/'}>

            <div className="header_center-text u-m-lr logo_image-size">
                <img alt="Personal Logo" src={icon}/>
            </div>
            <div className="header_center-text u-m-lr">
                <h4>Anthony Heremans</h4>
            </div>
        </Link>
    );
}

export default Logo;