import React, { PureComponent } from 'react'
import shortid from 'shortid'

export default class toDoForm extends PureComponent {
    state = {
        text: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        this.setState({
            text: "" 
        })
    }
    
    render() {
        console.log(this.state.text)
        return (
            <form onSubmit={this.handleSubmit}style={{display:'flex',justifyContent:'center'}}>
            <input
                name = 'text' 
                value = {this.state.text} 
                onChange = {this.handleChange} 
                placeholder = 'add todo'></input>
                <button onClick={this.handleSubmit}>añadir toDo</button>
            </form>
        )
    }
}
