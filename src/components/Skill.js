import React from "react"

const Skill = ({ title, description, projects }) => {
    const projectComponents = []

    projects.forEach((project, index) => {
        projectComponents.push(
            <div key={index} className={"descriptor"}>
                {
                    project
                }
            </div>
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