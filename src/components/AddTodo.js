import React, { Component } from 'react';


class AddTodo extends Component {

    render() { 
        return ( 
            <div>
            <input value={this.props.value}  onInput={this.props.onInput} />
            <button onClick={this.props.addTodo}> Add Todo </button>
            </div>
         );
    }
}
 
export default AddTodo;