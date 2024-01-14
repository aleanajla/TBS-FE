import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
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
import { Checkbox } from "../ui/checkbox";
import * as action from "../../config/redux/auth/action";
import { useDispatch} from "react-redux";



export default function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loginData, setLoginData] = useState({
    Username: "",
    Password: ""
  })

  const onSubmitLogin = async (event) => {
    event.preventDefault();
    const result = await dispatch(action.LoginAction({ Username: loginData.Username, Password: loginData.Password }))

    // panggil auth untuk navigate
    // isloggedIn true routing ke home kl false stay at login
    if (result.error) {
      setError(result.message)
    }
    else {
      navigate('/homepage')
    }

  }

  const onChange = useCallback((e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  });

  return (
    <Card className="w-[550px] min-h-1/2 py-3 px-[36px] rounded-lg">
      <CardHeader>
        <div className="flex justify-center mt-7">
          <img src="/images/logo_tbs.png" />
        </div>
        <CardTitle className="text-primary py-4 font-bold">Sign In</CardTitle>
        <CardDescription>Welcome back Please login to your account.</CardDescription>
        {error.length > 0 && <div className="text-red-500">{error}</div>}
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmitLogin}>
          <div className="grid grid-rows-2 w-full items-center gap-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="Username" placeholder="Username" onChange={onChange} value={loginData.Username} />
            </div>
            <div className="space-y-1.5 relative">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input id="password" placeholder="Password" type={showPassword ? "text" : "password"} name="Password" onChange={onChange} value={loginData.Password} className="p-3.5" />
                {
                  showPassword ?
                    <AiOutlineEye
                      onClick={() => setShowPassword(false)}
                      className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer colour-gray-500"
                      size={24}
                      color="grey"
                    />
                    :
                    <AiOutlineEyeInvisible
                      onClick={() => setShowPassword(true)}
                      className="absolute -translate-y-1/2 right-4 top-1/2 cursor-pointer"
                      size={24}
                      color="grey"
                    />
                }
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex justify-between items-center w-full pt-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="bg-white" />
                <Label htmlFor="terms" className="text-sm font-medium">Remember Me</Label>
              </div>
              <Link to={"/forgotPassword"}>
                <p className="text-sm font-medium text-primary">Forgot Password</p>
              </Link>
            </div>
          </div>
          <CardFooter className="flex flex-col pt-10 pb-6 items-center justify-center w-full gap-2">
              <div className="flex flex-row gap-2">
                <p>Didn't have account?</p>
                <Link to={"/signUp"} className="text-primary font-medium">
                  Register Here
                </Link>
              </div>
            <button type="submit" className="w-full py-3.5 px-6 rounded-full bg-primary text-white font-normal">
              Login
            </button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}