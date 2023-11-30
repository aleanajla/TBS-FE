import { Login, SetUser } from "./actionType";
import axios, { Axios } from "axios";
import API_LOCAL from "../../API"

export const LoginAction = (payload) => {
    console.log("payload:", payload);
    return async (dispatch) => {
        try {
            let response = await axios({
                method: "post", 
                // url: `${API_LOCAL}/api/users/login`,
                url: "http://localhost:3000/api/users/login",
                data: {
                    Username : payload.Username,
                    Password : payload.Password
                }
            })

            const { username, Role_ID } = response.data.payload;
            dispatch({type: Login, payload:{username, Role_ID, token: response.data.token}})
            localStorage.setItem("token", response.data.token)
            
            return {
                error : false,
                message: "Succesfully Login"
            }
        } catch (error) {
            if(error.response.status == 404){
                return {
                    error : true,
                    message: error.response.data
                }
            }
            return {
                error: true,
                message: error.message
            };
        }
    }
}

export const GetUserDetails = (payload) => {
    return async (dispatch) => {
        try {
            let response = await axios({
                method: "get", 
                // url: `${API_LOCAL}/api/users/login`,
                url: "http://localhost:3000/api/auth/user",
                headers: {
                    "Authorization" : `Bearer ${payload.token}`
                }
            })

            // TODO: Handle error


            const { Username, Role_ID, id, Customer_ID } = response.data;

            dispatch({type: SetUser, payload: {
                
                    username: Username,
                    isLoggedIn: true,
                    Role_ID: Role_ID,
                    id : id,
                    Customer_ID: Customer_ID
                
            }})
        } catch (error) {
            console.log(error)
        }
    }
}