import { configureStore } from '@reduxjs/toolkit' ;
import todoReducer from '../Features/Todo/todoSlice' ;

export const store = configureStore({
    reducer : todoReducer              // We have to tell that which common methods / reducer functions we want 
})