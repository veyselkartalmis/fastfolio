const SkillsCard = ({ name, percent }) => {
    return (
        <div className="skill-item">
            <div className="name">{name}</div>
            <div className="percent">{percent}</div>
            <span className="fill-percent"></span>
        </div>
    )
}

export default SkillsCard;