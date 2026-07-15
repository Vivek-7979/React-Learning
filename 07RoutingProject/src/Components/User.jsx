import React from 'react'
import { useParams } from 'react-router-dom'    // This hook (userParams) is important because It gives us access of the "variable in the path"

function User() {

const {userid} = useParams()  // Accessing the userid from the path by the help of useParams hook - that is provided in the react-router-dom .

  return (
    <div style ={{backgroundColor:'#212121', color:'white', padding:'30px',  height:'70vh',textAlign:'center'}}
    >
      <h1> User : {userid}</h1>     {/* Accessing the data of that particular userid . like [ It can be 2303652 => It will hvae its own coustom data , 2303645 => will have own diff data ]*/}
   
    </div>
  )
}

export default User
