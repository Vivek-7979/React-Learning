import { useState , useEffect } from 'react'

import './App.css'
import { TodoProvider } from './Contexts' // hun sanu sari files import nhi krni peyie bcz - iko apa import krleya folder directly and  index file hi load honi jis vich already saare contexts ge 
import { TodoForm, TodoItem } from './Components'

function App() {
  const [todos , setTodos] = useState([])   // todos => is the set of all elements in the array that has the all todo items ..


  // Defining that what will the "addTodo" function will do .
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  // Updating the todo (id, updatedTodo)
  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, ...updatedTodo } : prevTodo)))
  }
  

    // Definong the work of the " deleteTodo " method .
    const deleteTodo = (id) => {
      setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id))
    }

    // Defining  the work of the toggle complete method 
    const toggleComplete = (id) => {
      setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)))
    }
  
   // Now , we will use the feature of the local storage ( browser's storage ) . For storing the written / defined todo item by the user . SO , WHEN THE PAGE IS REFRESHED OR RELOADED THE DATA OF THE TODO IS NEVER LOST .
   
   // Getting the updated data 

   useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos"))

    if (stored && stored.length > 0) {
      setTodos(stored)
    }
  }, []) // empty dependecy means it will only run once when the page is loaded 
   
   
   // Setting the updated data 
  useEffect(() => {
   localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (


    
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>  

    {/* Todo Provider Provide krya kr context but kehra context . Their values are defined here which values are provided by todo provider  */}

     

    <div className="bg-[#172842] min-h-screen py-8">

                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        
                        <TodoForm />
                  
                    </div>

                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                          
                        {/* Each todoItem is mapping by map function as it will be stored in array and after looping it will be displayed in one the page inside the div  */}

                        {todos.map((todo) => (
                          <div key={todo.id} className="w-full">
                            <TodoItem todo={todo} />
                          </div>
                        ))}

                    </div>

                </div>
            
            </div>

{/* This is the readymade UI of the main App file  */}

    </TodoProvider>
  )
}

export default App
