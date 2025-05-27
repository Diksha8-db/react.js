import { createContext, useContext } from "react";

// read, edit, complete, toggle functionalities will be stored in objects which will be a part of array

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


// exporting the context to be used
export const useTodo = () => {
    return useContext(TodoContext)
} 

// exporting provider
export const Todoprovider = TodoContext.Provider
