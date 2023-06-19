const languageAction = (language) => {
  return {
    type: "SET_LANGUAGE",
    payload: language,
  };
};

export default languageAction;
