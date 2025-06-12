import React from "react"

const Project = ({ title, images, languages, tags, description }) => {
    const languagesComponents = []

    const tagsComponents = []

    return (
        <article className={"project"}>
            <div className={"info"}>
                <h2>
                    {
                        title
                    }
                </h2>
                <div className={"languages"}>
                    {
                        languagesComponents
                    }
                </div>
                <div className={"tags"}>
                    {
                        tagsComponents
                    }
                </div>
                <div className={"description"}>
                    {
                        description
                    }
                </div>
            </div>
            <div className={"carousel"}></div>
        </article>
    )
}

export default Project