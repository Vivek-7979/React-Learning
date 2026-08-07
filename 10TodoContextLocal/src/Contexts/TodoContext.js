import { createContext , useContext } from "react";

export const TodoContext = createContext({

    // In the common context we have to define the state and the function which we want to share across the components.
    // And it is the array that contains the object of the todos and the fuunction to update the todos. The function is defined in the parent component and passed down to the child components through the context.

    // Todo values 
    todos: [
        { id: 1, todo: "Learn React", completed: false },
    ],
  
    // Todo Methods : will do some that but what task they will do will be defined in the app.jsx 
    addTodo: (todo) => {},   // This is the function that will be used to add a new todo to the todos array. It is defined in the parent component and passed down to the child components through the context. And its functionality that what it will do will be defined in the child component . 
    updateTodo : (todo ,id ) => { },
    deleteTodo : (id) => { },
    toggleComplete : (id) => {}

});


export const  useTodo = () => {
       return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;