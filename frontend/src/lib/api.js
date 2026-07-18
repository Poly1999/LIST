const API_URL = 'http://localhost:8080/api/tasks';

export function getTasks(params = {}) {
  const query = new URLSearchParams(params).toString();
  return fetch(`${API_URL}?${query}`).then(res => res.json());
}

export function updateTask(id, updates) {
  return fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  }).then(res => res.json());
}

export function deleteTask(id) {
  return fetch(`${API_URL}/${id}`, { method: 'DELETE' }).then(res =>
    res.json(),
  );
}

export function createTask(data) {
  return fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json());
}
