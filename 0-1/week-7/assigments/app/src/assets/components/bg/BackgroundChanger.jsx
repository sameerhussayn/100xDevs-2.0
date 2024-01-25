import { useState } from "react"
import Button from "./Button"

const BackgroundChanger = () => {
    const [bgColor, setBgColor] = useState('white')
    
  return (
    <div className="h-screen w-screen flex justify-end flex-col items-center" style={{backgroundColor: bgColor}}>
      <div className="m-6 p-2 rounded-lg bg-neutral-400 shadow-2xl">
        <Button color='red' setBgColor={setBgColor} />
        <Button color='yellow' setBgColor={setBgColor}/>
        <Button color='black' setBgColor={setBgColor}/>
        <Button color='purple' setBgColor={setBgColor}/>
        <Button color='green' setBgColor={setBgColor}/>
        {/* <Button color='green' setBgColor={setBgColor}/> */}
        <Button color='blue' setBgColor={setBgColor}/>

      </div>
    </div>
  )
}
export default BackgroundChanger