import React, { Component } from 'react'
import ToDoForm from './toDoForm'
import ToDo from './toDo'

export default class ToDoList extends Component {
    state={
        todos:[]
    }
    addTodo = todo =>{
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }
    render() {
        return (
            <div>
            <ToDoForm onSubmit={this.addTodo}/>  
            {this.state.todos.map
                 (todo => ( 
                     <ToDo key={todo.id} text={todo.text}/>
                 ))}
            </div>
        )
    }
}
