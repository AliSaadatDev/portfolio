export default function ErrorOutput({ lines }) {
  return (
    <div className="output-block">
      {lines.map((line, i) => (
        <p key={i} className="error-line">{line}</p>
      ))}
    </div>
  );
}