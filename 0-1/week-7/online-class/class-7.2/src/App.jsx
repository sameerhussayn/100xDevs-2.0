/* eslint-disable react/prop-types */

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'

import { filterQueryAtom, inputTodoAtom, todoAtom, todoState, todosToDisplay } from './store/atoms/todos'


function App() {
  return (
    <RecoilRoot>
      <SearchTodo />
        <InputTodo />
        <TodosRenderer />
    </RecoilRoot>
    
  )
}


function SearchTodo(){
  const [query, setQuery] = useRecoilState(filterQueryAtom)
  const setTodo = useSetRecoilState(todoState)
  
  function submitHandler(){
    if(!query) return;
    setQuery(query)
    setTodo('filtered')
  }
  return (
    <div>
      <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)} />
      <button onClick={submitHandler}>Search</button>
      <br /><br />
    </div>
    
  )
}
function InputTodo(){
  const [inputTodo, setInputTodo] = useRecoilState(inputTodoAtom)
  const [todos, setTodos] = useRecoilState(todoAtom)
  const resetInput = useResetRecoilState(inputTodoAtom)
  const {title, description} = inputTodo

  function handleChange(e){
    setInputTodo({
      ...inputTodo,
      [e.target.name] : e.target.value
    })
    
  }
  function submitHandler(){
    setTodos([...todos, inputTodo])
    resetInput()
  }
  
  return(
    <div>
      <input type="text" placeholder='title' value={title} name='title' onChange={handleChange}/>
      <input type="text" placeholder='description' name='description' value={description} onChange={handleChange} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

function TodosRenderer(){
  const todos = useRecoilValue(todosToDisplay)
  return (
    <>
      {
      todos.map(todo => (
        <div key={todo.title}>
          <p>{todo.title}</p>
          <p>{todo.description}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
