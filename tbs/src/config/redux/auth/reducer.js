import { type } from "@testing-library/user-event/dist/type";
import { Login } from "./actionType";

import * as actionType from './actionType'

const userToken = localStorage.getItem("token") ?? null

const initializeState = {
    user: { username: "", token: userToken, isLoggedIn: false, Role_ID: "" }
}

const AuthReducer = (state = initializeState, {type, payload}) => {
    switch (type) {
        case actionType.Login: 
            return {
                ...state,
                // user: { username: action.payload, isLoggedIn: true },
                user: {
                    ...state.user,
                    ...payload,
                    isLoggedIn: true
                },
            }
        case actionType.SetUser:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...payload,
                },
            }
        default: 
        return { ...state };
    }
}

export default AuthReducer
