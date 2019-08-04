import React, { Component } from 'react';
import {Link} from 'react-router-dom';


function Todo({ todo, index, onDelete}) {
    return (
        
        <li>
            <span>{todo} </span> 
            <Link to = {`/edit/${index}`}>
                <button className = "btn btn-primary">Edit</button>
            </Link> 
            <button className = "btn btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
        </li>

        

    )
}
 
export default Todo;