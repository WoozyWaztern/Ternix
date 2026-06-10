const USERS_KEY = 'ternix_users';
const SESSION_KEY = 'ternix_session';

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setSession(username) {
  localStorage.setItem(SESSION_KEY, username);
}

function getSession() {
  return localStorage.getItem(SESSION_KEY);
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function ensureAuthRedirect() {
  const onAuthPage = location.pathname.endsWith('index.html') || location.pathname === '/' || location.pathname.endsWith('/');
  const onGamePage = location.pathname.endsWith('hom
