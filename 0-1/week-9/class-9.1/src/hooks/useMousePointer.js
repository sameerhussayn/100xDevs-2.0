import { useEffect, useState } from "react";

export default function useMousePointer(){
    const [position, setPosition] = useState({x:0, y: 0})

    function handleMouseMove(e){
        setPosition({x: e.x, y: e.y})
    }
    useEffect(()=>{
        window.addEventListener('mousemove', handleMouseMove)

        return()=>{
            window.removeEventListener('mousemove', handleMouseMove)
        }
    })

    return position;
}