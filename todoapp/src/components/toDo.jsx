import React from 'react'
export default props => 
    <div 
    style = {{
        textDecoration : props.todo.complete ? 'line-through' : ''
    }}
    onClick = {props.onComplete}
    >
        
        {props.todo.text}

    </div>