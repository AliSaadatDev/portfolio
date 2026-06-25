const COMMANDS = [
  "whoami", "skills", "projects",
  "experience", "contact", "clear", "help"
];

export default function HelpOutput({ onCommand }) {
  return (
    <div className="output-block">
      <p className="section-label">Available commands</p>
      <div className="help-grid">
        {COMMANDS.map((cmd) => (
          <button key={cmd} className="help-btn"
                  onClick={() => onCommand(cmd)}>
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}