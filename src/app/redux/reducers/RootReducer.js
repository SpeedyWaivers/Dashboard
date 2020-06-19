import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import NavigationReducer from "./NavigationReducer";
import WaiverReducer from "./WaiverReducer";
import registrationReducer from "./RegistrationReducer";
import paymentReducer from "./PaymentReducer";

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  navigations: NavigationReducer,
  waiver: WaiverReducer,
  setup: registrationReducer,
  payment: paymentReducer,
});

export default RootReducer;
