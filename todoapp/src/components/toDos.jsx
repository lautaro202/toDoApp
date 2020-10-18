import React, { Component } from 'react'
import ToDoForm from './toDoForm'
import ToDo from './toDo'

export default class ToDoList extends Component {
    state={
        todos:[],
        toDosToShow: 'all',
        toggleAllComplete: true
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
    onDelete = id => {
        this.setState( state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }))
    }
    showLeftTodo = () => {
        this.setState( state => ({
            todos: state.todos.filter(todo => !todo.complete)
        }))
    }


    updateToDoToShow = (s) => {
        this.setState({
            toDosToShow: s
        })
    }


    render() {
        let todos = [];
        if (this.state.toDosToShow === 'all') {
            todos = this.state.todos;
        }
        else if (this.state.toDosToShow === 'active') {
            todos = this.state.todos.filter(todo => !todo.complete);
        }
        else if (this.state.toDosToShow === 'complete') {
            todos = this.state.todos.filter(todo => todo.complete);
        }


        return (
            <div>
            <ToDoForm onSubmit={this.addTodo}/>  
            {todos.map(todo => ( 
                <ToDo 
                key={todo.id} 
                onComplete ={() => this.onComplete(todo.id)}
                onDelete = {() => this.onDelete(todo.id)}
                todo={todo}
                />
            ))}<div style={{display:'flex',justifyContent:'center'}}>
                 <div>
                     todos left: {this.state.todos.filter(todo => !todo.complete).length}
                 </div>
                 <div>
                    <button
                        onClick={() =>
                        this.updateToDoToShow('all')}>
                            Todos:
                    </button>
                    <button
                        onClick={() => 
                        this.updateToDoToShow('active')}>
                            Activos:
                    </button>
                    <button 
                        onClick={() => 
                            this.updateToDoToShow('complete')}>
                            Completados:
                    </button>

                 </div>
                 {this.state.todos.some(todo => todo.complete) ? (
                 <div>
                    <button 
                        onClick={
                            this.showLeftTodo}>
                            remove all todos completes
                    </button>
                 </div>
                 ): null }
                 <button onClick={() => {
                     this.setState({
                         todos: this.state.todos.map(todo => ({
                             ...todo,
                             complete: this.state.toggleAllComplete
                         })),
                         toggleAllComplete: !this.state.toggleAllComplete 
                     })
                 }}>
                     toggle all complete: {`${this.state.toggleAllComplete}`}
                 </button>
                 </div> 
            </div>
        )
    }
}
