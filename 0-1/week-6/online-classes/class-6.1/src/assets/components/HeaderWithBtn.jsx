import { useState } from "react"
import Header from "./Header"
const HeaderWithBtn = () => {
    const [title, setTitle] = useState('This is a title')
    function handleClick(){
      setTitle('My name is ' + Math.random())
    }
  return (
    <div>
        
        <button onClick={handleClick}>Click me to change the title</button>
        <Header title={title}/>
    </div>
  )
}
export default HeaderWithBtn