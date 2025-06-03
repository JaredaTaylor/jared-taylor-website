const API_BASE_URL = import.meta.env.API_URL;

export async function executeCommand(command, pwd, args = []) {
  const response = await fetch(`${API_BASE_URL}/v1/exec/${command}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authentication': 'Api-Key' + import.meta.env.API_SECRET,
    },
    body: JSON.stringify({ pwd, args }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Server error: ${error}`);
  }

  return response.json(); // { stdout, stderr, returncode, cwd }
}