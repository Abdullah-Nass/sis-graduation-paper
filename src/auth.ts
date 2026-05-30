const AUTH_KEY = "sis-authenticated";

export function setAuthenticated(remember = false) {
  if (remember) {
    localStorage.setItem(AUTH_KEY, "true");
    sessionStorage.removeItem(AUTH_KEY);
  } else {
    sessionStorage.setItem(AUTH_KEY, "true");
    localStorage.removeItem(AUTH_KEY);
  }
}

export function isAuthenticated() {
  return (
    sessionStorage.getItem(AUTH_KEY) === "true" ||
    localStorage.getItem(AUTH_KEY) === "true"
  );
}

export function clearAuthenticated() {
  sessionStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(AUTH_KEY);
}
