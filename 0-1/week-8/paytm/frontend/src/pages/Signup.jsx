import { useState } from "react";
import axios from 'axios'
import Heading from "../components/Heading";
import BottomWarning from "../components/BottomWarning";
import Form from "../components/Form";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    userName : "",
    firstName : "",
    lastName : "",
    password : "",
  })

  function handleChange(e){
    setFormData(cur => ({...cur, [e.target.id] : e.target.value}))
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/v1/user/signup', formData)
      console.log(res.data.message)

      if(res.data.success){
        alert(res.data.message)
        navigate('/signin')
      }
    } catch (error) {
      alert(error.response.data.message|| 'Unexpected error' )
      console.log(error?.response?.data?.message )
      console.log(error)
    }
  }

  return (
    <div className="min-h-40 w-8/12 md:w-6/12 lg:w-5/12 xl:w-3/12 bg-white flex flex-col p-4 rounded-md">

        <Heading heading={"Sign Up"} subHeading={"Enter your information to create an account"}/>

        <Form  handleSubmit={handleSubmit}>
            <InputBox placeholder={'John'} label={'First Name'} id={"firstName"} handleChange={handleChange} value={formData.firstName}/>
            
            <InputBox placeholder={'Doe'} label={'Last Name'} id={"lastName"} handleChange={handleChange} value={formData.lastName}/>

            <InputBox placeholder={'johndoe@example.com'} label={'Email'} id={"userName"} handleChange={handleChange} type="email" value={formData.userName}/>

            <InputBox type="password"  label={'Password'} id={"password"} handleChange={handleChange} value={formData.password} minLength={8}/>

            <Button margin={true}>Sign Up</Button>
        </Form>
        <BottomWarning label={"Already have an account?"} linkText={"Login"} to={'/signin'} />


    </div>
  )
}
export default Signup;