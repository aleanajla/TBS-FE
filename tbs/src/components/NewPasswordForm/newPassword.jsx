import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function NewPasswordForm(){
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
            <form>
                <div className="my-6">
                    <div>
                        <label 
                            for="enter_password" 
                            class="block font-medium text-gray-900 mb-5">
                                Enter Password
                        </label>
                        <div className="flex items-center">
                            <input
                                type={showPassword ? "text" : "password"} 
                                id="first_name" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Enter Password" 
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
                            for="confirm_password" 
                            class="block font-medium text-gray-900 mb-5">
                                Confirm Password
                        </label>
                        <div className="flex items-center">
                            <input 
                                type = {showConfirmPassword ? "text" : "password"}
                                id="first_name" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Confirm Password" 
                                required
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
                        <button className="bg-primary w-full py-3.5 text-white font-xs font-normal rounded-lg">Reset Password</button>
                    </div>
                </div>
                <div className="flex gap-5 place-content-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M10.2418 5.93799L4.17175 12.008L10.2418 18.078" stroke="#064B82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.1718 12.0078H4.3418" stroke="#064B82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <button>Back to Sign In</button>
                </div>
            </form>
        </div>
    </div>
    
    
    
    
    </>
    )
}