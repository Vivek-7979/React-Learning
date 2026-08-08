import { Provider } from 'react-redux'
import {store} from './App/Store' 
import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {
  

  return (

   //  Here , we are giving the value to the provider as saying it the store rather than the value 
    <Provider store={store}>

    <h1 className="text-3xl font-bold underline text-center mt-12">
    Learning the Redux - toolkit by the Todo application 
  </h1>
  <AddTodo/>
  <Todo/>
    </Provider>
  )
}

export default App
