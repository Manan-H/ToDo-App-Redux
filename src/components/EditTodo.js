import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class EditTodo extends Component {

    render() { 
        console.log(this.props.value)
        return ( 
            <div>
                
              <input value={this.props.value}  onInput={this.props.getEditTodoInput}
               placeholder={this.props.data[this.props.id]} /> 

              <Link to = "/">
                <button onClick={() => this.props.saveEditedTodo(this.props.id)}>Save Changes</button>
              </Link> 
              
            </div>
         );
    }
}
 
export default EditTodo;