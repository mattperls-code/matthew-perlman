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
    const langs = {
        cpp: { id: "langs/cpp", label: "C++" },
        java: { id: "langs/java", label: "Java" },
        js_ts: { id: "langs/js_ts", label: "Java Script / Type Script" },
        html_css: { id: "langs/html_css", label: "HTML + CSS" },
        tex: { id: "langs/tex", label: "LaTex" }
    }

    const skills = {
        ml: { id: "skills/ml", label: "Machine Learning" },
        flt: { id: "skills/flt", label: "Formal Language Theory" },
        regex: { id: "skills/regex", label: "Regular Expressions" },
        parsing: { id: "skills/parsing", label: "Parsing" },
        cv: { id: "skills/cv", label: "Computer Vision" },
        cg : { id: "skills/cg", label: "Computer Graphics" },
        robo : { id: "skills/robo", label: "Robotics" },
        scraping : { id: "skills/scraping", label: "Web Scraping" },
        alg : { id: "skills/alg", label: "Algorithms" },
        ui : { id: "skills/ui", label: "UI / UX" },
        node : { id: "skills/node", label: "NodeJS" },
        react : { id: "skills/react", label: "React / React Native" },
        hosting : { id: "skills/hosting", label: "Hosting" },
        extensions : { id: "skills/extensions", label: "Chrome Extensions" },
        lead : { id: "skills/lead", label: "Team Leadership" },
        swe : { id: "skills/swe", label: "Software Engineering" },
        comm : { id: "skills/comm", label: "Communication" }
    }

    const projects = {
        cnn: { id: "projects/cnn", label: "Convolutional Neural Network" },
        nn: { id: "projects/nn", label: "Neural Network" },
        frc24: { id: "projects/frc24", label: "2024 FRC Robot" },
        frc23: { id: "projects/frc23", label: "2023 FRC Robot" },
        fa: { id: "projects/fa", label: "Finite Automata" },
        parser: { id: "projects/parser", label: "Parser" },
        platinum: { id: "projects/platinum", label: "Platinum" },
        fn3d: { id: "projects/fn3d", label: "3D Function Renderer" },
        olrt: { id: "projects/olrt", label: "One Line Ray Tracer" },
        nbody: { id: "projects/nbody", label: "N-Body Simulator" },
        textgen: { id: "projects/textgen", label: "Markov Chain Text Generator" },
        clearcontext: { id: "projects/clearcontext", label: "Clear Context" },
        quoteit: { id: "projects/quoteit", label: "Quote It" },
        quickdodge: { id: "projects/quickdodge", label: "Quick Dodge" },
        eureka: { id: "projects/eureka", label: "Eureka" },
        lancerscout: { id: "projects/lancerscout", label: "Lancer Scout" }
    }

    const generateImageArr = (path, count) => {
        const imageArr = []

        for (let i = 1;i<=count;i++) imageArr.push(path + "/img" + i + ".png")

        return imageArr
    }

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

                <Project info={projects.cnn} images={generateImageArr("assets/projects/cnn", 3)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.ml,
                    skills.cv,
                    skills.cg,
                    skills.alg,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.nn} images={generateImageArr("assets/projects/nn", 5)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.ml,
                    skills.alg,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.frc24} images={generateImageArr("assets/projects/frc24", 4)} languages={[
                    langs.java
                ]} tags={[
                    skills.robo,
                    skills.cv,
                    skills.alg,
                    skills.lead,
                    skills.swe,
                    skills.comm
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.frc23} images={generateImageArr("assets/projects/frc23", 4)} languages={[
                    langs.java
                ]} tags={[
                    skills.robo,
                    skills.cv,
                    skills.alg,
                    skills.lead,
                    skills.swe,
                    skills.comm
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.fa} images={generateImageArr("assets/projects/fa", 3)} languages={[
                    langs.cpp,
                    langs.tex
                ]} tags={[
                    skills.flt,
                    skills.regex,
                    skills.parsing,
                    skills.alg,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.parser} images={generateImageArr("assets/projects/parser", 1)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.parsing,
                    skills.alg,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.platinum} images={generateImageArr("assets/projects/platinum", 3)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.parsing,
                    skills.alg,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.fn3d} images={generateImageArr("assets/projects/fn3d", 4)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.cg,
                    skills.alg,
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.olrt} images={generateImageArr("assets/projects/olrt", 1)} languages={[
                    langs.js_ts
                ]} tags={[
                    skills.cg,
                    skills.alg
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.nbody} images={generateImageArr("assets/projects/nbody", 3)} languages={[
                    langs.js_ts
                ]} tags={[
                    skills.cg,
                    skills.alg
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.textgen} images={generateImageArr("assets/projects/textgen", 3)} languages={[
                    langs.cpp
                ]} tags={[
                    skills.ml,
                    skills.alg
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.clearcontext} images={generateImageArr("assets/projects/clearcontext", 2)} languages={[
                    langs.js_ts,
                    langs.html_css
                ]} tags={[
                    skills.node,
                    skills.react,
                    skills.ui,
                    skills.hosting,
                    skills.extensions,
                    skills.scraping,
                    skills.alg,
                    skills.swe,
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.quoteit} images={generateImageArr("assets/projects/quoteit", 1)} languages={[
                    langs.js_ts
                ]} tags={[
                    skills.react,
                    skills.ui,
                    skills.hosting,
                    skills.swe,
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.quickdodge} images={generateImageArr("assets/projects/quickdodge", 1)} languages={[
                    langs.js_ts
                ]} tags={[
                    skills.react,
                    skills.ui,
                    skills.cg,
                    skills.hosting
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.eureka} images={generateImageArr("assets/projects/eureka", 4)} languages={[
                    langs.js_ts,
                    langs.html_css
                ]} tags={[
                    skills.react,
                    skills.ui,
                    skills.swe
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Project info={projects.lancerscout} images={generateImageArr("assets/projects/lancerscout", 3)} languages={[
                    langs.js_ts,
                    langs.html_css
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } tags={[
                    skills.node,
                    skills.react,
                    skills.ui,
                    skills.alg,
                    skills.lead,
                    skills.swe,
                    skills.comm,
                ]} />
            </section>
            <section id={"skills"}>
                <h1>Skills</h1>

                <div className={"skills-container"}>
                    <Skill info={langs.cpp} projects={[
                        projects.cnn,
                        projects.nn,
                        projects.fa,
                        projects.parser,
                        projects.platinum,
                        projects.fn3d,
                        projects.textgen
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={langs.java} projects={[
                        projects.frc24,
                        projects.frc23
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={langs.js_ts} projects={[
                        projects.olrt,
                        projects.nbody,
                        projects.clearcontext,
                        projects.quoteit,
                        projects.quickdodge,
                        projects.eureka,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={langs.html_css} projects={[
                        projects.clearcontext,
                        projects.eureka,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={langs.tex} projects={[
                        projects.fa
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.ml} projects={[
                        projects.cnn,
                        projects.nn,
                        projects.textgen
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.flt} projects={[
                        projects.fa
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.regex} projects={[
                        projects.fa
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.parsing} projects={[
                        projects.fa,
                        projects.parser,
                        projects.platinum
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.cv} projects={[
                        projects.cnn,
                        projects.frc24,
                        projects.frc23
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.cg} projects={[
                        projects.cnn,
                        projects.fn3d,
                        projects.olrt,
                        projects.nbody,
                        projects.quickdodge
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.robo} projects={[
                        projects.frc24,
                        projects.frc23
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.scraping} projects={[
                        projects.clearcontext
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.alg} projects={[
                        projects.cnn,
                        projects.nn,
                        projects.frc24,
                        projects.frc23,
                        projects.fa,
                        projects.parser,
                        projects.platinum,
                        projects.fn3d,
                        projects.olrt,
                        projects.nbody,
                        projects.textgen,
                        projects.clearcontext,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.ui} projects={[
                        projects.clearcontext,
                        projects.quoteit,
                        projects.quickdodge,
                        projects.eureka,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.node} projects={[
                        projects.clearcontext,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.react} projects={[
                        projects.clearcontext,
                        projects.quoteit,
                        projects.quickdodge,
                        projects.eureka,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.hosting} projects={[
                        projects.clearcontext,
                        projects.quoteit,
                        projects.quickdodge
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.extensions} projects={[
                        projects.clearcontext
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.lead} projects={[
                        projects.frc24,
                        projects.frc23,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.swe} projects={[
                        projects.cnn,
                        projects.nn,
                        projects.frc24,
                        projects.frc23,
                        projects.fa,
                        projects.parser,
                        projects.platinum,
                        projects.clearcontext,
                        projects.quoteit,
                        projects.eureka,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />

                    <Skill info={skills.comm} projects={[
                        projects.frc24,
                        projects.frc23,
                        projects.lancerscout
                    ]} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />
                </div>
            </section>
            <section id={"experience"}>
                <h1>Experience</h1>
                
                <Experience title={"RoboLancers Lead Programmer (2022 - 2024)"} images={generateImageArr("assets/experience/frc-prog-lead", 5)} projects={[
                    projects.frc24,
                    projects.frc23,
                    projects.lancerscout
                ]} tags={[
                    langs.java,
                    skills.cv,
                    skills.robo,
                    skills.alg,
                    skills.lead,
                    skills.swe,
                    skills.comm
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Experience title={"RoboLancers Programmer (2021 - 2022)"} images={generateImageArr("assets/experience/frc-prog", 2)} projects={[]} tags={[
                    langs.java,
                    skills.cv,
                    skills.robo,
                    skills.alg,
                    skills.swe,
                    skills.comm
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />

                <Experience title={"Summer Camp Counselor (2024 - 2025)"} images={[]} projects={[]} tags={[
                    skills.lead,
                    skills.comm
                ]} description={
                    <React.Fragment>
                        TODO
                    </React.Fragment>
                } />
            </section>
            <section id={"education"}>
                <h1>Education</h1>

                <div className={"education-container"}>
                    <Education title={"UMass Amherst Undergrad"} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />
                    
                    <Education title={"Central High School"} description={
                        <React.Fragment>
                            TODO
                        </React.Fragment>
                    } />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Main