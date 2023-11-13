import { Login } from "./actionType";
import axios, { Axios } from "axios";
import API_LOCAL from "../../API"

export const LoginAction = (payload) => {
    return async (dispatch) => {
        try {
            let response = await axios({
                method: "post", 
                // url: `${API_LOCAL}/api/users/login`,
                url: "http://localhost:3000/api/users/login",
                data: {
                    Username : payload.username,
                    Password : payload.Password
                }
            })
            dispatch({type: Login, payload:{username: response.payload.Username}})
        } catch (error) {
            console.log(error)
        }
    }
}