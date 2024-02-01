import { useEffect, useState } from "react"

export default function useTodos (n) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {

    const int =  setInterval(()=>{
      
        fetch("https://sum-server.100xdevs.com/todos")
          .then(res => {
           return  res.json()
          }).then(data =>{
            setLoading(false)
            setTodos(data.todos)
          })
      },n*1000)
  
      fetch("https://sum-server.100xdevs.com/todos")
          .then(res => {
           return  res.json()
          }).then(data =>{
            setLoading(false)
            setTodos(data.todos)
          })
  
          return()=>{
            clearInterval(int)
          }
    }, [n])
  
    return [todos, loading] 
  }