import { useState } from "react"
import paraGenerator from "./lorem";

const ParaGen = () => {
    const [length,setLength ] = useState("")
    const [para, setPara] = useState("")

    function handleSubmit(){
      if(!length) return;

      setPara(paraGenerator(length))
    }

    function handleCopy(){
      try {
        navigator.clipboard.writeText(para)
        alert('Copied to clipboard')
      } catch (error) {
        alert('Failed to copy!')
      }
    }
  return (
    <div className="text-center flex-col flex h-screen items-center">
        <div className="mt-28 w-3/5">
        <h1 className="text-3xl font-bold">Para Generator</h1>
        <input type="text" onChange={(e)=>setLength(e.target.value)}  value={length} placeholder="Enter Number of Words" className="border p-2 m-4 w-3/5" />

        <button className="bg-black p-2 text-white rounded-lg font-light" onClick={handleSubmit}>Generate</button>
       
        </div>
        {
          para && (
            <div className="w-4/6 m-auto font-mono border rounded-lg my-4 p-4">
          <div>
          <button className="p-2 text-white rounded-lg font-light mx-2" onClick={handleCopy}>📋</button>
          </div>
        <div >
            {para}
        </div>
        
        </div>
          )
        }

    </div>
  )
}
export default ParaGen