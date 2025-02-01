export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export async function loginApi(email, password) {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // include cookies
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}

export async function registerApi(firstName, lastName, email, password) {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, email, password }),
  });
  return response.json();
}

export async function getExpensesApi(page = 1, limit = 10, filters = {}) {
  // Build query string from page, limit and filters
  const query = new URLSearchParams({
    page,
    limit,
    ...filters,
  });
  const response = await fetch(`${API_BASE_URL}/api/expenses?${query.toString()}`, {
    credentials: 'include',
  });
  return response.json();
}

export async function getExpenseApi(id) {
  const response = await fetch(`${API_BASE_URL}/api/expenses/${id}`, {
    credentials: 'include',
  });
  return response.json();
}

export async function createExpenseApi(expenseData) {
  const response = await fetch(`${API_BASE_URL}/api/expenses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(expenseData),
  });
  return response.json();
}

export async function updateExpenseApi(id, expenseData) {
  const response = await fetch(`${API_BASE_URL}/api/expenses/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(expenseData),
  });
  return response.json();
}

export async function deleteExpenseApi(id) {
  const response = await fetch(`${API_BASE_URL}/api/expenses/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return response.json();
}

export async function getInsightsApi() {
  const response = await fetch(`${API_BASE_URL}/api/insights`, {
    credentials: 'include',
  });
  return response.json();
}
