import Input from './Input'
import useIsOnline from './hooks/useIsOnline'

import useTodos from './hooks/useTodos'


function App() {
  const [todos, loading] = useTodos(5)
  const isOnline = useIsOnline()


  // if(x){
  //   return  (<div>Mouse pointer is at x: {x} Y: {y}</div>)
  // }
  if(!isOnline){
    return (<div>Looks like you are not connected to the internet. Please try after connecting...</div>)
  }
  return (
    <>
    <Input />
      {/* {loading? <div>Loading...</div>: (
        todos.map(todo => <Track todo={todo} key={todo.title}/>)
      )} */}
    </>
  )
}

function Track({ todo }) {


  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App