const ProjectCard = ({ link, name }) => {
    return (
        <a href={link} className="project-item">
            <div className="link">github.com</div>
            <div className="name">{name}</div>
            <svg width="43.134" height="43.341" viewBox="0 0 43.134 43.341"><defs></defs><g transform="translate(0.5 0.707)"><path d="M38.112,22.386V36.43a4.682,4.682,0,0,1-4.682,4.682H7.682A4.682,4.682,0,0,1,3,36.43V10.682A4.682,4.682,0,0,1,7.682,6H21.726" transform="translate(-3 1.022)" /><path d="M15,3H29.045V17.045" transform="translate(13.09 -3)" /><line y1="25.848" x2="24.002" transform="translate(16.617)" /></g></svg>
        </a>
    )
}

export default ProjectCard;