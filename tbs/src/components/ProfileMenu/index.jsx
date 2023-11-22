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
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "src/components/ui/avatar"

export function ProfileMenu() {
    return (
        <Tabs defaultValue="profile" className="h-[200px]">
            <TabsList className="grid grid-row-4 gap-2 items-start w-[200px]">
                <TabsTrigger value="profile" className="data-[state=active]:bg-[#FFA621] data-[state=active]:text-white py-4">
                    <div className="flex gap-4 items-center">
                        <p>Edit my profile</p>
                    </div>
                </TabsTrigger>
                <TabsTrigger value="changePassword" className="data-[state=active]:bg-[#064B82] data-[state=active]:text-white py-4">
                    <div className="flex gap-4 items-center">
                        <p>Change Password</p>
                    </div>
                </TabsTrigger>
                <TabsTrigger value="completed" className="data-[state=active]:bg-[#0F9B71] data-[state=active]:text-white py-4">
                    <div className="flex gap-4 items-center">
                        <p>Logout</p>
                    </div>
                </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-0 ml-60 border rounded-lg p-11">
                <div className="flex flex-col gap-5">
                    <div className="border-b">
                        <div className="flex gap-4 items-center justify-between">
                            {/* <p className="font-medium text-lg">Edit My Profile</p> */}
                            <Avatar className="w-32 h-auto mb-5">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            </Avatar>
                            <Button className="border px-4 py-6 bg-primary">
                                <p className="text-white font-medium">Change Photo</p>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col py-5 gap-4">
                        <div className="flex gap-4 items-center">
                            <div className="p-3 rounded-full bg-[#F5F5F5]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M12.2636 10.8701C12.1636 10.8601 12.0436 10.8601 11.9336 10.8701C9.55357 10.7901 7.66357 8.84006 7.66357 6.44006C7.66357 3.99006 9.64357 2.00006 12.1036 2.00006C14.5536 2.00006 16.5436 3.99006 16.5436 6.44006C16.5336 8.84006 14.6436 10.7901 12.2636 10.8701Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.26349 14.5601C4.84349 16.1801 4.84349 18.8201 7.26349 20.4301C10.0135 22.2701 14.5235 22.2701 17.2735 20.4301C19.6935 18.8101 19.6935 16.1701 17.2735 14.5601C14.5335 12.7301 10.0235 12.7301 7.26349 14.5601Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="font-medium">User Information</p>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-3 gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <p>Username</p>

                            </div>
                        </div>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="changePassword" className="mt-0 ml-72 border rounded-lg p-11">
                <div className="flex flex-col gap-6">
                    <div className="border-b">
                        <p className="font-medium text-[18px] pb-5">Change Password</p>
                    </div>
                    <form className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-1.5">
                                <Label htmlFor="password" className="py-2 font-medium">Password</Label>
                                <Input id="password" placeholder="Old Password" className="p-3.5" />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="password">New Password</Label>
                                <Input id="password" placeholder="New Password" className="p-3.5" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="Old Password" className="p-3.5" />
                            </div>
                        </div>
                        <div className="flex flex-row-reverse">
                            <button className="bg-primary py-3 px-8 text-white rounded-lg">
                                <p>Save</p>
                            </button>
                        </div>
                    </form>
                </div>
            </TabsContent>
        </Tabs >



    )
}
