import { useState } from 'react'           // To use the hooks inside the react we have to import the use state
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // hooks = If some variable is updating at one place in document . It will update in every place in document that same variable . jithe - jithe oh exsist krda . { bcause = manually update karna har jgah bhot hi tough hona . like - first query selector , creating element , updating it appending it all tasks we have to do in vanilla js . Now , react does that for us }
  // counter = variable name(we can give any name to it ) , setCounter = function updating value(variables - we can give any name to it ) , useState(default/starting value) = doing the hooks task(i.e. updating counter variable everywhere ) 

let [counter , setCounter] = useState(1)

const addValue = () => {                    // A f(x) that is doing some task = increasing the value (updation)
if(counter === 20){                         // Now , the value will not go above 20
  return
}
 setCounter(counter + 1)
 console.log(' add value clicked' , counter);
}

const removeValue = () => {
  if(counter === 0){                        // now value will not go below 0 and the button will no longer work
    return
  }
  setCounter( counter - 1)
}

  return (
    <>
   
<h1>Vivek's Projecct </h1>
<h4>Counter value : {counter}</h4>  

<button
onClick={addValue}>       { /* On clicking on this button addValue function is called that is doiing some increment task */}
   Add value {counter}    
</button>

<button
onClick={removeValue}> Remove Button { counter }</button>
<p>Updated value : {counter}</p>


  </> )
}
// addValue function = increasing the value by 1 , and removeValue decreasing by 1 { the setCounter is the useState ( hooks) f(x) that is updating the variable everywhere in the document }
// We are injecting the variable by using { }

// Problem that is solved by useState(hooks) => Is that the value is updating in the UI everywhere , where the variable is present that is hooked || 


export default App


//  is vich hi apa apni jsx(html +js) likhde 