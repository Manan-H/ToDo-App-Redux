import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';


class AllTodos extends Component {

    render() { 
        return ( 
            <div> 
                <ul>
                    {this.props.data.map((todo, i) => {
                    return <Todo key={i} todo={todo} index={i} onDelete = {this.props.deleteTodo}/>;
                    })}
                </ul>
            <AddTodo addTodo = {this.props.addTodo} onInput = {this.props.getAddTodoInput} value={this.props.value}/>
            </div>
         );
    }
}
 
export default AllTodos;