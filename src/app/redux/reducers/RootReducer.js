import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import NavigationReducer from "./NavigationReducer";
import WaiverReducer from "./WaiverReducer";
import registrationReducer from "./RegistrationReducer";

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  navigations: NavigationReducer,
  waiver: WaiverReducer,
  setup: registrationReducer,
});

export default RootReducer;
