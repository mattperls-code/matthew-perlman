import React from "react"

import { HashLink } from "react-router-hash-link"

import Project from "../components/Project"
import Skill from "../components/Skill"
import Experience from "../components/Experience"
import Education from "../components/Education"

const Main = () => {
    return (
        <React.Fragment>
            <nav>
                <HashLink smooth to={"#about"}>About</HashLink>
                <div className={"divider"} />
                <HashLink smooth to={"#projects"}>Projects</HashLink>
                <div className={"divider"} />
                <HashLink smooth to={"#skills"}>Skills</HashLink>
                <div className={"divider"} />
                <HashLink smooth to={"#experience"}>Experience</HashLink>
                <div className={"divider"} />
                <HashLink smooth to={"#education"}>Education</HashLink>
            </nav>
            <main>
                <img src={"https://picsum.photos/300/300"} />
                <h1>Matthew Perlman</h1>
                <label>
                    Machine Learning
                    <div className={"dot"} />
                    Formal Language Theory
                    <div className={"dot"} />
                    Programming Languages
                </label>
                <br />
                <label>
                    2D/3D Graphics
                    <div className={"dot"} />
                    Robotics
                    <div className={"dot"} />
                    Fullstack Web
                    <div className={"dot"} />
                    iOS Mobile
                </label>
            </main>
            <section id={"about"}>
                <h1>About</h1>
                <div>
                    Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                    <br />
                    <br />
                    Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                    <br />
                    <br />
                    Sint dicat ne vis, ludus dolorum consectetuer cu pro. Vim eu delenit abhorreant, ei debitis corpora percipit mel, ne amet discere his. Per ut nonumy platonem. Libris assentior mea cu, est te elitr semper numquam. No stet adipisci eos, te pri consul urbanitas.
                    <br />
                    <br />
                    Eu eum epicuri omittam voluptatum. Meis molestiae ne usu. Suas hinc tation vix cu. Nam vitae sensibus accusamus ut, ea duo omnis mollis, pro fabulas consetetur ea. Vitae aeterno nam ex, id amet eripuit tincidunt cum, vim dicunt bonorum incorrupte et.
                    <br />
                    <br />
                    Accusam scaevola quo an, in sit noster antiopam. Eu molestie maluisset definitionem nec, sed inani dicam cu, at sea dictas evertitur consetetur. Eam no odio illud minimum. Et sit facilisi tractatos signiferumque, sumo volumus incorrupte no sit.
                </div>
            </section>
            <section id={"projects"}>
                <h1>Projects</h1>
                <Project title={"Convolutional Neural Network"} images={["https://picsum.photos/400", "https://picsum.photos/500", "https://picsum.photos/400/600"]} languages={["C++"]} tags={["Machine Learning", "Algorithms", "Image Processing"]} description={
                    <React.Fragment>
                        Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                        <br />
                        <br />
                        Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        <br />
                        <br />
                        Sint dicat ne vis, ludus dolorum consectetuer cu pro. Vim eu delenit abhorreant, ei debitis corpora percipit mel, ne amet discere his. Per ut nonumy platonem. Libris assentior mea cu, est te elitr semper numquam. No stet adipisci eos, te pri consul urbanitas.
                        <br />
                        <br />
                        Eu eum epicuri omittam voluptatum. Meis molestiae ne usu. Suas hinc tation vix cu. Nam vitae sensibus accusamus ut, ea duo omnis mollis, pro fabulas consetetur ea. Vitae aeterno nam ex, id amet eripuit tincidunt cum, vim dicunt bonorum incorrupte et.
                        <br />
                        <br />
                        Accusam scaevola quo an, in sit noster antiopam. Eu molestie maluisset definitionem nec, sed inani dicam cu, at sea dictas evertitur consetetur. Eam no odio illud minimum. Et sit facilisi tractatos signiferumque, sumo volumus incorrupte no sit.
                    </React.Fragment>
                } />
                <Project title={"Neural Network"} images={["https://picsum.photos/400", "https://picsum.photos/500"]} languages={["C++"]} tags={["Machine Learning", "Algorithms"]} description={
                    <React.Fragment>
                        Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                        <br />
                        <br />
                        Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        <br />
                    </React.Fragment>
                } />
                <Project title={"Convolutional Neural Network"} images={[]} languages={["C++", "Java", "Gnuplot"]} tags={["Machine Learning", "Algorithms", "Image Processing"]} description={
                    <React.Fragment>
                        Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                        <br />
                        <br />
                        Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        <br />
                        Eu eum epicuri omittam voluptatum. Meis molestiae ne usu. Suas hinc tation vix cu. Nam vitae sensibus accusamus ut, ea duo omnis mollis, pro fabulas consetetur ea. Vitae aeterno nam ex, id amet eripuit tincidunt cum, vim dicunt bonorum incorrupte et.
                        <br />
                        <br />
                        Accusam scaevola quo an, in sit noster antiopam. Eu molestie maluisset definitionem nec, sed inani dicam cu, at sea dictas evertitur consetetur. Eam no odio illud minimum. Et sit facilisi tractatos signiferumque, sumo volumus incorrupte no sit.
                    </React.Fragment>
                } />
                <Project title={"Neural Network"} images={["https://picsum.photos/500"]} languages={["C++"]} tags={["Machine Learning", "Algorithms"]} description={
                    <React.Fragment>
                        Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                        Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        <br />
                        <br />
                        Sint dicat ne vis, ludus dolorum consectetuer cu pro. Vim eu delenit abhorreant, ei debitis corpora percipit mel, ne amet discere his. Per ut nonumy platonem. Libris assentior mea cu, est te elitr semper numquam. No stet adipisci eos, te pri consul urbanitas.
                        <br />
                        <br />
                        Eu eum epicuri omittam voluptatum. Meis molestiae ne usu. Suas hinc tation vix cu. Nam vitae sensibus accusamus ut, ea duo omnis mollis, pro fabulas consetetur ea. Vitae aeterno nam ex, id amet eripuit tincidunt cum, vim dicunt bonorum incorrupte et.
                        <br />
                        <br />
                        Accusam scaevola quo an, in sit noster antiopam. Eu molestie maluisset definitionem nec, sed inani dicam cu, at sea dictas evertitur consetetur. Eam no odio illud minimum. Et sit facilisi tractatos signiferumque, sumo volumus incorrupte no sit.
                    </React.Fragment>
                } />
            </section>
            <section id={"skills"}>
                <h1>Skills</h1>
                <div className={"skills-container"}>
                    <Skill title={"C++"} projects={["Convolutional Neural Network", "Neural Network"]} description={
                        <React.Fragment>
                            Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                            <br />
                            
                            Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        </React.Fragment>
                    } />
                    <Skill title={"Algorithms"} projects={["Convolutional Neural Network", "Neural Network"]} description={
                        <React.Fragment>
                            Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                            <br />
                            <br />
                            Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                            <br />
                            <br />
                            Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        </React.Fragment>
                    } />
                    <Skill title={"Machine Learning"} projects={["Convolutional Neural Network", "Neural Network"]} description={
                        <React.Fragment>
                            Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                            <br />
                            <br />
                            <br />
                            Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        </React.Fragment>
                    } />
                    <Skill title={"Algorithms"} projects={["Convolutional Neural Network", "Neural Network"]} description={
                        <React.Fragment>
                            Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                            
                            <br />
                            Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        </React.Fragment>
                    } />
                    <Skill title={"Machine Learning"} projects={["Convolutional Neural Network", "Neural Network"]} description={
                        <React.Fragment>
                            Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                            <br />
                            <br />
                            Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                            <br />
                            Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        </React.Fragment>
                    } />
                </div>
            </section>
            <section id={"experience"}>
                <h1>Experience</h1>
            </section>
            <section id={"education"}>
                <h1>Education</h1>
            </section>
            <footer></footer>
        </React.Fragment>
    )
}

export default Main