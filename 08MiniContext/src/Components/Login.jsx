import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext' // We will access the data from the UserContext (the global variable) in this file.

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // Sending the data to UserContext inside the setuser function.
  const { setuser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setuser({ username, password })
  }

  return (
    <div>
      

<h2>LogIn Form </h2>

<input 
type="text" 
placeholder='Enter Name'

value={username}
onChange={(e) => setUsername(e.target.value)}
 />

<br /> <br />

 <input
  type="password"
  placeholder='Enter Password'

  value={password}
  onChange={(e) => setPassword(e.target.value)}

  
  />

  <br /> <br />

  <button onClick = { handleSubmit }     style={{margin:'0 0 20px 50px'}}>    { /* Hun button click krne pr ik method run hona jo hai => handleSubmit  */}
    Submit 
  </button>


    </div>
  )
}

export default Login
