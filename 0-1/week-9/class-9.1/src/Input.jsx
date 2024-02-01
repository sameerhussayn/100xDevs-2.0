import { useState } from "react"
import useDebounce from "./hooks/useDebounce"

const Input = () => {
    const [input, setInput] = useState('')
    const debaunceValue = useDebounce(input, 500)


  return (
    <div>
        <span>Search query: {debaunceValue}</span>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />


    </div>
  )
}
export default Input