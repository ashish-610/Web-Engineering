const BASE = (import.meta.env.VITE_API_URL ?? 'https://jsonplaceholder.typicode.com').replace(
  /\/+$/,
  '',
);

async function request(path, options) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

const unwrapData = (response) => response?.data ?? response;

export const fetchUsers = async () => unwrapData(await request('/users'));

export const fetchUser = async (id) =>
  unwrapData(await request(`/users/${encodeURIComponent(id)}`));

export const createUser = async (body) =>
  unwrapData(await request('/users', { method: 'POST', body: JSON.stringify(body) }));
