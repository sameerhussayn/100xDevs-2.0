import zod from "zod"

/*
    {
        title: string,
        description: string,    
    }
*/

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

export {createTodo, updateTodo}