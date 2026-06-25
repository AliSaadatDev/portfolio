export default function ExperienceOutput({ data }) {
  return (
    <div className="output-block">
      <p className="section-label">Experience</p>
      {data.map((exp, i) => (
        <div key={i} className="card">
          <h4 className="card-title">
            {exp.position}
            <span className="card-company"> · {exp.company}</span>
          </h4>
          {exp.current && (
            <span className="current-badge">current</span>
          )}
        </div>
      ))}
    </div>
  );
}