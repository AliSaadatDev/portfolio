export default function SkillsOutput({ data }) {
  return (
    <div className="output-block">
      <p className="section-label">Skills</p>
      {data.map((skill, i) => (
        <div key={i} className="skill-row">
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar-bg">
            <div className="skill-bar"
                 style={{ width: `${skill.level}%` }} />
          </div>
          <span className="skill-level">{skill.level}%</span>
        </div>
      ))}
    </div>
  );
}