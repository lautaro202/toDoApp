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
    onComplete = id => {
        this.setState( state => ({
            todos: state.todos.map(todo =>{
                if (todo.id === id) {
                    return {
                        text: todo.text,
                        id: todo.id,
                        complete : !todo.complete
                    }
                }else {
                    return todo
                }
            })
        }))
    }
    render() {
        return (
            <div>
            <ToDoForm onSubmit={this.addTodo}/>  
            {this.state.todos.map
                 (todo => ( 
                     <ToDo 
                     key={todo.id} 
                     todo={todo}
                     onComplete ={() => this.onComplete(todo.id)}
                     />
                 ))}
            </div>
        )
    }
}
