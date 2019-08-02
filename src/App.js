import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import AllTodos from './components/AllTodos';
import EditTodo from './components/EditTodo';


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      data: [
          "ToDo 1",
          "ToDo 2"
        ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        let data = [...this.state.data, ...todos.map((todo) => todo.title)];
        this.setState({ data });
      })
  }

  getEditTodoInput = (e) => {
    let input = e.target.value;
    this.setState({input});
  }

  saveEditedTodo = (index) => {
    let array = this.state.data;
    array[index] = this.state.input;
    this.setState({
        data: array,
        input: ''
    });
  }

  getAddTodoInput = (e) => {
    let input = e.target.value;
    this.setState({input});
  }

  addTodo = () => {
    this.setState({
        data: [...this.state.data, this.state.input],
        input: ''
    });
  }

  deleteTodo = (index) => {
    let array = this.state.data;
    let data = array.filter(item => item !== array[index]);
    this.setState({data});
  }


  render() {
    return (

      <Router>
        <Route path = "/" exact render={({match}) => (
          <AllTodos getAddTodoInput={this.getAddTodoInput} addTodo={this.addTodo}
          deleteTodo={this.deleteTodo} value={this.state.input} data={this.state.data}/>
        )}/>
        <Route path = "/edit/:id" exact  render={({match}) => (
          <EditTodo getEditTodoInput={this.getEditTodoInput} saveEditedTodo={this.saveEditedTodo} 
          value={this.state.input} id={match.params.id} data={this.state.data} />
        )}/>
      </Router>

    );
  }
}


export default App;
