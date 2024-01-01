import * as React from "react";

import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import * as action from "../../config/redux/auth/action";
import { useDispatch, useSelector } from "react-redux";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState("");

  // Handler for the change event of the dropdown
  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  const [registerData, setRegisterData] = useState({
    Username: "",
    Password: "",
    Confirm_Password: "",
    PMKU: "",
    Name: "",
    Phone_Number: "",
    Email: "",
    // Role_ID: "",
  });

  const onSubmitRegister = async (event) => {
    event.preventDefault();
    console.log(selectedValue);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/api/users/register",
        data: {
          Username: registerData.Username,
          Password: registerData.Password,
          Confirm_Password: registerData.Confirm_Password,
          PMKU: registerData.PMKU,
          Name: registerData.Name,
          Phone_Number: registerData.Phone_Number,
          Email: registerData.Email,
          Role_ID: selectedValue,
        },
      });
      console.log(response);
      // const result = await dispatch(
      //   action.LoginAction({
      //     Username: registerData.Username,
      //     Password: registerData.Password,
      //   })
      // );

      // if (result.error) {
      //   setError(result.message);
      // } else {
      //   navigate("/homepage");
      // }
      navigate("/");
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    }
  };

  const onChange = useCallback((e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  });

  return (
    <Card className="w-[827px] px-[36px] rounded-lg">
      <CardHeader>
        <div className="flex justify-center mt-7">
          <img src="/images/logo_tbs.png" />
        </div>
        <CardTitle className="text-primary font-bold">Sign Up</CardTitle>
        <div className="text-red-500">{error}</div>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmitRegister}>
          <div className="grid grid-rows-4 w-full items-center gap-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="Username"
                placeholder="Username"
                onChange={onChange}
                value={registerData.Username}
                required
              />
            </div>
            <div className="flex flex-col gap-4 ">
              <Label htmlFor="Role_ID">User Category</Label>
              <select
                id="userCategory"
                name="Role_ID"
                value={selectedValue}
                onChange={handleChange}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select User Category</option>
                <option value="1">Freight Forwarder</option>
                <option value="2">Trucking Company</option>
              </select>
            </div>
            <div className="w-full grid grid-cols-2 justify-between gap-6 items-center">
              <div className="space-y-1.5">
                <div className="space-y-1.5">
                  <Label htmlFor="pkmu">Name</Label>
                  <Input
                    id="Name"
                    name="Name"
                    placeholder="Number PKMU"
                    className="p-3.5"
                    onChange={onChange}
                    value={registerData.Name}
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="pkmu">Number PKMU</Label>
                <Input
                  id="pkmu"
                  name="PMKU"
                  placeholder="Number PKMU"
                  className="p-3.5"
                  onChange={onChange}
                  value={registerData.PMKU}
                  required
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-2 justify-between gap-8 items-center">
              <div className="space-y-1.5">
                <Label htmlFor="userCategory">Email</Label>
                <Input
                  id="email"
                  name="Email"
                  placeholder="Email"
                  className="p-3.5"
                  onChange={onChange}
                  value={registerData.Email}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="Phone_Number"
                  placeholder="Phone Number"
                  className="p-3.5"
                  onChange={onChange}
                  value={registerData.Phone_Number}
                  required
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-2 justify-between gap-6 items-center">
              <div className="space-y-1.5 relative">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="Password"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className="p-3.5"
                    onChange={onChange}
                    value={registerData.Password}
                    required
                  />
                  {showPassword ? (
                    <AiOutlineEye
                      onClick={() => setShowPassword(false)}
                      className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer colour-gray-500"
                      size={24}
                      color="grey"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => setShowPassword(true)}
                      className="absolute -translate-y-1/2 right-4 top-1/2 cursor-pointer"
                      size={24}
                      color="grey"
                    />
                  )}
                </div>
              </div>
              <div className="space-y-1.5 relative">
                <Label htmlFor="confirmPasswprd">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="Confirm_Password"
                    placeholder="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    className="p-3.5"
                    onChange={onChange}
                    value={registerData.Confirm_Password}
                    required
                  />
                  {showConfirmPassword ? (
                    <AiOutlineEye
                      onClick={() => setShowConfirmPassword(false)}
                      className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer colour-gray-500"
                      size={24}
                      color="grey"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => setShowConfirmPassword(true)}
                      className="absolute -translate-y-1/2 right-4 top-1/2 cursor-pointer"
                      size={24}
                      color="grey"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center py-8">
            <div className="flex flex-row gap-2">
              <p>Already have Account?</p>
              <Link to={"/"} className="text-primary font-medium">
                Login Here
              </Link>
            </div>
            <button
              className="w-[347px] py-3.5 px-6 rounded-full bg-primary text-white font-xs font-normal"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}