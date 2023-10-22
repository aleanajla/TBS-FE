import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <>
      <div className="bg-white p-10 w-[800px] max-w-3xl rounded-md">
        <div className="flex justify-center mt-7">
          <img src="/images/logo_tbs.png" />
        </div>
        <div className="mb-6">
          <p className="font-bold text-2xl text-primary mb-3">Sign Up</p>
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
            <div class="flex flex-row mb-4 justify-between gap-3">
              <div className="w-full">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  User Category
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <div className="w-full">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Number PMKU
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="flex flex-row mb-4 justify-between gap-3">
              <div className="w-full">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <div className="w-full">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Phone Number
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="flex flex-row mb-4 justify-between gap-3">
              <div className="w-full">
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
              <div className="w-full">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Confirm Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center mt-3">
              <div className="flex flex-row gap-2">
                <p>Already have Account?</p>
                <Link className="text-primary">Login Here</Link>
              </div>
            <button className="w-[347px] rounded-full bg-primary font-bold text-white p-2">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
