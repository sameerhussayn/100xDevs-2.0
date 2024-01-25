import { atom, selector } from "recoil";

export const  todoAtom = atom({
    key: 'todos',
    default: []
})

export const inputTodoAtom = atom({
    key: 'inputTodo',
    default : {
        title: '',
        description: ''
    }
})

export const filterQueryAtom = atom({
    key: 'filterQuery',
    default: ''
})

export const todoState = atom({
    key: 'todoState',
    default: 'unfiltered'
})

export const todosToDisplay = selector({
    key: 'todoToDisplay',
    get: ({get})=>{
        const state = get(todoState)
        const todos = get(todoAtom)
        if(state === 'filtered'){
            return todos
        } else{
            const filteredTodo = get(todoFilterList)
            return filteredTodo;
        }
    }
})

export const todoFilterList = selector({
    key: 'todoFilterList',
    get: ({get})=>{
        const todos = get(todoAtom)
        const query = get(filterQueryAtom)

        return todos.filter(todo => todo.title.includes(query) || todo.description.includes(query))
    }
})
