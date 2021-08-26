import React from 'react';
import { Card, Button } from 'react-bootstrap'
import './TodoItem.css';

export default function TodoItem({ todo, todos, setTodoList }) {
  console.log(todos); 
  return (
    <Card className="todo-item-container">
      <Card.Body>
        { todo.todoName }
        <div className="todo-item-buttons">
          {!todo.completed ? <Button variant="success" size="sm" onClick={() => {
            todos = todos.map(item => {
              if (item.id === todo.id) {
                item.completed = true;
              }

              return item;
            });
            setTodoList(todos);
          }}>
            Finish
          </Button> : <Button variant="primary" size="sm" onClick={() => {
            todos = todos.map(item => {
              if (item.id === todo.id) {
                item.completed = false;
              }

              return item;
            });
            setTodoList(todos);
          }}>
            Redo
          </Button>}
          <Button variant="danger" size="sm" onClick={() => {
            todos = todos.filter(data => data.id !== todo.id).map(item => item);
            setTodoList(todos);
          }}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  )
}
