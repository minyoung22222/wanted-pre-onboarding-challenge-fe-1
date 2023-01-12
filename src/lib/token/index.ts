export const getToken = (key: string) => {
  return localStorage.getItem(key);
};

export const setToken = (key: string, token: string) => {
  return localStorage.setItem(key, token);
};
