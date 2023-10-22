import React from "react";

export default function ForgotPassword(){
    return(
    <>
    <div>
        <div className="">
            <h1 className="text-primary font-bold text-2xl mb-3.5">Forgot Password</h1>
            <p className="font-normal text-gray-500 text-sm">That’s ok, just enter the email address you’ve used to register<br/>with us and we’ll send you a reset link!</p>
        </div>
        <div className="my-6">
            <div>
                <label for="email" class="block font-medium text-gray-900 mb-5">Email</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email address" required/>
            </div>
            <div className="mt-6">
                <button className="bg-primary w-96 py-3.5 px-6 text-white font-xs font-normal rounded-lg">Continue</button>
            </div>
        </div>
        <div className="flex gap-5 place-content-center w-96">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M10.2418 5.93799L4.17175 12.008L10.2418 18.078" stroke="#064B82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.1718 12.0078H4.3418" stroke="#064B82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <button>Back to Sign In</button>
        </div>
    </div>
    
    
    
    
    </>
    )
}