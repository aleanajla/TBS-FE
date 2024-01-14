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