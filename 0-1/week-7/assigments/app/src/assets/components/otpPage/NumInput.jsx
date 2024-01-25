import { useState } from "react"

const NumInput = () => {
    const [number, setNumber] = useState('')

    function handleChange(e){
        if(e.target.value.length >10) return;
        setNumber(e.target.value)
    }
  return (
  
        <div className="border flex flex-col items-center  border-black h-96 p-8 w-4/12 text-center justify-between bg">
           <div className=" w-11/12 mx-auto flex flex-col items-center">
           <h2 className="text-2xl font-semibold">Enter Your Mobile Number</h2>
            <h3 className="font-medium text-sm my-2">We will send you a Confirmation Code</h3>
            <div className="flex gap-2 ">
                <input type="text" placeholder=" +91" disabled className="my-2 border p-2 rounded-md font-semibold w-14 bg-inherit" />
            <input type="text" className="my-2 border p-2 rounded-md font-semibold bg-inherit" value={number} placeholder="Enter mobile number" onChange={handleChange}  />
            </div>
            <p className="-mt-1 text-[9px] text-gray-500" >By conitinuing you agree to Privacy Policy and Terms of Use.</p>
           </div>

           <div className="w-full">
            <button className="p-2 shadow-2xl border border-black rounded-md font-semibold w-full bg-btn">Get OTP </button>
           </div>
        </div>

  )
}
export default NumInput