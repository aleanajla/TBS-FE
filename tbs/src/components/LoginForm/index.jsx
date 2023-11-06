import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

export default function LoginForm() {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="bg-white py-[53px] px-[51px] rounded-lg">
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
                </form>

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
            </div>
        </>
    );
}
