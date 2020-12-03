import React from 'react'
import {Button, ListGroup,ListGroupItem} from 'reactstrap'
import {AiFillDelete} from 'react-icons/ai'
const Todos = ({todos,completed}) => {
    return (
        <ListGroup className="mb-5 mt-2 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span className="float-right" 
                    onClick={() => completed(todo.id)}
                    >
                  <Button color="danger"> <AiFillDelete/></Button>     
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos
