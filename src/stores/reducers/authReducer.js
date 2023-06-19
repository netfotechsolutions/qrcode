const initialState = {
  oktaAuth: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_OKTA_AUTH":
      return {
        ...state,
        oktaAuth: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
