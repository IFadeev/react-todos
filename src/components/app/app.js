import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddPanel from '../add-panel';

import './app.css';

class App extends Component {

  newID = 4;

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, done: false, id: 1 },
      { label: 'Make Awesome App', important: false, done: false, id: 2 },
      { label: 'Have a lunch', important: false, done: false, id: 3 }
    ]
  }

  deleteItem = id => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex(item => item.id === id);

      const newArray = [...todoData.slice(0, idx), 
                        ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      }
    })  
  }

  addItem = label => {
    const newTodo = {label: label, important: false, id: this.newID++}

    this.setState( ({todoData}) => {

      const newArray = [newTodo, ...todoData]

      return {
        todoData: newArray
      }
    })

    console.log(`Added: ${label}`)
  }

  onMarkImportant = id => {
    console.log(`Toggle Impo ${id}`)
  }

  onMarkDone = id => {
    console.log(`Toggle Done ${id}`)
  }

  render() {

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos           = {this.state.todoData} 
                  onDeleted       = {this.deleteItem} 
                  onMarkImportant = {this.onMarkImportant} 
                  onMarkDone      = {this.onMarkDone}/>
                  
        <AddPanel todoData        = {this.state.todoData} onAdded = {this.addItem}/>
    
      </div>
    );
  };
  }

 

export default App;
