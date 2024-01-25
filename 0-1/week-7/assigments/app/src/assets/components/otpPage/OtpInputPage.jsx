import { useRef, useState } from "react"


const OtpInputPage = () => {

    const [otpDigits, setOtpDigits] = useState(new Array(4).fill(''))
    
    const digit0 = useRef(null)
    const digit1 = useRef(null)
    const digit2 = useRef(null)
    const digit3 = useRef(null)
    const digits = [digit0, digit1, digit2,digit3]
    
    function handleChange(index, value){
      
            let otp = [...otpDigits]
            otp[index] = value
            setOtpDigits(otp)
           if(value !== "" && index < otpDigits.length -1){
            digits[index+1].current.focus()
           }  
           
    }
    function handleKey(index,e){
      if(e.keyCode === 8 && otpDigits[index] === ""){
        digits[index-1].current.focus()
      }
    }
    function submitHandler(){
      console.log(otpDigits.join(''))
    }
  return (
    <div className="border flex flex-col items-center  border-black h-96 p-8 w-4/12 text-center justify-between bg rounded-xl">
    <div className=" w-11/12 mx-auto flex flex-col items-center gap-6 mt-6">
    <h2 className="text-xl font-medium text-gray-100">Enter OTP Sent to +91 7337092292</h2>
     
     <div className="flex gap-2 ">
         {otpDigits.map((digit, index)=>(
            <input type="text" key={index} value={digit} ref={digits[index]}  className="my-2 border border-gray-500 py-2  rounded-md font-semibold text-center w-10 bg-inherit"  maxLength={1} onKeyDown={(e)=>handleKey(index,e )} onChange={(e)=>handleChange(index,e.target.value)}/>
         ))}
     
     </div>
     <p className="-mt-1 text-[12px] text-gray-500" >Resend OTP? <span className="text-blue-500 ">Phone</span> <span className="text-blue-500">SMS</span></p>
    </div>

    <div className="w-full">
     <button className="p-2 shadow-2xl border border-black rounded-md font-semibold w-full bg-btn"  onClick={submitHandler}>Submit </button>
    </div>
 </div>
  )
}
export default OtpInputPage