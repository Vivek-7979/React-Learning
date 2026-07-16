import React , {useContext } from 'react'

import UserContext from '../Context/UserContext'

function Profile() {


const {user} = useContext(UserContext)   // userContext vicho apa userContexe(react hook) naal apa data(useername) leya krde [ GET krde paye ] 

  if (!user)  return  <div>   Please LogIn first </div>       // Je user nhi hai teh kaho - please login first 

 return  <div> Welcome  : {user.username} </div>             // je teh user hai teh user vicho(jo sanu UserContext vicho milya ) . Ohnu return krdo ithe .

}

export default Profile
