export const oktaAuthAction = (auth) => {
  return {
    type: "SET_AUTH",
    payload: auth,
  };
};
