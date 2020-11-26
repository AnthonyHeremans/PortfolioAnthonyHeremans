import React from "react";
import {Link} from "react-router-dom";


function SubjectFooter({nextSubject, linkNextPage}) {
    return (
        <div className='subject-Footer
                         utils_flex
                         color_footer-background
                         subject-Footer_padding'>
            <Link to={linkNextPage}>
                <div className='about-me_left subject-Footer_next-subject'>

                    <div className='text_font-size-20'>
                        <p>Next Subject:</p>
                    </div>

                    <div className='text_font-size-60'>
                        <p>{nextSubject}</p>
                    </div>

                </div>
            </Link>

            <Link to={linkNextPage}>
                <div className='subject-Footer_right'/>
            </Link>

        </div>);
}

export default SubjectFooter;
