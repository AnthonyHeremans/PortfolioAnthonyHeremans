import React from "react";
import Navbar from "./navbar";
import Logo from "./logo";

function Header() {
    return (
        <div className="header_flex header_background color_header-background text_Circularpro-font">

            <Logo/>

            <Navbar/>

        </div>
    );
}

export default Header;