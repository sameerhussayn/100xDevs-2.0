import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const Balance = () => {
  const [balance , setBalance ] = useState('')
  
  useEffect(()=>{
    async function fetchBalance(){
      try {
        const res = await axios.get('http://localhost:3000/api/v1/account/balance', {
          headers: {authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        if(res.data.balance){
          setBalance(res.data.balance)
        }
      } catch (error) {
          console.log(error)
      }
    }
    fetchBalance()
  })
  return (
    <div className="px-4 mt-8">
      <h2 className="font-bold text-xl">Your Balance ${balance}</h2>
    </div>
  );
};
export default Balance;
