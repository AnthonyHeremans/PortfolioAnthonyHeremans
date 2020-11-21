import React from "react";
import Navbar from "./Navbar";
//import '../../Styles/Header/Header.scss';

function Header() {
    return (
        <div className="Header">

            <div className="flex">
                <img className="u-m-2" alt="Personal Logo" src="../../../public/logo192.png"/>
                <h4 className="u-m-2">Anthony Heremans</h4>
            </div>

            <Navbar />

        </div>
    );

}

export default Header;