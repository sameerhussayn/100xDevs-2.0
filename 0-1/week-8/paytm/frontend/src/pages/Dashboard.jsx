import AppBar from "../components/AppBar"
import Balance from "../components/Balance"
import Users from "../components/Users"
import { useLocation } from "react-router-dom"

const Dashboard = () => {
  
  const location = useLocation()
  const name= location.state?.userName || window.localStorage.getItem('name')
  return (
    <div className="bg-white flex flex-col min-h-screen min-w-full px-2">
      {/* Appbar */}
      <AppBar name={name}/>

      {/* Balance */}
      <Balance />

      {/* Users */}
      <Users />
    </div>
  )
}
export default Dashboard