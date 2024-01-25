/* eslint-disable react/prop-types */

import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, isCountEven } from './store/atoms/count'


function App() {
  return (
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
   
    
  )
}

function Count(){
  
  return <div>
    <CountRenderer />
    <Buttons/>
  </div>
}

function CountRenderer(){
const count = useRecoilValue(countAtom)
  return <div>
    <p>{count}</p>
    <IsEvenRenderer/>
  </div>
}

function IsEvenRenderer(){
  const isEven = useRecoilValue(isCountEven)
  console.log(isEven)
  return isEven? "It is even" : null;
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={()=>setCount(count=>count+1)}>Increase</button>
    <button onClick={()=>setCount(count=>count-1)}>decrease</button>
  </div>
}

export default App
