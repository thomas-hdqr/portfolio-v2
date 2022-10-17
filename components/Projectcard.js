export default function Projectcard(props) {
    return (
        <div className="project">
            <img className="project-image" src={props.project.image} alt={props.project.title} />
            <p className="project-title">{props.project.title}</p>
            <p className="project-description">{props.project.description}</p>
            <p className="project-tech">{props.project.tech}</p>
            <div className="project-btn">
                <a href={props.project.link} target="_blank" rel="noopener noreferrer"><p>See project</p></a> 
            </div>
    </div>
    )
}