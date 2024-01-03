import { useEffect, useState } from 'react'

import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/todos')
    .then(async function(res){
      const data = await res.json()
      console.log(data)
      setTodos(data)
    }).catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <>
        <CreateTodo/>
        <Todos todos={todos}/>
      </>
  )
}

export default App
