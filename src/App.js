import React,{useState,useEffect} from 'react'
import { Container } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

const App = () => {
  const [todos,setTodos] = useState([])

  useEffect(() => {
    const localtodos = localStorage.getItem("todos")
    if(localtodos){
      setTodos(JSON.parse(localtodos))
    }
  },[])

  const addTodos = async todo => {
    setTodos([...todos,todo])
  }
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
const completed = id => {
  setTodos(todos.filter(todo => todo.id !== id));
}

  return (
   <Container fluid>
     <h1>TO-DO-LIST</h1>
     <Todos todos={todos} completed={completed}/>
     <TodoForm addTodos={addTodos}/>
   </Container>
  )
}

export default App

