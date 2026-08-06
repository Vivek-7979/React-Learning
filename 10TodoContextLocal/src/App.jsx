import { useState } from 'react'

import './App.css'
import { TodoProvider } from './Contexts' // hun sanu sari files import nhi krni peyie bcz - iko apa import krleya folder directly and  index file hi load honi jis vich already saare contexts ge 

function App() {
  const [todos , setTodos] = useState([])   // todos => is the set of all elements in the array that has the all todo items ..


  // Defining that what will the "addTodo" function will do .
  const addTodo = (todo) =>{
    setTodos((prev)=> [[{id:Date.now() , ...todo}] , ...prev])
  
  
    const updatedTodo = (todo , id) => {
      setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
    }
  
  
  }

  return (


    
    <TodoProvider value={{todo ,addTodo ,updatedTodo ,deleteTodo , toggleComplete}}>  

    {/* Todo Provider Provide krya kr context but kehra context . Their values are defined here which values are provided by todo provider  */}

     

    <div className="bg-[#172842] min-h-screen py-8">

                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>

                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>

                </div>
            
            </div>

{/* This is the readymade UI of the main App file  */}

    </TodoProvider>
  )
}

export default App
