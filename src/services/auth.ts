type AuthDetails = {
  token: string | null;
  user: string | null;
};

export const isAuth = (): AuthDetails => {
  const token = localStorage.getItem("@tokenApp");
  const user = localStorage.getItem("@userApp");
  if (token && user) {
    return {
      user,
      token,
    };
  }
  return {
    user: null,
    token: null,
  };
};
