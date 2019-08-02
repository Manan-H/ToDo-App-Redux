import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import AllTodos from './components/AllTodos';
import Todo from './components/Todo';
import EditTodo from './components/EditTodo';
import AddTodo from './components/AddTodo';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
