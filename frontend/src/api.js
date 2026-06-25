const BASE_URL = "http://127.0.0.1:8000";

export async function executeCommand(command) {
  const res = await fetch(`${BASE_URL}/terminal/execute/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ command }),
  });
  if (!res.ok) throw new Error("Server error");
  return res.json();
}