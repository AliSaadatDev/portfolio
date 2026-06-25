import { useState, useCallback } from "react";
import { executeCommand } from "../api";

export function useTerminal() {
  const [history, setHistory] = useState([]);
  const [inputHistory, setInputHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [loading, setLoading] = useState(false);

  const pushEntry = useCallback((entry) => {
    setHistory((prev) => [...prev, entry]);
  }, []);

  const runCommand = useCallback(async (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setInputHistory((prev) => [cmd, ...prev]);
    setHistoryIndex(-1);
    pushEntry({ type: "input", value: cmd });

    if (cmd === "clear") { setHistory([]); return; }

    setLoading(true);
    try {
      const result = await executeCommand(cmd);
      pushEntry({ type: "output", payload: result });
    } catch {
      pushEntry({
        type: "output",
        payload: {
          type: "error",
          output: ["Connection error.", "Make sure backend is running."],
        },
      });
    } finally {
      setLoading(false);
    }
  }, [pushEntry]);

  const navigateHistory = useCallback((direction) => {
    setHistoryIndex((prev) => {
      const next = direction === "up"
        ? Math.min(prev + 1, inputHistory.length - 1)
        : Math.max(prev - 1, -1);
      return next;
    });
    return direction === "up"
      ? inputHistory[historyIndex + 1] ?? ""
      : inputHistory[historyIndex - 1] ?? "";
  }, [inputHistory, historyIndex]);

  return { history, loading, runCommand, navigateHistory };
}