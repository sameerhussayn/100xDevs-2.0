import { useState } from "react";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import axios from "axios";
import Form from "../components/Form";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";

const Singin = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      userName : "",
      password : "",
    })
    
    function handleChange(e){
      setFormData(cur => ({...cur, [e.target.id] : e.target.value}))
    }
  
    async function handleSubmit(e){
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:3000/api/v1/user/signin', formData)
        

      if(res.data.success){
        window.localStorage.setItem('token', res.data.token);
        window.localStorage.setItem('name', res.data.name)
        navigate('/dashboard', {state: {userName: res.data.name }})
      }
      } catch (error) {
        alert(error?.response?.data?.message )
        console.log(error?.response?.data?.message )
      }
    }
  return (
    <div className="min-h-40 w-8/12 md:w-6/12 lg:w-5/12 xl:w-3/12 bg-white flex flex-col p-4 rounded-md">

      <Heading heading={"Sign In"} subHeading={"Enter your credential to access your account"}/>

      <Form handleSubmit={handleSubmit}>
            
            <InputBox placeholder={'johndoe@example.com'} label={'Email'} id={"userName"} handleChange={handleChange} type="email" value={formData.userName}/>

            <InputBox type="password"  label={'Password'} id={"password"} handleChange={handleChange} value={formData.password} minLength={8}/>
            
            <Button margin={true}>Sign In</Button>
        </Form>
        <BottomWarning label={"Don't have an account?"} linkText={"Sign Up"} to={'/signup'} />
    </div>
  )
}
export default Singin;