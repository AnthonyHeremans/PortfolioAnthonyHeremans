import React from "react";
import SubjectFooter from "./subjectFooter";

function SubjectLayout({title, nextSubject, linkNextPage,  children}) {
    return (
        <div>
            <div className='color_background
                            text_Circularpro-font
                            text_font-size-100
                            subject-layout_format-header-text
                            utils_grid-layout-webpage-only-header
                            subject-layout_parallax-base-panel'>

                <p>{title}</p>

            </div>

            <div className='subject-layout_parallax-scroller
                            subject-layout_padding-sides'>
                {children}


            </div>

            <SubjectFooter nextSubject={nextSubject} linkNextPage={linkNextPage} />
        </div>
    );
}

export default SubjectLayout;