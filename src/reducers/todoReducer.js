import { FETCH_TODOS, NEW_TODO, DEL_TODO, EDIT_TODO} from '../actions/types';

const initialState = {
    items: []
}

export default function(state = initialState, action){

    switch(action.type){
        case FETCH_TODOS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_TODO:
            return Object.assign({}, state, {
                items: [...state.items, action.payload]
            })
        case DEL_TODO:
            return Object.assign({},{
                items: [...state.items.filter(todo => {
                    return todo.title !== action.payload.title
                    })]
                }           
            )
        case EDIT_TODO:
                return { 
                    ...state, 
                    items: state.items.map(
                        (todo, i) => i === action.payload.id ? {...todo, title: action.payload.edited} : todo
                    )
                }     
        default:
            return state;
    }

}