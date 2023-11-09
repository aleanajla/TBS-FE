
import * as React from "react"

import { Button } from "src/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card"
import { Input } from "src/components/ui/input"
import { Label } from "src/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select"
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"


export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <Card className="w-[827px] py-3 px-[36px] rounded-lg">
      <CardHeader>
        <div className="flex justify-center mt-7">
          <img src="/images/logo_tbs.png" />
        </div>
        <CardTitle className="text-primary py-4 font-bold">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-rows-4 w-full items-center gap-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" />
            </div>
            <div className="w-full grid grid-cols-2 justify-between gap-6 items-center">
              <div className="space-y-1.5">
                <Label htmlFor="userCategory">User Category</Label>
                <Select>
                  <SelectTrigger id="userCategory" className="text-[#7D7D7D] p-3.5 py-6">
                    <SelectValue placeholder="User Category" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Freight Forwarder</SelectItem>
                    <SelectItem value="sveltekit">Trucking Company</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="pkmu">Number PKMU</Label>
                <Input id="pkmu" placeholder="Number PKMU" className="p-3.5" />
              </div>
            </div>
            <div className="w-full grid grid-cols-2 justify-between gap-8 items-center">
              <div className="space-y-1.5">
                <Label htmlFor="userCategory">Email</Label>
                <Input id="email" placeholder="Email" className="p-3.5" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" placeholder="Phone Number" className="p-3.5" />
              </div>
            </div>
            <div className="w-full grid grid-cols-2 justify-between gap-6 items-center">
              <div className="space-y-1.5">
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
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="confirmPasswprd">Confirm Password</Label>
                <Input id="confirmPassword" placeholder="Confirm Password" type={showConfirmPassword ? "text" : "password"} className="p-3.5" />
                {
                  showConfirmPassword ?
                    <AiOutlineEye
                      onClick={() => setShowConfirmPassword(false)}
                      className="absolute bottom-[427px] right-[400px] cursor-pointer"
                      size={24}
                      color="grey"
                    />
                    :
                    <AiOutlineEyeInvisible
                      onClick={() => setShowConfirmPassword(true)}
                      className="absolute bottom-[427px] right-[400px] cursor-pointer"
                      size={24}
                      color="grey"
                    />
                }
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between py-8">
        {/* <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button> */}
        <div className="flex flex-row gap-2">
          <p>Already have Account?</p>
          <Link to={"/login"} className="text-primary font-medium">Login Here</Link>
        </div>
        <Link to={"/login"}>
          <button className="w-[347px] py-3.5 px-6 rounded-full bg-primary text-white font-xs font-normal">
            Sign Up
          </button>
        </Link>

      </CardFooter>
    </Card>
  )
}

// export default function SignUpForm() {
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   return (
//     <>
//       <div className="bg-white w-[827px] py-[53px] px-[51px] rounded-lg">
//         <div className="flex justify-center mt-7">
//           <img src="/images/logo_tbs.png" />
//         </div>
//         <h1 className="text-primary font-bold text-2xl my-[15px]">Sign Up</h1>
//         <form action="">
//           <div>
//             <label
//               for="username"
//               class="block font-medium text-gray-900 mb-5 text-sm">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Username"
//               required />
//           </div>
//           <div class="flex flex-row mb-4 justify-between gap-3">
//             <div className="w-full">
//               <label
//                 class="block font-medium text-gray-900 my-5 text-sm"
//                 for="username"
//               >
//                 User Category
//               </label>
//               <input
//                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 id="userCategory"
//                 type="text"
//                 placeholder="User Category"
//               />
//             </div>
//             <div className="w-full">
//               <label
//                 class="block font-medium text-gray-900 my-5 text-sm"
//                 for="username"
//               >
//                 Number PMKU
//               </label>
//               <input
//                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 id="NumberPKWU"
//                 type="text"
//                 placeholder="Number PKWU"
//               />
//             </div>
//           </div>
//           <div class="flex flex-row mb-4 justify-between gap-3">
//             <div className="w-full">
//               <label
//                 class="block font-medium text-gray-900 my-2.5 text-sm"
//                 for="email"
//               >
//                 Email
//               </label>
//               <input
//                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 id="NumberPKWU"
//                 type="text"
//                 placeholder="Email"
//               />
//             </div>
//             <div className="w-full">
//               <label
//                 class="block font-medium text-gray-900 my-2.5 text-sm"
//                 for="phoneNumber"
//               >
//                 Phone Number
//               </label>
//               <input
//                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 id="phoneNumber"
//                 type="text"
//                 placeholder="Phone Number"
//               />
//             </div>
//           </div>
//           <div class="flex flex-row mb-4 justify-between gap-3">
//             <div className="w-full">
//               <label
//                 class="block font-medium text-gray-900 my-2.5 text-sm"
//                 for="password"
//               >
//                 Password
//               </label>
//               <div className="flex items-center">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   id="Password"
//                   placeholder="Password"
//                   required
//                 />
//                 {
//                   showPassword ?
//                     <AiOutlineEye
//                       onClick={() => setShowPassword(false)}
//                       className="absolute right-[550px] cursor-pointer colour-gray-500"
//                       size={24}
//                       color="grey"
//                     />
//                     :
//                     <AiOutlineEyeInvisible
//                       onClick={() => setShowPassword(true)}
//                       className="absolute right-[550px] cursor-pointer"
//                       size={24}
//                       color="grey"
//                     />
//                 }

//               </div>
//             </div>
//             <div className="w-full">
//               <label
//                 class="block font-medium text-gray-900 my-2.5 text-sm"
//                 for="confirmPassword"
//               >
//                 Confirm Password
//               </label>
//               <div className="flex items-center">
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   id="confirmPassword"
//                   placeholder="Confrim Password"
//                 />
//                 {
//                   showConfirmPassword ?
//                     <AiOutlineEye
//                       onClick={() => setShowConfirmPassword(false)}
//                       className="absolute right-[180px] cursor-pointer colour-gray-500"
//                       size={24}
//                       color="grey"
//                     />
//                     :
//                     <AiOutlineEyeInvisible
//                       onClick={() => setShowConfirmPassword(true)}
//                       className="absolute right-[180px] cursor-pointer"
//                       size={24}
//                       color="grey"
//                     />
//                 }
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-row justify-between items-center mt-10">
//             <div className="flex flex-row gap-2">
//               <p>Already have Account?</p>
//               <Link className="text-primary">Login Here</Link>
//             </div>
//             <button className="w-[347px] py-3.5 px-6 rounded-full bg-primary font-bold text-white font-xs font-normal">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }