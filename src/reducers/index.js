import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import userReducer from "./user";
import communicationReducer from "./communication";
import customerReducer from "./customer";
import challengeReducer from "./challenge";
import organizationReducer from "./organization";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  communication: communicationReducer,
  customer: customerReducer,
  challenge: challengeReducer,
  organization: organizationReducer,
  profile: profileReducer,
});

export default rootReducer;
