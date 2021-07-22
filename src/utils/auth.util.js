export const USER_TOKEN = {
  get: () => localStorage.getItem('userToken'),
  set: (newValue) => {
    localStorage.setItem('userToken', `Bearer ${newValue}`);
  },
  delete: () => localStorage.removeItem('userToken'),
};

export const LANGUAGE = {
  get: () => localStorage.getItem('lang'),
  set: (newValue) => {
    localStorage.setItem('lang', newValue);
  },
  delete: () => localStorage.removeItem('lang'),
};
