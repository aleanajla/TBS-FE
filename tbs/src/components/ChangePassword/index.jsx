import { Input } from "src/components/ui/input"
import { Label } from "src/components/ui/label"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from "react"

export function ChangePasswordComponent() {
    const [showPassword, setShowPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-col gap-10">
            <div className="border px-10 py-10 rounded-lg">
                <div className="border-b flex justify-between items-center">
                    <div className="flex items-center gap-4 pb-5">
                        <p className="text-xl font-medium">Change Password</p>
                    </div>
                </div>
                <div className="py-10 border-b">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="flex flex-col gap-4">
                            <div className="space-y-1.5 relative">
                                <Label className="text-md">Old Password</Label>
                                <div className="relative">
                                    <Input
                                        className="py-6 text-md"
                                        id="password"
                                        placeholder="Password"
                                        type={showPassword ? "text" : "password"}
                                        name="Password"
                                        // onChange={onChange} 
                                        value="Alea123"
                                    />
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
                        <div className="space-y-1.5 relative">
                            <Label className="text-md">New Password</Label>
                            <div className="relative">
                                <Input
                                    className="py-6 text-md"
                                    id="newPassword"
                                    placeholder="newPassword"
                                    type={showNewPassword ? "text" : "password"}
                                    name="newPassword"
                                    // onChange={onChange} 
                                    value="Alea123"
                                />
                                {
                                    showNewPassword ?
                                        <AiOutlineEye
                                            onClick={() => setShowNewPassword(false)}
                                            className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer colour-gray-500"
                                            size={24}
                                            color="grey"
                                        />
                                        :
                                        <AiOutlineEyeInvisible
                                            onClick={() => setShowNewPassword(true)}
                                            className="absolute -translate-y-1/2 right-4 top-1/2 cursor-pointer"
                                            size={24}
                                            color="grey"
                                        />
                                }
                            </div>
                        </div>
                        <div className="space-y-1.5 relative">
                            <Label className="text-md">Confirm Password</Label>
                            <div className="relative">
                                <Input
                                    className="py-6 text-md"
                                    id="confirmPassword"
                                    placeholder="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confrimPassword"
                                    // onChange={onChange} 
                                    value="Alea123"
                                />
                                {
                                    showConfirmPassword ?
                                        <AiOutlineEye
                                            onClick={() => setShowConfirmPassword(false)}
                                            className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer colour-gray-500"
                                            size={24}
                                            color="grey"
                                        />
                                        :
                                        <AiOutlineEyeInvisible
                                            onClick={() => setShowConfirmPassword(true)}
                                            className="absolute -translate-y-1/2 right-4 top-1/2 cursor-pointer"
                                            size={24}
                                            color="grey"
                                        />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse mt-6">
                    <button
                        onClick={() => setOpen(true)}
                        className="py-4 bg-primary px-8 rounded-lg shadow-sm"
                    >
                        <p className="text-white">Save</p>
                    </button>
                </div>
                {
                    open ?
                        <div className="absolute z-[999] inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center bg-black">
                            <div className=" bg-white w-[947px] max-h-[720px] rounded-xl py-[31px] px-[47px] flex flex-col gap-4">
                                <div className="flex flex-row-reverse">
                                    <button
                                        className="btn"
                                        onClick={() => setOpen(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                            <path d="M18 1.5L1 18.5" stroke="black" stroke-width="1.61905" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1 1.5L18 18.5" stroke="black" stroke-width="1.61905" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <h1 className="text-lg font-medium">CONFIRMATION CHANGE PASSWORD</h1>
                                <p className="text-[#7D7D7D]">Are you sure to change your password?</p>
                                <div className="flex flex-row-reverse gap-3">
                                    <button
                                        className="px-8 py-4 items-center justify-center bg-primary text-sm rounded-full text-white"
                                    >
                                        Yes, Change It
                                    </button>
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="px-8 py-4 items-center justify-center text-sm rounded-full border border-primary text-primary"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                        :
                        ""
                }
            </div>

        </div>
    )
}
