export default function ProjectsOutput({ data }) {
  return (
    <div className="output-block">
      <p className="section-label">Projects</p>
      {data.map((proj, i) => (
        <div key={i} className="card">
          <div className="card-header">
            <h4 className="card-title">{proj.title}</h4>
            {proj.featured && (
              <span className="featured-badge">featured</span>
            )}
          </div>
          <p className="card-desc">{proj.description}</p>
          {proj.github && (
            <div className="card-links">
              <a href={proj.github} target="_blank"
                 rel="noreferrer" className="card-link">
                GitHub ↗
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}