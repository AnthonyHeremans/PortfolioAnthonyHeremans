import React from "react";
import Navbar from "./navbar";
import Logo from "./logo";

function Header() {
    return (
        <div className="header_flex">

            <Logo/>
            <Navbar/>

        </div>
    );
}

export default Header;