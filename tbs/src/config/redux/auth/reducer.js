import { type } from "@testing-library/user-event/dist/type";
import { Login } from "./actionType";

import * as actionType from './actionType'

const initializeState = {
    user: { username: "", isLoggedIn: false }
}

const AuthReducer = (state = initializeState, {type, payload}) => {
    switch (type) {
        case actionType.Login:
            return {
                ...state,
                // user: { username: action.payload, isLoggedIn: true }
                user: {
                    ...state.user,
                    ...payload,
                    isLoggedIn: true,
                },
            }
        default: 
        return { ...state };
    }
}

export default AuthReducer
