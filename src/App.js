import React, { useState } from 'react';
import './App.css';
import './Header';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

import { Container, Row, Col } from 'react-bootstrap';

export default function App() {
  const [todoName, setTodoInput] = useState('');
  const [todoItems, setTodoList] = useState([]);

  console.log(todoItems);
  return (
    <Container>
      <Header />
      <TodoForm 
        todoName={todoName} 
        setTodoInput={setTodoInput}
        todoItems={todoItems}
        setTodoList={setTodoList} />

      { todoItems.length ? <Row className="todo-list-container">
        <Col>
          <h4>To-dos</h4>
          { todoItems.length ? todoItems
            .filter(data => data.completed === false)
            .map((todo, key) => <TodoItem todos={todoItems} setTodoList={setTodoList} todo={todo} key={key} />) : ''}
        </Col>
        <Col>
          <h4>Completed To-dos</h4>
          { todoItems.length ? todoItems
            .filter(data => data.completed === true)
            .map((todo, key) => <TodoItem todos={todoItems} setTodoList={setTodoList} todo={todo} key={key} />) : ''}
        </Col>
      </Row> : ''}
    </Container>
  );
}
