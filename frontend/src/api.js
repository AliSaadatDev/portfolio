const BASE_URL = "https://backendalisad.vercel.app";

export async function executeCommand(command) {
  const res = await fetch(`${BASE_URL}/terminal/execute/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ command }),
  });
  if (!res.ok) throw new Error("Server error");
  return res.json();
}