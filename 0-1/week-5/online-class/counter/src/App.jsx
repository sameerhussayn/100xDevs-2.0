/* eslint-disable react/prop-types */

import { useState } from 'react'
import './App.css'

function App() {
  const [newTodo, setNewTodo] =useState({
    title: '', description: ''
  })
  const [todos, setTodos]= useState([
    {
      title: "Task 1",
      description: 'This is task 1',
      id: 1
    }
  ])
  function onClickHandler(){

  }

  function onChangeHandler(e){
    setNewTodo({
      ...newTodo,
      [e.targer.name] : e.target.value
    })
  }
  return <>
  <form>
    <label htmlFor="title">Enter task name</label>
    <input type="text" id='title'  onChange={onChangeHandler} />

    <label htmlFor="desc">Enter description</label>
    <input type="text" id='desc'  onChange={onChangeHandler} />
    <button type="submit" onClick={onClickHandler}>Submit</button> 
  </form>
    {todos.map(todo =>(
      <Todo title={todo.title} description={todo.description} key={todo.id}/>
    ))}
  </>
}
function Todo({title, description}){
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  )
}
export default App
