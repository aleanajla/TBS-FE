import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "src/components/ui/dialog"
  import { Input } from "src/components/ui/input"
  import { Label } from "src/components/ui/label"
  import { DatePickerWithRange } from "../DatePicker"
  import { useState } from "react"

export default function TruckSearching(){
    const [open, setOpen] = useState(false)
    
    return(
    <>
        <div className="flex place-content-center">
            <div className="mt-20 rounded-lg w-2/4 p-8">
                <div className="">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                        <path d="M18.7656 1L1.76562 18" stroke="black" stroke-width="1.61905" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.76562 1L18.7656 18" stroke="black" stroke-width="1.61905" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> */}
                </div>
                <div className="py-3.5">
                    <div className="border-b-2 border-gray-400">
                        <p className="font-medium">Assign Trucking Company</p>
                        <p className="text-gray-500 pb-6 text-sm">Tambahkan Nama Trucking Company beserta Jumlah Containernya</p>
                    </div>
                    <div className="border-b-2 border-gray-400">
                        <div className="my-7 bg-gray-200 rounded-md">
                            <div className="px-8 py-4">
                                <p className="text-sm font-medium pb-5">Trucking Company</p>
                                <div
                                    class="flex items-center mx-auto bg-white rounded-lg w-full mb-5"
                                    x-data="{ search: '' }"
                                >
                                    <div class="w-full">
                                        <input
                                        type="search"
                                        class="w-full px-4 py-1 text-gray-800 text-sm rounded-full focus:outline-none"
                                        placeholder="Cari..."
                                        x-model="search"
                                        />
                                    </div>
                                    <div>
                                        <button
                                        type="submit"
                                        class="flex items-center justify-center w-12 h-12 text-white rounded-r-lg"
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                        >
                                            <path
                                            d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z"
                                            fill="#7D7D7D"
                                            />
                                        </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-3.5 right-0 flex justify-end">
                        <button className="w-28 py-3.5 mr-5 border border-primary text-primary rounded-lg font-medium">
                            <p>Batal</p>
                        </button>
                        <button className="w-28 py-3.5 bg-primary text-white rounded-lg font-medium">
                            <p>Simpan</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}