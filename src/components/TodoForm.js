import React,{useState} from 'react'
import {Form,Input,InputGroup,InputGroupAddon, FormGroup, Button} from 'reactstrap'
import {v4} from 'uuid'
import {GoDiffAdded} from 'react-icons/go'
const TodoForm = ({addTodos}) => {
    const [todoString,setTodoString] = useState("")
    const handlesubmit = e => {
        e.preventDefault()
        if(todoString === ""){
            return alert("Please enter your task")
        }
        const todo = {
            todoString,
            id:v4()
        }
        addTodos(todo)

        setTodoString("")
    }


    return (
        <Form onSubmit={handlesubmit}>
            <FormGroup>
                <InputGroup>
                <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Enter The Task"
                value={todoString}
                onChange={e => setTodoString(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                    <Button color="primary"><GoDiffAdded/></Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm
