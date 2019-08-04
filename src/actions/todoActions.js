import { FETCH_TODOS, NEW_TODO, DEL_TODO, EDIT_TODO} from './types';

export const fetchTodos = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(todos => {

    dispatch({
      type: FETCH_TODOS,
      payload: todos
    })
  })
}

export const createTodo = todo=> dispatch => {

  dispatch({
    type: NEW_TODO,
    payload: todo
  })
};

export const deleteTodo = todo=> dispatch => {
  
  dispatch({
    type: DEL_TODO,
    payload: todo
  })
};

export const editTodo = (id, editedTodo)=> dispatch => {
  
  dispatch({
    type: EDIT_TODO,
    payload: {"id": id, "edited": editedTodo} 
  })

};