import React from "react";
import icon from "../../icon-white.png";
import Layout from "../Layout/layout";


function pageNotFound() {
    return (
        <Layout styleForWrapper='wrapper utils_flex utils_column space_evenly utils_grid-layout-webpage-only-header'>
            <div className='color_background utils_flex wip_center-content'>
                <div className='utils_column'>

                    <div className='wip_text-center u-m-t-4 text_Circularpro-font'>
                        <h1>404 Baard not found!</h1>
                    </div>
                    <div className='wip_center-img wip_margin-top'>
                        <img className='wip_dimensions-img' alt="Personal Logo" src={icon}/>
                    </div>

                    <div className='wip_text-center u-m-t-4 text_Circularpro-font'>

                        <p>De baard is afgeknipt op deze pagina.</p>
                        <p>Gelieve hier terug weg te gaan!</p>

                    </div>

                </div>
            </div>
        </Layout>
    );
}

export default pageNotFound;
