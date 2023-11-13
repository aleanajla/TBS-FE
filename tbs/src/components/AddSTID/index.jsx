import { Button } from "src/components/ui/button"
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
import AccordionTimeslot from "../AccordionTimeslot/Index"
import { ChooseTruck } from "../ChooseTruck"
import { ChooseDriver } from "../ChooseDriver"


export function AddSTID() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="flex gap-[2px] bg-primary rounded-lg w-[150px] h-[50px] text-white btn items-center justify-center" onClick={() => setOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M18.0234 12.7735H6.02344C5.61344 12.7735 5.27344 12.4335 5.27344 12.0235C5.27344 11.6135 5.61344 11.2735 6.02344 11.2735H18.0234C18.4334 11.2735 18.7734 11.6135 18.7734 12.0235C18.7734 12.4335 18.4334 12.7735 18.0234 12.7735Z" fill="white" />
          <path d="M12.0234 18.7735C11.6134 18.7735 11.2734 18.4335 11.2734 18.0235V6.02353C11.2734 5.61353 11.6134 5.27353 12.0234 5.27353C12.4334 5.27353 12.7734 5.61353 12.7734 6.02353V18.0235C12.7734 18.4335 12.4334 18.7735 12.0234 18.7735Z" fill="white" />
        </svg>
        <p className="font-medium text-white">Add STID</p>
      </button>
      {
        open ?
          <div className="absolute inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center bg-black">
            <div className=" bg-white w-[700px] max-h-[720px] rounded-xl py-[31px] px-[47px] flex flex-col gap-2">
              <div className="flex flex-row-reverse">
                <button className="btn" onClick={() => setOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                    <path d="M18 1.5L1 18.5" stroke="black" stroke-width="1.61905" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 1.5L18 18.5" stroke="black" stroke-width="1.61905" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <h1 className="text-lg font-semibold text-primary">Add STID</h1>
              <p className="font-medium text-gray-400">Choose your truck and driver to associate them!</p>
              <div className="flex justify-center items-center py-8 gap-14">
                <ChooseTruck />
                -
                <ChooseDriver />
              </div>

              <div className="flex flex-row-reverse gap-3">
                <button className="w-[118px] h-[53px] items-center justify-center bg-primary text-sm rounded-full text-white">
                  Save
                </button>
                <button className="w-[118px] h-[53px] items-center justify-center text-sm rounded-full border border-primary text-primary">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          :
          ""
      }
    </>
  )
}
// <div className="modal">
//   <div className="modal-box">
//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click the button below to close</p>
//     <div className="modal-action">
//       <form method="dialog">
//         {/* if there is a button in form, it will close the modal */}
//         <button className="btn" onClick={() => setOpen(false)}>Close</button>
//       </form>
//     </div>
//   </div>
// </div>

// <Dialog>
{/* <DialogTrigger asChild>
    <Button variant="outline" className="flex gap-[2px] bg-primary rounded-lg w-[170px] h-[54px] text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path d="M18.0234 12.7735H6.02344C5.61344 12.7735 5.27344 12.4335 5.27344 12.0235C5.27344 11.6135 5.61344 11.2735 6.02344 11.2735H18.0234C18.4334 11.2735 18.7734 11.6135 18.7734 12.0235C18.7734 12.4335 18.4334 12.7735 18.0234 12.7735Z" fill="white" />
        <path d="M12.0234 18.7735C11.6134 18.7735 11.2734 18.4335 11.2734 18.0235V6.02353C11.2734 5.61353 11.6134 5.27353 12.0234 5.27353C12.4334 5.27353 12.7734 5.61353 12.7734 6.02353V18.0235C12.7734 18.4335 12.4334 18.7735 12.0234 18.7735Z" fill="white" />
      </svg>
      <p className="font-medium text-white">Add Time slot</p>
    </Button>
  </DialogTrigger>

  <DialogContent className="sm:max-w-[972px] py-[31px] px-[47px]">
    <DialogHeader>
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
        <path d="M18 1.5L1 18.5" stroke="black" stroke-width="1.61905" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 1.5L18 18.5" stroke="black" stroke-width="1.61905" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <p>Add Timeslot</p>
    </DialogHeader>
    <div>
      <div className="flex flex-col gap-4">
        <p>Add Date</p>
        <DatePickerWithRange/>
      </div>
    </div> */}
{/* <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input
          id="name"
          defaultValue="Pedro Duarte"
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Username
        </Label>
        <Input
          id="username"
          defaultValue="@peduarte"
          className="col-span-3"
        />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter> */}
{/* </DialogContent> */ }


// </Dialog>







{/* <dialog id="addTimeslot" class="modal">
    <div className="mt-20 px-[48px] py-[31px] w-[972px] h-auto bg-gray-100 rounded-xl flex flex-col gap-y-2">
        <div className="flex flex-row-reverse">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                <path d="M18 1.5L1 18.5" stroke="black" stroke-width="1.61905" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 1.5L18 18.5" stroke="black" stroke-width="1.61905" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <h2 className="font-medium text-md">Add Timeslot</h2>
        <div className="flex flex-col gap-y-2">
            <p>Date</p>
            <DatePickerWithRange/>
        </div>
    </div>
</dialog> */}

{/* <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog> */}
