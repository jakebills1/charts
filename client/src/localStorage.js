export const saveToken = token => {
  try {
    const serializedToken = JSON.stringify(token);
    localStorage.setItem("access-token", serializedToken);
  } catch (error) {
    console.log(error);
  }
};
export const loadToken = () => {
  const token = localStorage.getItem("access-token");
  return token;
};
