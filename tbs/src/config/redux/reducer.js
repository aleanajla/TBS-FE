import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer";
import CapacityReducer from "./capacityPlanning/reducer";
import BookingReducer from "./booking/reducer";

const reducer = combineReducers({
    Auth: AuthReducer,
    CapacityPlanning: CapacityReducer,
    Booking : BookingReducer
})

export default reducer