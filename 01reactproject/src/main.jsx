import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// creating a own react element or object by using the react feature :

// Method 1 : Creating a react element by using the react feature (i.e. by using the react library) and showing in the document / webpage
const reactElement = (                                  // creating a own react element or object by using the react feature 
  <a href="https://www.google.com" target="_blank">     {/* Proper syntax that is provided by the react creators to create a element by own ( eh ohni hi define krke dita wa syntax apni library vich is vich apa kuch ni kr ksde ) */}
    Click me to visit google
  </a>
)


// Method 2 : This is method provided by the react library itself to create a react element { eh banane da syntax ihna neh hi define kita wa is vich apa kuch ni kr skde .. proper ehi use krna pena }
const reactElement2 = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to visit google'
)                                 


createRoot(document.getElementById('root'))
.render(                                     

  <StrictMode>
    
    <App />
   {reactElement}           
   {reactElement2}

  
  </StrictMode>
)

 {/* .render => is a method in the react-dom libraray that do some task . and it is defined by the creators od react */}
{/* At the end this is a function . So , <App/> = App() */}
    
 