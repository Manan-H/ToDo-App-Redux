import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo } from '../actions/todoActions';


class AllTodos extends Component {

    componentWillMount() {
        this.props.fetchTodos();
    }
    
    deleteTodo = (todo) => {
        this.props.deleteTodo(todo);
    }


    render() { 
        return ( 
            
            <div> 
                <ul>
                    {this.props.todos.map((todo, i) => {
                    return <Todo key={i} todo={todo.title} index={i} onDelete = {() =>this.deleteTodo(todo)}/>;
                    })}
                </ul>
            <AddTodo />
            </div>
         );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.items
  });

export default connect(mapStateToProps, { fetchTodos, deleteTodo})(AllTodos);
 
