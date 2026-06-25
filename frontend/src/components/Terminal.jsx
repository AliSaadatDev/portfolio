import { useEffect, useRef, useState } from "react";
import { useTerminal } from "../hooks/useTerminal";
import OutputRenderer from "./OutputRenderer";

const PROMPT = "visitor@portfolio ~ $";

export default function Terminal() {
  const { history, loading, runCommand, navigateHistory } = useTerminal();
  const [inputVal, setInputVal] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { runCommand("help"); }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, loading]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      runCommand(inputVal);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const val = navigateHistory("up");
      if (val !== undefined) setInputVal(val);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setInputVal(navigateHistory("down") || "");
    }
  }

  return (
    <div className="terminal-wrapper"
         onClick={() => inputRef.current?.focus()}>
      <div className="terminal">
        <div className="titlebar">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
          <span className="titlebar-title">portfolio — bash</span>
        </div>
        <div className="output-area">
          <p className="welcome-msg">
            Welcome to Ali Saadat's portfolio.{" "}
            <span className="welcome-hint">
              Type a command or click one above.
            </span>
          </p>
          {history.map((entry, i) => (
            <div key={i}>
              {entry.type === "input" && (
                <p className="prompt-line">
                  <span className="prompt-prefix">{PROMPT}</span>{" "}
                  <span className="prompt-cmd">{entry.value}</span>
                </p>
              )}
              {entry.type === "output" && (
                <OutputRenderer
                  payload={entry.payload}
                  onCommand={runCommand}
                />
              )}
            </div>
          ))}
          {loading && (
            <p className="loading-line">
              <span className="loading-dots">···</span>
            </p>
          )}
          <div ref={bottomRef} />
        </div>
        <div className="input-row">
          <span className="prompt-prefix">{PROMPT}</span>
          <input
            ref={inputRef}
            className="cmd-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
            autoFocus
          />
          <span className="cursor" />
        </div>
      </div>
    </div>
  );
}