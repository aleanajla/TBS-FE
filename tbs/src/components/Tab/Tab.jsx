import { Button } from "src/components/ui/button"
import CardBooking from "../CardBooking/cardBooking"
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs"
import FilterSearch from "../FilterSearch/index"
import SearchBar from "../SearchBar"
import CardRequest from "../CardRequest"
import CardOnGoing from "../CardOnGoing"
import CardComplete from "../CardComplete"
import CardCancelled from "../CardCancelled"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"

export function Tab() {
  const {Customer_ID} = useSelector((state)=> state.Auth.user)
  const [dataRequest, setDataRequest] = useState([])
  const [dataCancel, setDataCancel] = useState([])

  const getDataRequest = async() => {
    try{
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/api/users/view/requestTP/${Customer_ID}`
      })

      console.log(response.data);
      setDataRequest(()=>response.data)
    }
    catch(error){
      console.log(error);
    }
  }

  const getDataCancel = async() => {
    try{
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/api/users/view/cancelTP/${Customer_ID}`
      })
      console.log(response.data);
      setDataCancel(()=>response.data)
    }
    catch(error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getDataRequest();
    getDataCancel();
  },[])


  return (
    <Tabs defaultValue="request" className="bg-white">
      <TabsList className="grid w-full grid-cols-4 gap-8">
        <TabsTrigger value="request" className="data-[state=active]:bg-[#FFA621] data-[state=active]:text-white">
          <div className="flex gap-4 items-center">
            <div className="rounded-full bg-[#FFF8DD] p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.5 15.5013C21.78 15.5013 22 15.7213 22 16.0013V17.0013C22 18.6613 20.66 20.0013 19 20.0013C19 18.3513 17.65 17.0013 16 17.0013C14.35 17.0013 13 18.3513 13 20.0013H11C11 18.3513 9.65 17.0013 8 17.0013C6.35 17.0013 5 18.3513 5 20.0013C3.34 20.0013 2 18.6613 2 17.0013V15.0013C2 14.4513 2.45 14.0013 3 14.0013H12.5C13.88 14.0013 15 12.8813 15 11.5013V6.00134C15 5.45134 15.45 5.00134 16 5.00134H16.84C17.56 5.00134 18.22 5.39134 18.58 6.01134L19.22 7.13134C19.31 7.29134 19.19 7.50134 19 7.50134C17.62 7.50134 16.5 8.62134 16.5 10.0013V13.0013C16.5 14.3813 17.62 15.5013 19 15.5013H21.5Z" fill="#FFA621" />
                <path d="M8 22.0013C9.10457 22.0013 10 21.1059 10 20.0013C10 18.8968 9.10457 18.0013 8 18.0013C6.89543 18.0013 6 18.8968 6 20.0013C6 21.1059 6.89543 22.0013 8 22.0013Z" fill="#FFA621" />
                <path d="M16 22.0013C17.1046 22.0013 18 21.1059 18 20.0013C18 18.8968 17.1046 18.0013 16 18.0013C14.8954 18.0013 14 18.8968 14 20.0013C14 21.1059 14.8954 22.0013 16 22.0013Z" fill="#FFA621" />
                <path d="M22 12.5313V14.0013H19C18.45 14.0013 18 13.5513 18 13.0013V10.0013C18 9.45134 18.45 9.00134 19 9.00134H20.29L21.74 11.5413C21.91 11.8413 22 12.1813 22 12.5313Z" fill="#FFA621" />
                <path d="M13.08 2.00134H5.69C3.9 2.00134 2.4 3.28134 2.07 4.98134H6.44C6.82 4.98134 7.12 5.29134 7.12 5.67134C7.12 6.05134 6.82 6.35134 6.44 6.35134H2V7.73134H4.6C4.98 7.73134 5.29 8.04134 5.29 8.42134C5.29 8.80134 4.98 9.10134 4.6 9.10134H2V10.4813H2.77C3.15 10.4813 3.46 10.7913 3.46 11.1713C3.46 11.5513 3.15 11.8513 2.77 11.8513H2V12.0813C2 12.6313 2.45 13.0813 3 13.0813H12.15C13.17 13.0813 14 12.2513 14 11.2313V2.92134C14 2.41134 13.59 2.00134 13.08 2.00134Z" fill="#FFA621" />
                <path d="M2.07 4.98132H1.92H0.94C0.56 4.98132 0.25 5.29132 0.25 5.67132C0.25 6.05132 0.56 6.35132 0.94 6.35132H1.85H2V5.69132C2 5.45132 2.03 5.21132 2.07 4.98132Z" fill="#FFA621" />
                <path d="M1.85 7.73132H0.94C0.56 7.73132 0.25 8.04132 0.25 8.42132C0.25 8.80132 0.56 9.10132 0.94 9.10132H1.85H2V7.73132H1.85Z" fill="#FFA621" />
                <path d="M1.85 10.4813H0.94C0.56 10.4813 0.25 10.7913 0.25 11.1713C0.25 11.5513 0.56 11.8513 0.94 11.8513H1.85H2V10.4813H1.85Z" fill="#FFA621" />
              </svg>
            </div>
            <div className="flex flex-col text-left gap-1">
              <p className="font-semibold text-[16px]">25</p>
              <p>Request</p>
            </div>
          </div>
        </TabsTrigger>
        <TabsTrigger value="availableBoookingSlot" className="data-[state=active]:bg-[#064B82] data-[state=active]:text-white">
          <div className="flex gap-4 items-center">
            <div className="rounded-full bg-[#CDF1FF] p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M21.7349 15.6342C22.0149 15.6342 22.2349 15.8542 22.2349 16.1342V17.1342C22.2349 18.7942 20.8949 20.1342 19.2349 20.1342C19.2349 18.4842 17.8849 17.1342 16.2349 17.1342C14.5849 17.1342 13.2349 18.4842 13.2349 20.1342H11.2349C11.2349 18.4842 9.88486 17.1342 8.23486 17.1342C6.58486 17.1342 5.23486 18.4842 5.23486 20.1342C3.57486 20.1342 2.23486 18.7942 2.23486 17.1342V15.1342C2.23486 14.5842 2.68486 14.1342 3.23486 14.1342H12.7349C14.1149 14.1342 15.2349 13.0142 15.2349 11.6342V6.13416C15.2349 5.58416 15.6849 5.13416 16.2349 5.13416H17.0749C17.7949 5.13416 18.4549 5.52416 18.8149 6.14416L19.4549 7.26416C19.5449 7.42416 19.4249 7.63416 19.2349 7.63416C17.8549 7.63416 16.7349 8.75416 16.7349 10.1342V13.1342C16.7349 14.5142 17.8549 15.6342 19.2349 15.6342H21.7349Z" fill="#064B82" />
                <path d="M8.23486 22.1342C9.33943 22.1342 10.2349 21.2387 10.2349 20.1342C10.2349 19.0296 9.33943 18.1342 8.23486 18.1342C7.13029 18.1342 6.23486 19.0296 6.23486 20.1342C6.23486 21.2387 7.13029 22.1342 8.23486 22.1342Z" fill="#064B82" />
                <path d="M16.2349 22.1342C17.3394 22.1342 18.2349 21.2387 18.2349 20.1342C18.2349 19.0296 17.3394 18.1342 16.2349 18.1342C15.1303 18.1342 14.2349 19.0296 14.2349 20.1342C14.2349 21.2387 15.1303 22.1342 16.2349 22.1342Z" fill="#064B82" />
                <path d="M22.2349 12.6642V14.1342H19.2349C18.6849 14.1342 18.2349 13.6842 18.2349 13.1342V10.1342C18.2349 9.58416 18.6849 9.13416 19.2349 9.13416H20.5249L21.9749 11.6742C22.1449 11.9742 22.2349 12.3142 22.2349 12.6642Z" fill="#064B82" />
                <path d="M13.3149 2.13416H5.92486C3.88486 2.13416 2.23486 3.78416 2.23486 5.82416V12.2142C2.23486 12.7642 2.68486 13.2142 3.23486 13.2142H12.3849C13.4049 13.2142 14.2349 12.3842 14.2349 11.3642V3.05416C14.2349 2.54416 13.8249 2.13416 13.3149 2.13416ZM9.61486 8.04416C9.61486 8.30416 9.47486 8.55416 9.25486 8.68416L8.00486 9.43416C7.87486 9.51416 7.74486 9.54416 7.61486 9.54416C7.36486 9.54416 7.11486 9.41416 6.97486 9.18416C6.75486 8.82416 6.87486 8.36416 7.22486 8.15416L8.11486 7.62416V6.54416C8.11486 6.13416 8.45486 5.79416 8.86486 5.79416C9.27486 5.79416 9.61486 6.13416 9.61486 6.54416V8.04416Z" fill="#064B82" />
              </svg>
            </div>
            <div className="flex flex-col text-left gap-1">
              <p className="font-semibold text-[16px]">25</p>
              <p>Available Booking Slot</p>
            </div>
          </div>
        </TabsTrigger>
        <TabsTrigger value="completed" className="data-[state=active]:bg-[#0F9B71] data-[state=active]:text-white">
          <div className="flex gap-4 items-center">
            <div className="rounded-full bg-[#E8FFF3] p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.5 15.5013C21.78 15.5013 22 15.7213 22 16.0013V17.0013C22 18.6613 20.66 20.0013 19 20.0013C19 18.3513 17.65 17.0013 16 17.0013C14.35 17.0013 13 18.3513 13 20.0013H11C11 18.3513 9.65 17.0013 8 17.0013C6.35 17.0013 5 18.3513 5 20.0013C3.34 20.0013 2 18.6613 2 17.0013V15.0013C2 14.4513 2.45 14.0013 3 14.0013H12.5C13.88 14.0013 15 12.8813 15 11.5013V6.00134C15 5.45134 15.45 5.00134 16 5.00134H16.84C17.56 5.00134 18.22 5.39134 18.58 6.01134L19.22 7.13134C19.31 7.29134 19.19 7.50134 19 7.50134C17.62 7.50134 16.5 8.62134 16.5 10.0013V13.0013C16.5 14.3813 17.62 15.5013 19 15.5013H21.5Z" fill="#0F9B71" />
                <path d="M8 22.0013C9.10457 22.0013 10 21.1059 10 20.0013C10 18.8968 9.10457 18.0013 8 18.0013C6.89543 18.0013 6 18.8968 6 20.0013C6 21.1059 6.89543 22.0013 8 22.0013Z" fill="#0F9B71" />
                <path d="M16 22.0013C17.1046 22.0013 18 21.1059 18 20.0013C18 18.8968 17.1046 18.0013 16 18.0013C14.8954 18.0013 14 18.8968 14 20.0013C14 21.1059 14.8954 22.0013 16 22.0013Z" fill="#0F9B71" />
                <path d="M22 12.5313V14.0013H19C18.45 14.0013 18 13.5513 18 13.0013V10.0013C18 9.45134 18.45 9.00134 19 9.00134H20.29L21.74 11.5413C21.91 11.8413 22 12.1813 22 12.5313Z" fill="#0F9B71" />
                <path d="M13.08 2.00134H5.69C3.65 2.00134 2 3.65134 2 5.69134V12.0713C2 12.6213 2.45 13.0713 3 13.0713H12.15C13.17 13.0713 14 12.2413 14 11.2213V2.92134C14 2.41134 13.59 2.00134 13.08 2.00134ZM10.07 7.07134L7.98 9.09134C7.83 9.23134 7.64 9.30134 7.46 9.30134C7.27 9.30134 7.08 9.23134 6.94 9.09134L5.93 8.13134C5.63 7.84134 5.62 7.36134 5.91 7.06134C6.19 6.76134 6.67 6.76134 6.97 7.04134L7.46 7.51134L9.03 5.99134C9.33 5.70134 9.8 5.71134 10.09 6.01134C10.38 6.31134 10.37 6.78134 10.07 7.07134Z" fill="#0F9B71" />
              </svg>
            </div>
            <div className="flex flex-col text-left gap-1">
              <p className="font-semibold text-[16px]">25</p>
              <p>Completed</p>
            </div>
          </div>
        </TabsTrigger>
        <TabsTrigger value="cancelled" className="data-[state=active]:bg-[#F64E60] data-[state=active]:text-white">
          <div className="flex gap-4 items-center">
            <div className="rounded-full bg-[#FFF5F8] p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M21.7852 15.6342C22.0652 15.6342 22.2852 15.8542 22.2852 16.1342V17.1342C22.2852 18.7942 20.9452 20.1342 19.2852 20.1342C19.2852 18.4842 17.9352 17.1342 16.2852 17.1342C14.6352 17.1342 13.2852 18.4842 13.2852 20.1342H11.2852C11.2852 18.4842 9.93516 17.1342 8.28516 17.1342C6.63516 17.1342 5.28516 18.4842 5.28516 20.1342C3.62516 20.1342 2.28516 18.7942 2.28516 17.1342V15.1342C2.28516 14.5842 2.73516 14.1342 3.28516 14.1342H12.7852C14.1652 14.1342 15.2852 13.0142 15.2852 11.6342V6.13416C15.2852 5.58416 15.7352 5.13416 16.2852 5.13416H17.1252C17.8452 5.13416 18.5052 5.52416 18.8652 6.14416L19.5052 7.26416C19.5952 7.42416 19.4752 7.63416 19.2852 7.63416C17.9052 7.63416 16.7852 8.75416 16.7852 10.1342V13.1342C16.7852 14.5142 17.9052 15.6342 19.2852 15.6342H21.7852Z" fill="#F64E60" />
                <path d="M8.28516 22.1342C9.38973 22.1342 10.2852 21.2387 10.2852 20.1342C10.2852 19.0296 9.38973 18.1342 8.28516 18.1342C7.18059 18.1342 6.28516 19.0296 6.28516 20.1342C6.28516 21.2387 7.18059 22.1342 8.28516 22.1342Z" fill="#F64E60" />
                <path d="M16.2852 22.1342C17.3897 22.1342 18.2852 21.2387 18.2852 20.1342C18.2852 19.0296 17.3897 18.1342 16.2852 18.1342C15.1806 18.1342 14.2852 19.0296 14.2852 20.1342C14.2852 21.2387 15.1806 22.1342 16.2852 22.1342Z" fill="#F64E60" />
                <path d="M22.2852 12.6642V14.1342H19.2852C18.7352 14.1342 18.2852 13.6842 18.2852 13.1342V10.1342C18.2852 9.58416 18.7352 9.13416 19.2852 9.13416H20.5752L22.0252 11.6742C22.1952 11.9742 22.2852 12.3142 22.2852 12.6642Z" fill="#F64E60" />
                <path d="M13.3652 2.11414H5.97516C3.93516 2.11414 2.28516 3.76414 2.28516 5.80414V12.1941C2.28516 12.7441 2.73516 13.1941 3.28516 13.1941H12.4352C13.4552 13.1941 14.2852 12.3641 14.2852 11.3441V3.03414C14.2852 2.52414 13.8752 2.11414 13.3652 2.11414ZM9.88516 9.23414C9.73516 9.37414 9.54516 9.44414 9.35516 9.44414C9.16516 9.44414 8.97516 9.37414 8.82516 9.23414L8.29516 8.70414L7.74516 9.25414C7.59516 9.40414 7.40516 9.47414 7.21516 9.47414C7.02516 9.47414 6.83516 9.40414 6.68516 9.25414C6.39516 8.96414 6.39516 8.48414 6.68516 8.19414L7.23516 7.64414L6.70516 7.11414C6.41516 6.82414 6.41516 6.34414 6.70516 6.05414C7.00516 5.76414 7.47516 5.76414 7.77516 6.05414L8.29516 6.58414L8.79516 6.07414C9.09516 5.78414 9.56516 5.78414 9.86516 6.07414C10.1552 6.37414 10.1552 6.84414 9.86516 7.14414L9.35516 7.64414L9.88516 8.16414C10.1752 8.46414 10.1752 8.93414 9.88516 9.23414Z" fill="#F64E60" />
              </svg>
            </div>
            <div className="flex flex-col text-left gap-1">
              <p className="font-semibold text-[16px] ">25</p>
              <p>Cancelled</p>
            </div>
          </div>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="request">
        <div className="py-6">
          <FilterSearch />
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-medium">Available Job Order</p>
            {dataRequest.map((requests)=> (
              <CardRequest data={{id:requests.id, ID_Request: requests.ID_Request, No_Request: requests.request.No_Request, Qty: requests.request.Qty, Vessel_Name: requests.request.Vessel_Name, Port_Name: requests.request.Port_Name, Terminal_Name: requests.request.Terminal_Name, Service_Name: requests.request.Service_Name, createdAt: requests.request.createdAt, Closing_Time: requests.request.Closing_Time}}/>
            ))}
        </div>

      </TabsContent>

      <TabsContent value="availableBoookingSlot">
        <div className="py-6">
          <FilterSearch />
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-medium">Available Booking Timeslot</p>
          <CardOnGoing/>
        </div>
      </TabsContent>

      <TabsContent value="completed">
        <div className="py-6">
          <FilterSearch />
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-medium">Completed Job</p>
          <CardComplete/>
        </div>
      </TabsContent>

      <TabsContent value="cancelled">
        <div className="py-6">
          <FilterSearch />
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-medium">Cancelled Job</p>
          {dataCancel.map((data)=>(
            <CardCancelled data={{id:data.id, ID_Request: data.ID_Request, No_Request: data.request.No_Request, Qty: data.request.Qty, Vessel_Name: data.request.Vessel_Name, Port_Name: data.request.Port_Name, Terminal_Name: data.request.Terminal_Name, Service_Name: data.request.Service_Name, createdAt: data.request.createdAt, Closing_Time: data.request.Closing_Time}}/>
          ))}
        </div>
      </TabsContent>

    </Tabs>
  )
}
