/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = [];
  }

  add(todo){
    this.todos.push(todo)
  }
  remove(index){
    if(index>= this.todos.length ) return;
    this.todos.splice(index, 1)
  }
  update(index, updatedTodo){
    if(index>= this.todos.length ) return;
    this.todos.splice(index, 1, updatedTodo)
  }
  getAll(){
    return this.todos;
  }
  get(index){
    if(index>= this.todos.length ) return null;
    return this.todos[index]
  }
  clear(){
    this.todos = []
  }
}
const tasks = new Todo()
tasks.add('Task 1')
tasks.add('Task 2')
tasks.add('Task 3')
tasks.update(1, 'Updated Task 2')
console.log(tasks.get(1))


module.exports = Todo;
