import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="utils_flex">
            <div className="utils_flex">

                <h4 className="header_center-text u-m-lr">
                    <Link to={'/'}> Home </Link>
                </h4>

                <h4 className="header_center-text u-m-lr">
                    <Link to={'/WIP'}>About me</Link>
                </h4>

                <h4 className="header_center-text u-m-lr">
                    <Link to={'/WIP'}>Work</Link>
                </h4>

                <h4 className="header_center-text u-m-lr">
                    <Link to={'/WIP'}>Achievements</Link>
                </h4>

                <h4 className="header_center-text u-m-lr">
                    <Link to={'/WIP'}>Social</Link>
                </h4>
            </div>
        </nav>
    );
}

export default Navbar;