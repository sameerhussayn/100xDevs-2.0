import express from "express";
import cors from 'cors'
import { createTodo, updateTodo } from "./types.js";
import todo from "./db.js";

const app = express();
app.use(cors())
app.use(express.json())

app.post('/todo', async(req,res)=>{
    try {
        console.log(req.body)
      const parsePayload = createTodo.safeParse(req.body)
        
      if(!parsePayload.success){
        return res.status(411).json({
            msg: 'You sent the wrong inputs'
        })
      }
    await todo.create({
        title: req.body.title,
        description: req.body.description,
        completed: false
      })

      res.json({
        msg: "Todo created"
      })
    } catch (error) {
        console.log(error)

    }
})

app.get('/todos', async(req,res)=>{
    // console.log('first')
    try {
        const todos = await todo.find({})
    res.json(todos)
    } catch (error) {
        console.log(error)
    }
})


app.put('/completed', async(req,res)=>{
    try {
        const parsePayload = updateTodo.safeParse(req.body)
        if(!parsePayload.success){
            return res.status(411).json({
                msg: 'You sent the wrong inputs'
            })
          }
        await todo.update({
            _id: req.body.id
        }, {
            completed: true
        })
        res.json({
            msg: "Todo marked as completed."
        })
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, console.log('Server started on 3000'))