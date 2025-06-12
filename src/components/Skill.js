import React from "react"

import { HashLink } from "react-router-hash-link"

const Skill = ({ title, description, projects }) => {
    const projectComponents = []

    projects.forEach((project, index) => {
        projectComponents.push(
            <HashLink key={index} to={"#" + project.id} className={"descriptor"}>
                {
                    project.label
                }
            </HashLink>
        )
    })

    return (
        <article className={"skill"}>
            <h2>
                {
                    title
                }
            </h2>
            <div className={"description"}>
                {
                    description
                }
            </div>
            {
                projects.length != 0 && (
                    <div className={"descriptors"}>
                        Projects:
                        {
                            projectComponents
                        }
                    </div>
                )
            }
        </article>
    )
}

export default Skill