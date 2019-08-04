import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import AllTodos from './components/AllTodos';
import EditTodo from './components/EditTodo';
import { connect } from 'react-redux';
import { editTodo } from './actions/todoActions';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      edited: ''
    };
    this.onChange = this.onChange.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }


  editTodo = (id) => {
    this.props.editTodo( id, this.state.edited);
    this.setState({ edited: ""});
  }

  onChange(e) {
    this.setState({edited: e.target.value });
  }

  render() {
    return (

        <Router>
          <Route path = "/" exact render={({}) => (
            <AllTodos />
          )}/>
          <Route path = "/edit/:id" exact  render={({match}) => (
            <EditTodo id={match.params.id} onChange={this.onChange} editTodo={this.editTodo} 
            edited={this.state.edited} todos={this.props.todos} />
          )}/>
        </Router>

    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.items
});

export default connect(mapStateToProps, { editTodo })(App);
