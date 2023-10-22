import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <>
      <div className="bg-white p-10 w-[800px] max-w-3xl rounded-md">
        <div className="flex justify-center mt-7">
          <img src="/images/logo_tbs.png" />
        </div>
        <div className="mb-6">
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
        </div>
      </div>
    </>
  );
}
