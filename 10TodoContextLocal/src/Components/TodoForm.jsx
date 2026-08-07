import React from 'react'
import { useState } from 'react'
import { useTodo } from '../Contexts/TodoContext'

function TodoForm() {

    // Functionality of the form is defined here .
     
     const [ todo , setTodo] = useState ("")  // todo for individual data 
     const { addTodo } = useTodo()
    
    const add = (e) => {
        e.preventDefault ()

        if (!todo) return  // if the todo is empty then return nothing .
    
         addTodo ({todo , completed:false}) // Hun itho todo (individual) value array vich add ho jani jake and app.jsx vich hai jo array . And completed hai ya nhi isda status itho send ho jana 
    } 

    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            
            // This is wiring ( injecting the functionlaity)
              value = { todo}  // todo => is the state variable which is used to store the value of the input field . 
              onChange = { (e) => setTodo(e.target.value)}  // setTodo => is the method of the useState hook which is used to update the state of the todo variable . Here , we are updating the state of the todo variable with the value of the input field .
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

