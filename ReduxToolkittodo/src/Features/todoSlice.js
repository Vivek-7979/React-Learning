import { createSlice , nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos : [ { id : 1 , text : '1st task '}]  // This tells us that how will bw the intitally the todo item will look alike [ like - what it will be having ]
}


export const todoSlice = createSlice (

    {
        name : 'todo',
        initialState,    // that initially how will bw the first todo will look alike 
        reducers : {  
            // The reducer will give two values state and action . state = what data , action = what on data 
            addTodo : ( state , action ) =>{
                const todo = {
                    id: nanoid(),   // This pre-built function just generates a unique id
                    text: action.payload
                }
                state.todos.push(todo)
            },

            removeTodo: ( state , action ) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            },
        }
    })

    export const { addTodo , removeTodo } = todoSlice.actions   // We have to export the individual functionality separately as they work separately .

    export default todoSlice.reducer 