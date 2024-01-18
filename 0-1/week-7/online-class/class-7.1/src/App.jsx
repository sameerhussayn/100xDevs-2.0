/* eslint-disable react/prop-types */

import './App.css'
import { useContext, useState } from 'react'
import { CountContext } from './context'


function App() {
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={{count, setCount}}>

    <Count count={count} setCount={setCount}/>
   
    </CountContext.Provider>
  )
}

function Count({setCount}){
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount}/>
  </div>
}

function CountRenderer(){
 const {count} = useContext(CountContext)

  return <div>
    {count}
  </div>
}

function Buttons(){
  const {setCount} = useContext(CountContext)
  return <div>
    <button onClick={()=>setCount(count=>count+1)}>Increase</button>
    <button onClick={()=>setCount(count=>count-1)}>decrease</button>
  </div>
}

export default App
