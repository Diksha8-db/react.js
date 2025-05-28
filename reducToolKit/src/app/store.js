// configure store
import {configureStore} from '@reduxjs/toolkit'

// knowledge of reducer
import todoReducer from '../features/todo/todoSlice'
// configureStore usually takes a object
export const store = configureStore({
    reducer: todoReducer
})

