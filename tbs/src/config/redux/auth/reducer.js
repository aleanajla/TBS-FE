import { Login } from "./actionType";

const initializeState = {
    user: { username: "", isLoggedIn: false }
}

const AuthReducer = (state = initializeState, action) => {
    switch (action.type) {
        case Login:
            return {
                ...state,
                // user: { username: action.payload, isLoggedIn: true }
                user: {
                    ...state.users,
                    ...action.payload,
                    isLoggedIn: true,
                },
            }
        default: break
    }
}

export default AuthReducer
