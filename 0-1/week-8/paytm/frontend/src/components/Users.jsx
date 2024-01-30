/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Button from "./Button"
import InputBox from "./InputBox"
import User from "./User"
import axios from "axios"

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [users, setUsers] = useState([])

  useEffect(()=>{

    async function fetchUsers(){
      try {
        const res = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${searchQuery}`, {
          headers: {authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        if(res.data){
          setUsers(res.data.users)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchUsers()

  },[searchQuery])

  return (
    <div className="px-4 my-2">
      <h2 className="font-bold text-xl my-2">Users</h2>
      <div className="flex gap-2 items-center">
      <InputBox placeholder="Search users..." value={searchQuery} handleChange={(e)=>setSearchQuery(e.target.value)}/>
      <Button>Search</Button>
      </div>
        {
            users.map(user => (
                <User name={user.firstName} key={user._id} id={user._id} />
            ))
        }
      </div>
  )
}
export default Users