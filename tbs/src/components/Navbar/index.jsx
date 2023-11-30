import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

import Profile from "src/pages/Profile";
import { useSelector } from "react-redux";
// import logo_tbs from '../../../public/images/logo_tbs.png'

export default function Navbar() {
  const {username} = useSelector((state) => state.Auth.user)
  const navigate = useNavigate()

  const logout = () => {
      localStorage.removeItem('token')
      navigate('/')
  }

  const goToProfile = () => {
    navigate('/profile')
  }

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
          <div className="flex">
            <ul className="flex flex-row gap-7">
              <li className="font-medium">
                <a>My Booking</a>
              </li>
              <li className="font-medium">
                <a>Help Center</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-row gap-5 items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
            >
              <path
                d="M14.0892 7.07601C14.0892 5.66152 13.5273 4.30497 12.5271 3.30477C11.5269 2.30458 10.1703 1.74268 8.75586 1.74268C7.34137 1.74268 5.98482 2.30458 4.98462 3.30477C3.98443 4.30497 3.42253 5.66152 3.42253 7.07601C3.42253 13.2982 0.755859 15.076 0.755859 15.076H16.7559C16.7559 15.076 14.0892 13.2982 14.0892 7.07601Z"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.2943 18.6316C10.138 18.901 9.91372 19.1246 9.64384 19.2801C9.37396 19.4355 9.06798 19.5173 8.75653 19.5173C8.44508 19.5173 8.1391 19.4355 7.86922 19.2801C7.59933 19.1246 7.37503 18.901 7.21875 18.6316"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="w-[150px] rounded-full border border-[#212121] px-4 justify-between py-4"
            >
              <Button variant="outline" className="py-4">
                <p>{username}</p>
                <img src="/images/chevronDown.svg" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[150px] text-black">
              <DropdownMenuItem className="text-black">
                <span><button onClick={goToProfile}>Profile</button></span>
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