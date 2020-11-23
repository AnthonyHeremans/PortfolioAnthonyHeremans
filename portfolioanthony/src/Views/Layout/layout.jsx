import React from "react";
import Header from "../Header/header";

function Layout({styleForWrapper, children}) {
    return (
            <div className={styleForWrapper}>

                <Header/>

                {children}

            </div>
    );
}

export default Layout;
