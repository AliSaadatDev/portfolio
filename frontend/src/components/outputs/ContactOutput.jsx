export default function ContactOutput({ data }) {
  return (
    <div className="output-block">
      <p className="section-label">Contact</p>
      <div className="contact-card">
        {data.email && (
          <div className="contact-row">
            <span className="contact-icon">✉</span>
            <a href={`mailto:${data.email}`}
               className="contact-value">{data.email}</a>
          </div>
        )}
        {data.github && (
          <div className="contact-row">
            <span className="contact-icon">gh</span>
            <a href={data.github} target="_blank"
               rel="noreferrer" className="contact-value">
              {data.github}
            </a>
          </div>
        )}
        {data.linkedin && (
          <div className="contact-row">
            <span className="contact-icon">in</span>
            <a href={data.linkedin} target="_blank"
               rel="noreferrer" className="contact-value">
              {data.linkedin}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}