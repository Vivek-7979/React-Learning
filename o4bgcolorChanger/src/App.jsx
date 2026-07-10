import { useState } from 'react'
import './App.css'

function App() {
//                                                 Yellow is the default state 
  let [color , setColor] = useState("yellow")   // changing the state (bg color of the whole page) updating UI when some task is performed . 
  
// Selecting the document's whole body by queery selector and storing it in a variable ( pure Vanilla JS )  
const body = document.querySelector('body')
body.style.backgroundColor=color             // passing the color(variable) that has the function setColor ( which is returning a specific value )       

  return (
    <>
     <div className='mainDiv'>   {/*  This is the div that is containing the all button */}

      <button className='btns' style={{backgroundColor: 'red'}}    onClick={() => setColor("red")}> Red </button>       {/* On clicking the button the setColor function will return the vlaue red(or respective color button's color ) to the color variable that is inside the body's backgroundColor that will change the whole color */}
      <button className='btns' style={{backgroundColor:'green'}}   onClick={() => setColor("green")}> Green</button>
      <button className='btns' style={{backgroundColor:'grey'}}    onClick={() => setColor("grey")}> Grey </button>
      <button className='btns' style={{backgroundColor:'pink'}}    onClick={() => setColor("pink")}> Pink</button>
      <button className='btns' style={{backgroundColor:'orange'}}  onClick={() => setColor("orange")}> Orange</button>
      <button className='btns' style={{backgroundColor:'purple'}}  onClick={() => setColor("purple")}> Purple</button>
      <button className='btns' style={{backgroundColor:'blue'}}    onClick={() => setColor("blue")}> Blue</button>
      <button className='btns' style={{backgroundColor:'black'}}   onClick={() => setColor("black")}> Black</button>
      <button className='btns' style={{backgroundColor:'olive'}}   onClick={() => setColor("olive")}> Olive</button>
      
      </div>
    </>
  )
}

export default App
