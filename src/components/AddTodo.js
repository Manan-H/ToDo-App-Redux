import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions/todoActions';


class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: ''
        };
        this.onChange = this.onChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
      }

    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      addTodo(e) {
        e.preventDefault();
        const todo = {
          title: this.state.title,
        };
    
        this.props.createTodo(todo);
        this.setState({title: ""});
      }

    render() { 
        return ( 
            <div>
            <input name="title" onChange={this.onChange} value={this.state.title} />
            <button onClick={this.addTodo}> Add Todo </button>
            </div>
         );
    }
}
 

const mapStateToProps = state => ({
    newTodo: state.todos.item
  });

export default connect(mapStateToProps, { createTodo })(AddTodo);