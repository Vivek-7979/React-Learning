import { useState } from 'react'
import Vivek from './Vivek';



function App() {

const variableName ='Evaluated  expression of js code i.e. final output of js '  // Js code and to acess this variable  use the curly braces { } 

  return (
    
<>     {/* This empty tag is known as fragmentation bcz jsx has rule you have to wrap a jsx component and it can return only one component . So , we wrapped all this in the fragment and it works (by even not breaking the rule of jsx ) */}
 

 {/* Returning the component (i.e. a component) as it is a component made by my own . */}
<Vivek/> 
          {/* // This is the component which is imported from Vivek.jsx file and runned successfully in app.jsx file. (i.e. this is the way to import and use your own made component in react environment) */}



    {/*  A very simple code execution in react environment (Returning html by own in second return statement of app.jsx file) */}

  <h1> Hey! This is the larning of React journey {variableName} </h1> {/*// this will show in webpage as like in html */}

   {/* Main folder hai app.jsx and main.jsx bssss ..... (baki teh cherry on top hai ; and note they are js . And run project mainly main.jsx vicho hunda ) */}
  </>
  );
}
  


export default App
