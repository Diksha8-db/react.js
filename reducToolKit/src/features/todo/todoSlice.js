// nanoid just generates new id 
import { createSlice, nanoid} from "@reduxjs/toolkit";

// initailly store kaisa dikhega
const initialState = {
    todos: [
        {
            id:1,
            text:"Hello World",
        }
    ]
}

// slice is a function like reducers whichj is a function


// contextAPI me hum function ka definition likhte the but in redux we need to decalre and define the funtion

// with the properties you get acccesss to two things: state, action

export const todoSlice = createSlice({
    name: 'todo',
    initialState, // upar dekho
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },

        updateTodo: (state,action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, text:"Diksha"} : todo)
        }
    }
});

export const { addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer