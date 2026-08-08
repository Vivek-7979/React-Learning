import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/Todo/todoSlice'

function AddTodo() {

const [input , setInput ] = useState ('')    // To update the input data in the input field ( input field /div in the form )
const dispatch = useDispatch()              // This is the react-redux feature that is used to Send the data to the " Store " [ i.e. Common area /global data ] 


// What the method "addTodoHandler" will do when it will called on the input button 
const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))    // addTodo is the reducer function 
    setInput('')
}

 return (

    // This is the readymade UI for the form for typing the Input this is talwind CSS just to make the UI look beautiful . Whether mainly fcous on the functionlaity 
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo