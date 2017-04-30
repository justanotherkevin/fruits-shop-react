import React from 'react';
import ToDoList from './ToDoList.jsx'
const todos = [
  {
    task: 'make stuff',
    isCompleted: false
  },
  {
    task: 'make more stuff',
    isCompleted: true
  }
]


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>helloo</h1>
        <ToDoList/> 
      </div>
    );
  }
}
