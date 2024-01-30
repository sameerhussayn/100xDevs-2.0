import { useState } from "react"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import ProfileAvatar from "../components/ProfileAvatar"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const SendMoney = () => {
  const navigate = useNavigate()
  const [amount, setAmount] = useState("")
  const {name} = useLocation().state || ""
  const {id} = useParams()
  async function handleTransfer(){
    try {
      const transactionDetails = {
        to: id,
        amount: +amount
      }
      const res = await axios.post('http://localhost:3000/api/v1/account/transfer', transactionDetails, {
        headers: {authorization: `Bearer ${localStorage.getItem('token')}`}
      })
       
      if(res.data.success){
        alert(res.data.message)
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (

      <div className=" min-h-40 w-10/12 md:w-6/12 lg:w-4/12  bg-white flex flex-col p-4 rounded-md justify-between gap-8">
        <Heading heading={'Send Money'}/>

        <div className="flex flex-col p-2 gap-2 ">
        <div className="flex  gap-4 items-center ml-2">
          <ProfileAvatar>{name}</ProfileAvatar>
          <p className="font-bold text-xl">{name}</p>
        </div>
        <p className="font-semibold ml-2">Amount (in Rs)</p>

        <InputBox type="number" placeholder="Enter Amount" value={amount} handleChange={(e)=>setAmount(e.target.value)}/>
        <Button isDisable={!amount} handleClick={handleTransfer}>Initiate Transfer</Button>

        </div>
      </div>

  )
}
export default SendMoney