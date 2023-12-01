import { Input } from "src/components/ui/input"
import { Label } from "src/components/ui/label"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"

export function ProfileMenu() {
    const {id} = useSelector((state) => state.Auth.user)
    const [data, setData] = useState([])

    const getData = async() => {
        try{
            const response = await axios({
                method: "get",
                url: `http://localhost:3000/api/view/profile/${id}`
            })
            console.log(response.data);
            setData(()=>response.data)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    })

    return (
        <>
            {/* {data.map((datas) => ( */}

                <div className="flex flex-col gap-10">
                    <div className="border px-10 py-10 rounded-lg">
                        <div className="border-b flex justify-between items-center">
                            <div className="flex items-center gap-4 pb-5">
                                <div className="bg-[#F5F5F5] p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M12.2636 10.8701C12.1636 10.8601 12.0436 10.8601 11.9336 10.8701C9.55357 10.7901 7.66357 8.84006 7.66357 6.44006C7.66357 3.99006 9.64357 2.00006 12.1036 2.00006C14.5536 2.00006 16.5436 3.99006 16.5436 6.44006C16.5336 8.84006 14.6436 10.7901 12.2636 10.8701Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.26349 14.5601C4.84349 16.1801 4.84349 18.8201 7.26349 20.4301C10.0135 22.2701 14.5235 22.2701 17.2735 20.4301C19.6935 18.8101 19.6935 16.1701 17.2735 14.5601C14.5335 12.7301 10.0235 12.7301 7.26349 14.5601Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-xl font-medium">User Information</p>
                            </div>
                            {/* <div className="bg-primary mb-5 py-4 px-6 rounded-lg shadow-sm">
                                <p className="text-white">Edit Profile</p>
                            </div> */}
                        </div>

                        <div className="py-10">
                            <div className="grid grid-rows-3 grid-cols-2 gap-6">
                                <div className="flex flex-col gap-4">
                                    <Label className="text-md">Full Name</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        value={data.Name}
                                        className="bg-[#BDBDBD] py-6 text-md"
                                        disabled />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label className="text-md">Username</Label>
                                    <Input
                                        type="text"
                                        id="username"
                                        value={data.Username}
                                        className="bg-[#BDBDBD] py-6 text-md"
                                        disabled />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label className="text-md">Phone Number</Label>
                                    <Input
                                        type="text"
                                        id="phoneNumber"
                                        value={data.Phone_Number}
                                        className="bg-[#BDBDBD] py-6 text-md"
                                        disabled />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label className="text-md">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        value={data.Email}
                                        className="bg-[#BDBDBD] py-6 text-md"
                                        disabled />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label className="text-md">Role</Label>
                                    <Input
                                        type="text"
                                        id="role"
                                        value={data.Company_Type}
                                        className="bg-[#BDBDBD] py-6 text-md"
                                        disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border px-10 py-10 rounded-lg">
                        <div className="border-b flex justify-between items-center">
                            <div className="flex items-center gap-4 pb-5">
                                <div className="bg-[#F5F5F5] p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.9582 2.86489L20.5832 6.31487C20.9186 6.44903 21.1869 6.85152 21.1869 7.20611V10.3878C21.1869 10.9149 20.7557 11.3461 20.2286 11.3461H2.9786C2.45151 11.3461 2.02026 10.9149 2.02026 10.3878V7.20611C2.02026 6.85152 2.2886 6.44903 2.62402 6.31487L11.249 2.86489C11.4407 2.78822 11.7665 2.78822 11.9582 2.86489Z" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.1869 21.8878H2.02026V19.0128C2.02026 18.4857 2.45151 18.0544 2.9786 18.0544H20.2286C20.7557 18.0544 21.1869 18.4857 21.1869 19.0128V21.8878Z" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.93677 18.0544V11.3461" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.77026 18.0544V11.3461" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.6035 18.0544V11.3461" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.4368 18.0544V11.3461" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.2703 18.0544V11.3461" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.06177 21.8878H22.1451" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.6035 8.95027C12.3974 8.95027 13.041 8.30668 13.041 7.51277C13.041 6.71886 12.3974 6.07527 11.6035 6.07527C10.8096 6.07527 10.166 6.71886 10.166 7.51277C10.166 8.30668 10.8096 8.95027 11.6035 8.95027Z" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-xl font-medium">Company Information</p>
                            </div>
                            {/* <div className="bg-primary mb-5 py-4 px-6 rounded-lg shadow-sm">
                                <p className="text-white">Edit Profile</p>
                            </div> */}
                        </div>
                        <div className="py-10">
                            <div className="grid grid-rows-3 grid-cols-2 gap-6">
                                <div className="flex flex-col gap-4">
                                    <Label className="text-md">Company Name</Label>
                                    <Input
                                        type="text"
                                        id="companyName"
                                        value={data.Company_Name}
                                        className="bg-[#BDBDBD] py-6 text-md"
                                        disabled />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label className="text-md">Company Type</Label>
                                    <Input
                                        type="text"
                                        id="companyType"
                                        value={data.Company_Type}
                                        className="bg-[#BDBDBD] py-6 text-md"
                                        disabled />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label className="text-md">PKMU</Label>
                                    <Input
                                        type="text"
                                        id="pkmu"
                                        value={data.PMKU ? data.PMKU : "-"}
                                        className="bg-[#BDBDBD] py-6 text-md"
                                        disabled />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label className="text-md">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        value={data.CusEmail ? data.CusEmail : "-"}
                                        className="bg-[#BDBDBD] py-6 text-md"
                                        disabled />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label className="text-md">Address</Label>
                                    <Input
                                        type="text"
                                        id="address"
                                        value={data.Address ? data.Address : "-"}
                                        className="bg-[#BDBDBD] py-6 text-md"
                                        disabled />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label className="text-md">NIB</Label>
                                    <Input
                                        type="text"
                                        id="nib"
                                        value={data.NIB ? data.NIB : "-"}
                                        className="bg-[#BDBDBD] py-6 text-md"
                                        disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* ))} */}
        </>
    )
}
