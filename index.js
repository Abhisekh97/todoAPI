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
    this.todo = []
  }
  add( task){
    this.todo.push(task)
  }
  remove(index){
    if (index>=0 && index<this.todo.length){
      this.todo.splice(index, 1)
    }
    
  }
  update(index, updatedTodo){
    if (index<this.todo.length && index>=0){
      this.todo[index] = updatedTodo
    }
  }
  getAll(){
    return this.todo
  }
  get(index){
    if (index<this.todo.length && index>=0){
      return this.todo[index]
    }
    else{
      return null
    }
  }
  clear(){
    this.todo.splice(0, this.todo.length);

  }

}




const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
app.use(bodyParser.json())
todo = new Todo()
app.post('/todo', (req, res) => {
  console.log(req.body)
  const operation = req.body.operation
  const what_to_add  = req.body.what_to_add
  if (operation==="add"){
    todo.add(what_to_add)
    res.send(`item added ${what_to_add}`)
  }
  else if(operation ==="remove"){
    todo.remove("what-to-add")
    res.send(`item removed ${what_to_add}`)

  }
  else if (operation==="update"){
    todo.update("what-to-add")
    res.send(`item updated ${what_to_add}`)

  }
  else if (operation==="getAll"){
    todo.getAll()
    res.send(todo.todo)
  }
  else if (operation==="get"){
    res.send(todo.get(what_to_add))
    

  }
  else if (operation==="clear"){
    todo.clear()
    res.send("todo cleared")
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
