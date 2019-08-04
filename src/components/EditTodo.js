import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class EditTodo extends Component {


    render() { 

        return ( 
            <div>
                
              <input name="edited" value={this.props.edited} onChange={this.props.onChange}
               placeholder={this.props.todos[this.props.id].title} /> 

              <Link to = "/">
                <button onClick={() => this.props.editTodo(this.props.id)}>Save Changes</button>
              </Link> 
              
            </div>
         );
    }
}



export default EditTodo;


