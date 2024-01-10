/* eslint-disable no-unused-vars */


import { useEffect, useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import HeaderWithBtn from './assets/components/HeaderWithBtn'
import Todo from './assets/components/Todo'
import CardWrapper from './assets/components/CardWrapper'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    setInterval(()=>{
      fetch('https://sum-server.100xdevs.com/todos')
      .then(async (res)=>{
        const data = await res.json()

        setTodos(data.todos)
      })
    },3000)
  },[])
  return (
    <div> 
     <div>
      <h1>Todos</h1>
      {
        todos.map(todo =>(
          <Todo title={todo.title} description={todo.description} key={todo.id} />
        ))
      }
      <button >Add new todo</button>
    </div>


    </div>




    /* *** Header
    <div>
      <HeaderWithBtn />
      <Header title={'This is a title 2'}/>
      <Header title={'This is a title 3'}/>
      <Header title={'This is a title 4'}/>
    </div>
*/

/*   **** Todo app


 // const [todos, setTodos] = useState([{
  //   id: 1,
  //   title:'Go to gym',
  //   description:'Chest and shoulder workout',
  // },
  //   {
  //     id: 1,
  //     title:'Reading',
  //     description:'Read first chapter',
  //   },{
  //     id: 1,
  //   title:'Coding',
  //   description:'Code for 1 hour',
  //   }])

  //   function addTodo(){
  //     setTodos([...todos, {id:counter++, title: "buy grocery",description: 'Cereal, milk'}])
  //   }


    <div>
      <h1>Todos</h1>
      {
        todos.map(todo =>(
          <Todo title={todo.title} description={todo.description} key={todo.id} />
        ))
      }
      <button onClick={addTodo}>Add new todo</button>
    </div>
    */
  )
}


// function TextComponent(){
//   return <div>
//     This is a text
//   </div>
// }
export default App
