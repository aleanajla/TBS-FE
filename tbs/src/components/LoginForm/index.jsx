import { useState } from "react";
import { Link } from "react-router-dom";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select"
import { Checkbox } from "../ui/checkbox";
import { LoginAction } from "src/config/redux/auth/action";
import { useDispatch } from "react-redux";
import { set } from "date-fns";

export default function LoginForm() {
  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    Username: "",
    Password: ""
  })

  const onSubmitLogin = () => {
    dispatch(LoginAction({Username: loginData.Username, Password: loginData.Password}))
  }

  const onChange = (Event) => {
    // Event.target.value
    setLoginData({Username: Event.target.value, Password: Event.target.value})
  }

  return (
    <Card className="w-[550px] min-h-1/2 py-3 px-[36px] rounded-lg">
      <CardHeader>
        <div className="flex justify-center mt-7">
          <img src="/images/logo_tbs.png" />
        </div>
        <CardTitle className="text-primary py-4 font-bold">Sign In</CardTitle>
        <CardDescription>Welcome back Please login to your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-rows-2 w-full items-center gap-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" onChange = {onChange} value={loginData.Username}/>
            </div>
            {/* <div className="w-full grid grid-cols-2 justify-between gap-6 items-center"> */}
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Password" type={showPassword ? "text" : "password"} onChange = {onChange} value={loginData.Password} className="p-3.5" />
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
            </div>
          </div>
          <div className="flex justify-between items-center w-full pt-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="bg-white" />
              <Label htmlFor="terms" className="text-sm font-medium">Remember Me</Label>
            </div>
            <Link to={"/forgotPassword"}>
              <p className="text-sm font-medium text-primary">Forgot Password</p>
            </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center w-full py-10">
        <Link to={"/homepage"} className="w-full">
          <button className="w-full py-3.5 px-6 rounded-full bg-primary text-white font-normal" onSubmit={onSubmitLogin}>
            Login
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
}

{/* <div className="bg-white py-[53px] px-[51px] rounded-lg">
        <div className="flex justify-center mt-7">
            <img src="/images/logo_tbs.png" />
        </div>
        <div className="">
            <h1 className="text-primary font-bold text-2xl mb-3.5">Sign In</h1>
            <p className="font-normal text-gray-500 text-sm">Welcome back Please login to your account.</p>
        </div>
        <form action="">
            <div className="my-6">
                <div>
                    <label for="username" class="block font-medium text-gray-900 mb-5">Username</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[453px] p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
                </div>
                <div className="mt-6 relative items-center">
                    <label for="confirm_password" class="block font-medium text-gray-900 mb-5">Password</label>
                    <div className="flex items-center">
                        <input type={show ? "text" : "password"} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[453px] p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                        {
                            show ?
                                <AiOutlineEye
                                    onClick={() => setShow(false)}
                                    className="absolute right-5 cursor-pointer"
                                    size={24}
                                />
                                :
                                <AiOutlineEyeInvisible
                                    onClick={() => setShow(true)}
                                    className="absolute right-5 cursor-pointer"
                                    size={24}
                                />

                        }

                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm font-medium">Remember Me</p>
                </div>
                <Link className="text-primary font-medium text-sm">Forgot Password?</Link>
            </div>
            <div className="mt-6">
                <button className="bg-primary w-[453px] py-3.5 px-6 text-white font-xs font-normal rounded-full">Login</button>
            </div>
        </form> */}

{/* <div className="mb-6">
  <p className="font-bold text-2xl text-primary mb-3">Sign In</p>
  <p className="text-gray-400">
    Welcome back Please login to your account.
  </p>
</div>
<div>
  <form>
    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="username"
      >
        Username
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
      />
    </div>
    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="username"
      >
        Password
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Password"
      />
    </div>
    <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-2">
        <input type="checkbox" className="checkbox" />
        <p>Remember Me</p>
      </div>
      <Link className="text-primary font-bold">Forgot Password?</Link>
    </div>
    <button className="w-full rounded-full bg-primary font-bold text-white p-2 mt-5">
      Login
    </button>
  </form>
</div> */}
{/* </div> */ }