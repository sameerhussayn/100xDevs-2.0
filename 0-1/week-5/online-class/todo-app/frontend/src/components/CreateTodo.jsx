import { useState } from "react"

const CreateTodo = () => {
    const [title , setTitle ] = useState('')
    const [description, setDescription ] = useState('')
    function addTodo(){
        fetch('http://localhost:3000/todo',{
            method: "POST",
            body:JSON.stringify({
                    title,                description
                }),
            headers: {
                'Content-Type' : "application/json"
            }
        })
        .then(async(res)=>{
            const data = await res.json()
            console.log(data)
        }).catch(err => console.log(err))
    }
  return (
    <div>
        <input style={{
            padding:10,
            margin: 10
        }} type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)} />
        <input style={{
            padding:10,
            margin: 10
        }} type="text" placeholder="title" onChange={(e)=>setDescription(e.target.value)}/>

        <button style={{
            padding:10,
            margin: 10
        }} onClick={addTodo}>Add a todo</button>
    </div>
  )
}
export default CreateTodo