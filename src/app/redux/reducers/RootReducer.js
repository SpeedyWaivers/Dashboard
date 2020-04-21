import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import NavigationReducer from "./NavigationReducer";
import WaiverReducer from "./WaiverReducer";

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  navigations: NavigationReducer,
  waiver: WaiverReducer,
});

export default RootReducer;
