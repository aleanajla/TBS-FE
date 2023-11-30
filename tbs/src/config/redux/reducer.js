import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer";
import CapacityReducer from "./capacityPlanning/reducer";

const reducer = combineReducers({
    Auth: AuthReducer,
    CapacityPlanning: CapacityReducer
})

export default reducer