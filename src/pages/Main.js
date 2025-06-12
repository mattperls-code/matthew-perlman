import React from "react"

import { HashLink } from "react-router-hash-link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons"

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
                <img src={"assets/me.jpg"} />
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
                <br />
                <div className={"links"}>
                    <a target={"_blank"} href={"https://github.com/mattperls-code"}><FontAwesomeIcon icon={faGithubSquare} /></a>
                    <a target={"_blank"} href={"https://www.linkedin.com/in/matthew-perlman-a637a7301"}><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a target={"_blank"} href={"mailto:mattperls.code@gmail.com"}><FontAwesomeIcon icon={faSquareEnvelope} /></a>
                    <a target={"_blank"} href={"https://www.instagram.com/mattperls"}><FontAwesomeIcon icon={faInstagramSquare} /></a>
                </div>
            </main>
            <section id={"about"}>
                <h1>About</h1>
                <div>
                Hello, my name is Matt, and I'm a sophomore studying Computer Science at UMass Amherst.
                <br /><br />
                I love to program and am very passionate about computer graphics, robotics, and machine learning. I've been writing code for about 8 years now and I'm an adept problem solver across many fields. I've written parsers, neural networks, programming languages, and rendering engines all from scratch in C++ as well as award winning websites, chrome extensions, and mobiles apps using JavaScript and React.
                <br /><br />
                I've released several iOS mobile apps, done some professional freelance web development over the years, and am a founding member and the CTO of ClearContext, an AI powered tool to help identify and eliminate bias in online media.
                <br /><br />
                As a high schooler, I was the lead programmer and a driver for our FRC team, the Robolancers, and won the world championship in 2024. My two years of leadership on our 50+ person team taught me valuable soft skills about work management, delegation, dev ops, and communication as well as important technical skills like computer vision, control theory, and autonomous planning.
                <br /><br />
                I love building interesting and innovative projects, and am always looking for something new to learn about. Please reach out with any questions or ideas!
                </div>
            </section>
            <section id={"projects"}>
                <h1>Projects</h1>
                <Project title={"Convolutional Neural Network"} images={["assets/projects/cnn/img1.png", "assets/projects/cnn/img2.png", "assets/projects/cnn/img3.png"]} languages={[
                    { id: "langs/cpp", label: "C++" }
                ]} tags={[
                    { id: "skills/ml", label: "Machine Learning" },
                    { id: "skills/cv", label: "Computer Vision" },
                    { id: "skills/cg", label: "Computer Graphics" },
                    { id: "skills/alg", label: "Algorithms" },
                    { id: "skills/swe", label: "Software Engineering" }
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />
                <Project title={"Neural Network"} images={["assets/projects/nn/img1.png", "assets/projects/nn/img2.png", "assets/projects/nn/img3.png", "assets/projects/nn/img4.png", "assets/projects/nn/img5.png"]} languages={[
                    { id: "langs/cpp", label: "C++" }
                ]} tags={[
                    { id: "skills/ml", label: "Machine Learning" },
                    { id: "skills/alg", label: "Algorithms" },
                    { id: "skills/swe", label: "Software Engineering" }
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />
                <Project title={"2024 FRC Robot"} images={["assets/projects/frc24/img1.png", "assets/projects/frc24/img2.png", "assets/projects/frc24/img3.png", "assets/projects/frc24/img4.png"]} languages={[
                    { id: "langs/java", label: "Java" }
                ]} tags={[
                    { id: "skills/robo", label: "Robotics" },
                    { id: "skills/cv", label: "Computer Vision" },
                    { id: "skills/algs", label: "Algorithms" },
                    { id: "skills/lead", label: "Team Leadership" },
                    { id: "skills/swe", label: "Software Engineering" },
                    { id: "skills/comm", label: "Communication" }
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />
                <Project title={"2023 FRC Robot"} images={["assets/projects/frc23/img1.png", "assets/projects/frc23/img2.png", "assets/projects/frc23/img3.png", "assets/projects/frc23/img4.png"]} languages={[
                    { id: "langs/java", label: "Java" }
                ]} tags={[
                    { id: "skills/robo", label: "Robotics" },
                    { id: "skills/cv", label: "Computer Vision" },
                    { id: "skills/algs", label: "Algorithms" },
                    { id: "skills/lead", label: "Team Leadership" },
                    { id: "skills/swe", label: "Software Engineering" },
                    { id: "skills/comm", label: "Communication" }
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />
                <Project title={"Finite Automata"} images={["assets/projects/fa/img1.png", "assets/projects/fa/img2.png", "assets/projects/fa/img3.png"]} languages={[
                    { id: "langs/cpp", label: "C++" },
                    { id: "langs/tex", label: "LaTex" },
                ]} tags={[
                    { id: "skills/flt", label: "Formal Language Theory" },
                    { id: "skills/regex", label: "Regular Expressions" },
                    { id: "skills/parsing", label: "Parsing" },
                    { id: "skills/alg", label: "Algorithms" },
                    { id: "skills/swe", label: "Software Engineering" }
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />
                <Project title={"Parser"} images={[
                    // TODO: xml -> json
                ]} languages={[
                    { id: "langs/cpp", label: "C++" }
                ]} tags={[
                    { id: "skills/parsing", label: "Parsing" },
                    { id: "skills/alg", label: "Algorithms" },
                    { id: "skills/swe", label: "Software Engineering" }
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />
                <Project title={"Platinum"} images={["assets/projects/platinum/img1.png", "assets/projects/platinum/img2.png", "assets/projects/platinum/img3.png"]} languages={[
                    { id: "langs/cpp", label: "C++" }
                ]} tags={[
                    { id: "skills/parsing", label: "Parsing" },
                    { id: "skills/alg", label: "Algorithms" },
                    { id: "skills/swe", label: "Software Engineering" }
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />
                <Project title={"3D Function Renderer"} images={["assets/projects/3dfr/img1.png", "assets/projects/3dfr/img2.png", "assets/projects/3dfr/img3.png", "assets/projects/3dfr/img4.png"]} languages={[
                    { id: "langs/cpp", label: "C++" }
                ]} tags={[
                    { id: "skills/cg", label: "Computer Graphics" },
                    { id: "skills/alg", label: "Algorithms" },
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />
                <Project title={"One Line Ray Tracer"} images={["assets/projects/olrt/img1.png"]} languages={[
                    { id: "langs/js", label: "Java Scripts" }
                ]} tags={[
                    { id: "skills/cg", label: "Computer Graphics" },
                    { id: "skills/alg", label: "Algorithms" }
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />
                <Project title={"N-Body Simulator"} images={["assets/projects/n-body/img1.png", "assets/projects/n-body/img2.png", "assets/projects/n-body/img3.png"]} languages={[
                    { id: "langs/js", label: "Java Script" }
                ]} tags={[
                    { id: "skills/cg", label: "Computer Graphics" }
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />
                <Project title={"Markov Chain Text Generator"} images={[
                    // TODO
                ]} languages={[
                    { id: "langs/cpp", label: "C++" }
                ]} tags={[
                    { id: "skills/ml", label: "Machine Learning" },
                    { id: "skills/algs", label: "Algorithms" }
                ]} />
                <Project title={"Clear Context"} images={["assets/projects/clearcontext/img1.png", "assets/projects/clearcontext/img2.png"]} languages={[
                    { id: "langs/js", label: "Java Script + Type Script" },
                    { id: "langs/html", label: "HTML + CSS" },
                ]} tags={[
                    { id: "skills/node", label: "Node" },
                    { id: "skills/react", label: "React" },
                    { id: "skills/ui", label: "UI / UX" },
                    { id: "skills/hosting", label: "Hosting" },
                    { id: "skills/extensions", label: "Chrome Extensions" },
                    { id: "skills/scrape", label: "Web Scraping" },
                    { id: "skills/alg", label: "Algorithms" },
                    { id: "skills/swe", label: "Software Engineering" },
                ]} />
                <Project title={"Quote It"} images={["assets/projects/quoteit/img1.png"]} languages={[
                    { id: "langs/js", label: "Java Script" }
                ]} tags={[
                    { id: "skills/react", label: "React Native" },
                    { id: "skills/ui", label: "UI / UX" },
                    { id: "skills/hosting", label: "Hosting" },
                    { id: "skills/swe", label: "Software Engineering" },
                ]} />
                <Project title={"Quick Dodge"} images={["assets/projects/quickdodge/img1.png"]} languages={[
                    { id: "langs/js", label: "Java Script" }
                ]} tags={[
                    { id: "skills/react", label: "React Native" },
                    { id: "skills/ui", label: "UI / UX" },
                    { id: "skills/cg", label: "Computer Graphics" },
                    { id: "skills/hosting", label: "Hosting" },
                    { id: "skills/swe", label: "Software Engineering" }
                ]} />
                <Project title={"Eureka"} images={["assets/projects/eureka/img1.png", "assets/projects/eureka/img2.png", "assets/projects/eureka/img3.png", "assets/projects/eureka/img4.png"]} languages={[
                    { id: "langs/js", label: "Java Script" }
                ]} tags={[
                    { id: "skills/react", label: "React" },
                    { id: "skills/ui", label: "UI / UX" },
                    { id: "skills/swe", label: "Software Engineering" }
                ]} />
                <Project title={"Lancer Scout"} images={["assets/projects/lancerscout/img1.png", "assets/projects/lancerscout/img2.png", "assets/projects/lancerscout/img3.png"]} languages={[
                    { id: "langs/js", label: "Java Script" }
                ]} tags={[
                    { id: "skills/node", label: "Node" },
                    { id: "skills/react", label: "React" },
                    { id: "skills/ui", label: "UI / UX" },
                    { id: "skills/algs", label: "Algorithms" },
                    { id: "skills/lead", label: "Team Leadership" },
                    { id: "skills/swe", label: "Software Engineering" },
                    { id: "skills/comm", label: "Communication" },
                ]} />
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
                <Experience title={"RoboLancers Lead Programmer (2022 - 2024)"} images={["https://picsum.photos/400/250", "https://picsum.photos/500/300"]} projects={[]} tags={["Leadership", "Communication"]} description={
                    <React.Fragment>
                        Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                        <br />
                        <br />
                        Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        <br />
                        Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                    </React.Fragment>
                } />
                <Experience title={"RoboLancers Programmer (2020 - 2022)"} images={["https://picsum.photos/400/250", "https://picsum.photos/500/300"]} projects={["Lancer Scout", "Rapid React", "Other Game", "Other Project", "Other Game", "Other Project"]} tags={[]} description={
                    <React.Fragment>
                        Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                        <br />
                        <br />
                        Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        <br />
                        Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                    </React.Fragment>
                } />
                <Experience title={"Summer Camp Counselor (2024 - 2025)"} images={["https://picsum.photos/400/250", "https://picsum.photos/500/300"]} projects={[]} tags={[]} description={
                    <React.Fragment>
                        Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                        <br />
                        <br />
                        Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        <br />
                        Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                    </React.Fragment>
                } />
            </section>
            <section id={"education"}>
                <h1>Education</h1>
                <div className={"education-container"}>
                    <Education title={"UMass Amherst Undergrad"} description={
                        <React.Fragment>
                            Lorem ipsum dolor sit amet, mei ne munere qualisque, eum ut persius intellegat. No per assum iudico. Sea dolores propriae cu, ea hinc inermis dolores duo. Qui no dicam intellegat, at sea dicta officiis, quis debet no mea. At equidem eloquentiam mea, mei decore animal fabulas ut, dolore tritani usu in.
                            <br />
                            
                            Et vix amet dicta sanctus, nec duis ignota antiopam in. Dico docendi comprehensam ex sit. Id mei dico democritum definitiones, reque tibique cu pro. Id nominavi copiosae comprehensam usu, no sed solum delenit. Argumentum consequuntur nec ad.
                        </React.Fragment>
                    } />
                    <Education title={"Central High School"} description={
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
                </div>
            </section>
        </React.Fragment>
    )
}

export default Main