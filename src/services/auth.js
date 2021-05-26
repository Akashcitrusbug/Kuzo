export const isAuthenticated = () => {
  const permissions = localStorage.getItem("token");
  return true ? permissions : false;
};

export const logout = () => {
    console.log('in');
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    // localStorage.removeItem("userCreatorData");
    // localStorage.removeItem("location");
    // localStorage.removeItem("next_url");
  }