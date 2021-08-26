import React from 'react'
import { Form, Button} from 'react-bootstrap'
import './TodoForm.css';

export default function TodoForm({ todoName, setTodoInput, todoItems, setTodoList }) {
  return (
    <div className="todo-parent-container">
      <div className="todo-container" >
        <div className="todo-text-input" >
          <Form.Control value={todoName} type="text" placeholder="e.g. Feed my doggo" onChange={(e) => {
            setTodoInput(e.target.value)
          }} />
        </div>
        <div>
          <Button variant="outline-secondary" onClick={() => {
            if (!todoName) {
              return;
            }
            
            setTodoList([
              ...todoItems, 
              {
                todoName, 
                completed: false,
                id: Math.random() * 100
              }
            ])
            setTodoInput('');
          }}>Add</Button>
        </div>
      </div>
    </div>
    
  )
}
