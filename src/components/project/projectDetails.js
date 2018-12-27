import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Name - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque explicabo voluptas possimus est, pariatur ratione tempore commodi quas deleniti accusantium perspiciatis distinctio enim! Tempore modi quasi aliquid vero! Expedita nobis impedit repellat ullam voluptates suscipit harum nihil ipsum? Iste!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <p>posted by MS</p>
                    <p>23 Dec, 2am</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;