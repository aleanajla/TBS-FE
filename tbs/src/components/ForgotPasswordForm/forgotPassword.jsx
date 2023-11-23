import React, { useState, useCallback } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "src/components/ui/card"
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";

export default function ForgotPasswordForm() {
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")

    const onSubmitForgotPassword = async (event) => {
        event.preventDefault();
        let result = { error: false, message: "" }

        try {
            let response = await axios({
                method: "post",
                // url: `${API_LOCAL}/api/users/login`,
                url: "http://localhost:3000/api/auth/user/forgot-password",
                data: {
                    Email: email
                }
            })

            console.log(response)
            result = {
                error: false,
                message: "View your email!"
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
        setEmail(e.target.value)
    });

    return (
        <Card className="w-[550px] min-h-[690px] py-3 px-[36px] rounded-lg">
            <div className="h-full flex flex-col justify-center">
                <CardHeader>
                    <div className="flex justify-center mt-7 py-7">
                        <img src="/images/logo_tbs.png" />
                    </div>
                    <CardTitle className="text-primary py-4 font-medium">Forgot Password</CardTitle>
                    <CardDescription>That’s ok, just enter the email address you’ve used to register with us and we’ll send you a reset link!</CardDescription>
                </CardHeader>
                <form onSubmit={onSubmitForgotPassword}>
                    <CardContent>
                        <div className="w-full items-center gap-5">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Email" onChange={onChange} value={email} />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <button className="w-full py-3.5 px-6 rounded-full bg-primary text-white font-normal">
                            Continue
                        </button>
                        <button className="flex gap-5 place-content-center w-full py-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M10.2418 5.93799L4.17175 12.008L10.2418 18.078" stroke="#064B82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.1718 12.0078H4.3418" stroke="#064B82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-primary font-medium">Back to Sign In</p>
                        </button>
                    </CardFooter>
                </form>
            </div>
        </Card >
    )
}
{/* <div className="bg-white w-[556px] rounded-lg h-[642px] flex items-center justify-center">
        <div>
        <div className="flex justify-center mb-10">
        <img src="/images/logo_tbs.png" />
        </div>
        <div className="">
        <h1 className="text-primary font-bold text-2xl mb-3.5">Forgot Password</h1>
        <p className="font-normal text-gray-500 text-sm">That’s ok, just enter the email address you’ve used to register<br/>with us and we’ll send you a reset link!</p>
        </div>
        <div className="my-6">
        <div>
        <label for="email" class="block font-medium text-gray-900 mb-5">Email</label>
        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email address" required/>
        </div>
                <div className="mt-6">
                    <button className="bg-primary w-full py-3.5 px-6 text-white font-xs font-normal rounded-lg">Continue</button>
                    </div>
                    </div>
                    <div className="flex gap-5 place-content-center w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M10.2418 5.93799L4.17175 12.008L10.2418 18.078" stroke="#064B82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.1718 12.0078H4.3418" stroke="#064B82" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <button>Back to Sign In</button>
                    </div>
                    </div>
                </div> */}



{/* <div className="w-full grid grid-cols-2 justify-between gap-6 items-center"> */ }
{/* <div className="space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Password" type={showPassword ? "text" : "password"} className="p-3.5" />
                        {
                            showPassword ?
                                <AiOutlineEye
                                    onClick={() => setShowPassword(false)}
                                    className="absolute bottom-[427px] right-[760px] cursor-pointer colour-gray-500"
                                    size={24}
                                    color="grey"
                                />
                                :
                                <AiOutlineEyeInvisible
                                    onClick={() => setShowPassword(true)}
                                    className="absolute bottom-[427px] right-[760px] cursor-pointer"
                                    size={24}
                                    color="grey"
                                />
                        }
                    </div> */}
                    // </div >
{/* <div className="flex justify-between items-center w-full pt-6">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" className="bg-white" />
                        <Label htmlFor="terms" className="text-sm font-medium">Remember Me</Label>
                    </div>
                    <Link>
                        <p className="text-sm font-medium text-primary">Forgot Password</p>
                    </Link>
                </div> */}