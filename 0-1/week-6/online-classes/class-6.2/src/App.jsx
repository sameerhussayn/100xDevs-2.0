import { useEffect, useMemo, useState } from 'react'

import './App.css'
import axios from 'axios'

// ****useMemo
function App(){
  const [inputValue, setInputValue] = useState(0)
  const [count, setCount] = useState(0)
  
  const counter = useMemo(()=>{
    let sum = 0;
  for (let i=1;i<=inputValue;i++){
    sum += i
  }
  return sum
  },[inputValue])
  return(
    <div>
      <input type="text" onChange={(e)=>setInputValue(e.target.value)} />
      <p>Sum from 1 to {inputValue} is  {counter}</p>
      <button onClick={()=>setCount(count+1)}>Counter {count}</button>
    </div>
  )
}

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(()=>{
//     axios.get('https://sum-server.100xdevs.com/todos')
//   .then((res) =>{
//     console.log(res.data.todos)
//     setTodos(res.data.todos)
//   })
//   },[])
//   return (
//     <>
//       {
//         todos.map(todo =>(
//           <Todo key={todo.id} title={todo.title} description={todo.description} />
//         ))
//       }
//     </>
//   )
// }



/* ****** Todo by click
function App(){
  const [id, setId] = useState(1)
  return(
    <div>
    <button onClick={()=>setId(1)}>1</button>
    <button onClick={()=>setId(2)}>2</button>
    <button onClick={()=>setId(3)}>3</button>
    <button onClick={()=>setId(4)}>4</button>

    <Todo id={id}/>
    
    </div>

    
  )
}

function Todo({id}){
  const [todo , setTodo] = useState({})

   useEffect(()=>{
    axios.get('https://sum-server.100xdevs.com/todo?id=' + id)
    .then((res)=>{
      // console.log(res.data)
      setTodo(res.data.todo)
    })
  },[id])


  return(
    <div>
      <h3>{todo.title}</h3>
      <h5>{todo.description}</h5>
    </div>
  )
}
*/

export default App
