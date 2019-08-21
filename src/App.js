import React from 'react';
import './App.css';
import { TodoApp } from './TodoApp'

function App() {
  const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
          {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];
 
  return (
    <div className="App">
      <TodoApp items={todos}/>
    </div>
  );
}

export default App;
