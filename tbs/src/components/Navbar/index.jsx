import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { useSelector } from "react-redux";

export default function Navbar() {
  const {username} = useSelector((state) => state.Auth.user)
  const navigate = useNavigate()
  const [userName, setUsername] = useState('')

  const logout = () => {
      localStorage.removeItem('token')
      navigate('/')
  }

  const goToProfile = () => {
    navigate('/profile')
  }

  const goToChangePassword = () => {
    navigate('/changePassword')
  }

  useEffect(()=> {
    console.log(username, "username")
    if(username){
      setUsername(username)
    }
  }, [username])

  return (
    <>
      <div className="bg-white h-10px text-black pl-10 pr-10 pt-5 pb-5 flex flex-row items-center justify-between w-full top-0 border-b-2 border-grey-400 shadow-md">
        {/* Left Side */}
        <div className="flex flex-row items-center gap-9">
          <Link to={"/homepage"}>
            <div className="flex w-10px">
              <img src="/images/logo_tbs.png" />
            </div>
          </Link>
        </div>
        {/* Right Side */}
        <div className="flex flex-row gap-5 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="w-[150px] rounded-full border border-[#212121] px-4 justify-between py-4"
            >
              <Button variant="outline" className="py-4">
                <p>{userName}</p>
                <img src="/images/chevronDown.svg" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[150px] text-black">
              <DropdownMenuItem className="text-black">
                <span><button onClick={goToProfile}>Profile</button></span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-black">
                <span><button onClick={goToChangePassword}>Change Password</button></span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span><button onClick={logout}>Logout</button></span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}