import React, {useEffect} from "react";
import Layout from '../../../Layout/layout'
import SubjectLayout from "../../../Layout/subjectLayout";
import helperFunctions from '../../../../Logic/Helpers/helperFunctions'

function AboutMe() {

    useEffect(() => {
        helperFunctions.goToTopOfPage();
    }, [])

    return (
        <Layout styleForWrapper='utils_flex utils_column space_evenly'>
            <SubjectLayout title='All About Me' nextSubject='Work Experience' linkNextPage='/Work' >

                <div className='about-me_title-text'>Anthony Heremans</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus suscipit nisl, in
                    consectetur lorem hendrerit nec. Vivamus sed porta tortor. Phasellus in urna tempus, elementum
                    odio a, ultrices odio. Morbi rhoncus risus accumsan, tristique metus eu, auctor mauris. Praesent
                    nec sagittis nulla, in porttitor ipsum. Nulla sed feugiat urna. Quisque ultricies eu eros non
                    fermentum.

                    Suspendisse non efficitur urna, et interdum elit. Suspendisse nisi eros, sodales laoreet augue
                    id, pulvinar gravida ante. Donec in quam tellus. Nam fringilla nec nisi sed vehicula. Curabitur
                    magna quam, feugiat sit amet quam a, maximus blandit lectus. Nullam bibendum sagittis ligula
                    maximus vulputate. Nam ac facilisis magna, nec finibus lorem. Fusce sit amet enim est. Aenean
                    rutrum at nisl in ullamcorper. Cras dictum sit amet orci eget auctor. Phasellus velit ex, rutrum
                    a posuere vitae, laoreet vitae elit. Phasellus tortor neque, maximus tempus felis a, vestibulum
                    gravida mi. Nulla facilisi. Donec ac bibendum augue, at vulputate nulla.

                    Nulla condimentum mi sed velit fringilla pellentesque at ut risus. Aenean nec iaculis lacus.
                    Nullam ac purus neque. In sit amet molestie massa, non egestas leo. Nam leo elit, fermentum ac
                    eros id, imperdiet tempor lacus. Nullam placerat velit et ligula vestibulum, sit amet placerat
                    ante luctus. Vestibulum suscipit ante arcu, et suscipit dui consequat non. Duis ac mi ac ligula
                    efficitur congue ac rhoncus diam. Nam in congue orci, eget aliquet quam. Suspendisse mattis
                    tortor eget tincidunt euismod.

                    Phasellus congue eu risus sed varius. Fusce accumsan ultricies risus. Pellentesque at nibh eros.
                    Mauris eu purus nisl. Suspendisse porta lorem ac enim commodo feugiat. Morbi velit nulla, tempus
                    non lectus non, congue auctor tortor. Aenean in ex ac felis commodo mattis ac in ante. Sed
                    blandit ipsum velit, a ultrices neque aliquam at. Nunc finibus imperdiet semper. Ut dictum, sem
                    nec efficitur vulputate, odio diam finibus ex, eu tincidunt ligula turpis eu arcu. Vivamus a
                    dictum neque, non cursus libero. Vivamus quam ligula, luctus vel mauris sit amet, tristique
                    scelerisque tortor. In fringilla ipsum vitae erat blandit ornare. Curabitur posuere dui urna,
                    quis ultricies orci finibus vitae. Fusce convallis interdum dictum. Nunc dolor velit, posuere eu
                    lacus eget, porttitor dignissim dui.

                    Maecenas ultricies odio quis tristique consectetur. Morbi molestie varius leo at mattis. Integer
                    vestibulum elit leo, sed pretium nisi vestibulum vel. Sed rutrum, leo in varius aliquam, massa
                    eros volutpat lorem, ut venenatis arcu mauris ut nulla. Curabitur imperdiet orci a dolor cursus
                    tristique. Mauris rhoncus interdum magna in aliquet. Phasellus aliquet rhoncus justo, vel dictum
                    libero convallis id. Fusce eu neque augue. Cras accumsan vel tortor eget euismod. Nunc nec
                    ornare magna. Duis id viverra sem. Proin in ex venenatis, blandit justo ac, tincidunt ex. Ut
                    convallis varius sem vitae suscipit. Maecenas aliquam eros sit amet lorem elementum molestie. Ut
                    consequat pellentesque nibh sit amet laoreet.</p>


            </SubjectLayout>
        </Layout>
    );
}

export default AboutMe;