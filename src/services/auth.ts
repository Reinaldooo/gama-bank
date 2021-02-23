type AuthDetails = {
  token: string | null;
  login: string | null;
  userName: string | null;
};

export const isAuth = (): AuthDetails => {
  const token = localStorage.getItem("@tokenApp");
  const login = localStorage.getItem("@loginApp");
  const userName = localStorage.getItem("@userNameApp");
  if (token && login) {
    return {
      login,
      token,
      userName,
    };
  }
  return {
    login: null,
    token: null,
    userName: null,
  };
};
