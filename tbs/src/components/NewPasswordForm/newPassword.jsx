import React, { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import qs from "qs";
import axios from "axios";


export default function NewPasswordForm(){
    const [showPassword, setShowPassword] = useState(false)
    const {search} = useLocation()
    const navigate = useNavigate();
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)    
    const [error, setError] = useState("")
    const [newPasswordData, setNewPasswordData] = useState({
        password: "",
        confirm_password: ""
    })
    const token = qs.parse(search.replace("?", ""))?.token ?? null;

    console.log(token)

    const onSubmitNewPassword = async (event) => {
        event.preventDefault();
        let result = { error: false, message: "" }
        
        try {
            let response = await axios({
                method: "patch",
                url: "http://localhost:3000/api/auth/user/change-password",
                data: newPasswordData,
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })

            console.log(response)

            result = {
                error: false,
                message: "Done!"
            }
        } catch (error) {
            if (error.response.status == 404) {
                result = {
                    error: true,
                    message: error.response.data
                }
            }
            result = {
                error: true,
                message: error.message
            };
        }

        if (result.error) {
            setError(result.message)
        }

    }

    const onChange = useCallback((e) => {
        setNewPasswordData({...newPasswordData, [e.target.name]: e.target.value})
    });


    return(
    <>
    <div className="bg-white w-[556px] rounded-lg h-[642px] flex items-center justify-center">
        <div className="w-[453px]">
            <div className="flex justify-center mb-10">
                <img src="/images/logo_tbs.png" />
            </div>
            <div className="">
                <h1 className="text-primary font-bold text-2xl mb-3.5">New Password</h1>
                <p className="font-normal text-gray-500 text-sm">Please make sure your new password must be different<br/>from previous used passwords.</p>
            </div>
            <form onSubmit={onSubmitNewPassword}>
                <div className="my-6">
                    <div>
                        <label 
                            htmlFor="enter_password" 
                            className="block font-medium text-gray-900 mb-5">
                                Enter Password
                        </label>
                        <div className="flex items-center">
                            <input
                                type={showPassword ? "text" : "password"} 
                                id="newPassword" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Enter Password" 
                                name="password"
                                onChange={onChange}
                                required
                            />
                            {
                                showPassword ?
                                <AiOutlineEye
                                    onClick={() => setShowPassword(false)}
                                    className="absolute right-[160px] cursor-pointer colour-gray-500"
                                    size={24}
                                    color="grey"
                                />
                                :
                                <AiOutlineEyeInvisible
                                    onClick={() => setShowPassword(true)}
                                    className="absolute right-[160px] cursor-pointer"
                                    size={24}
                                    color="grey"
                                />
                            }
                        </div>
                    </div>
                    <div className="mt-6">
                        <label 
                            htmlFor="confirm_password" 
                            className="block font-medium text-gray-900 mb-5">
                                Confirm Password
                        </label>
                        <div className="flex items-center">
                            <input 
                                type = {showConfirmPassword ? "text" : "password"}
                                id="confirmNewOassword" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Confirm Password" 
                                name="confirm_password"
                                required
                                onChange={onChange}
                            />
                            {
                                showConfirmPassword ?
                                <AiOutlineEye
                                    onClick={() => setShowConfirmPassword(false)}
                                    className="absolute right-[160px] cursor-pointer colour-gray-500"
                                    size={24}
                                    color="grey"
                                />
                                :
                                <AiOutlineEyeInvisible
                                    onClick={() => setShowConfirmPassword(true)}
                                    className="absolute right-[160px] cursor-pointer"
                                    size={24}
                                    color="grey"
                                />
                            }
                        </div>
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="bg-primary w-full py-3.5 text-white font-xs font-normal rounded-lg">Reset Password</button>
                    </div>
                </div>
                <div className="flex gap-5 place-content-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M10.2418 5.93799L4.17175 12.008L10.2418 18.078" stroke="#064B82" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.1718 12.0078H4.3418" stroke="#064B82" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <button>Back to Sign In</button>
                </div>
            </form>
        </div>
    </div>
    
    
    
    
    </>
    )
}