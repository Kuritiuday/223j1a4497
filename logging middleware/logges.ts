
export async function Log(stack: string, level: string, pkg: string, message: string) {
  // Replace /api/log with the test server logging endpoint if you have it
  await fetch("/api/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ stack, level, package: pkg, message, timestamp: new Date().toISOString() })
  });
}
