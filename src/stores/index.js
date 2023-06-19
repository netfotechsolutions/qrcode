import { combineReducers } from "redux";
import language from "./reducers/languageReducer";
import auth from "./reducers/authReducer";

const rootReducer = combineReducers({
  language,
  auth,
});

export default rootReducer;
