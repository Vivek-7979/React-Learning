import { useState } from 'react'

import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'


function App() {
  

  return (
    <UserContextProvider>   {/* Here , we are importing the file - UserContextProvider and wraaping all the application in it . So , that every element or whatever inside this UserContextProvider can access the data from the UserContextProvider file ( this just works like a global variable) */}
     
  <div style={{ width:'95vw' , height:'70vh' , display:'flex' , justifyContent:'center' , alignItems:'center' , flexDirection:'column' ,backgroundColor:'#212121' , color:'white'  }}>
  <h1>Hey !  Bitch </h1>

  <Login/>      { /* Login comonent imort kr dita sidha - jis vich data handle ho reha userContext vicho  */}
  <Profile/>    {/* Profile component import krvaleya - jis vich sara data vgera sara apa handle kr aye ve sirf is vich apa import hi krvana */}
    </div> 
    </UserContextProvider>
  )
}

export default App
