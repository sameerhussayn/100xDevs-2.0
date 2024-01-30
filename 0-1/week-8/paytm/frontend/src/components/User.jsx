/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom"
import Button from "./Button"
import ProfileAvatar from "./ProfileAvatar"

const User = ({name, id}) => {
  return (
    <>
    <div className="mt-4">
        <div className="flex justify-between  p-2 border rounded-lg hover:bg-gray-200">
        <div className="flex  gap-4 items-center ">
          <ProfileAvatar>{name}</ProfileAvatar>
          <p className="font-semibold">{name}</p>
        </div>
        <Link to={`/send/${id}`} state={{name}}>
        <Button >Send Money</Button></Link>
        </div>
        
      </div>    </>
  )
}
export default User