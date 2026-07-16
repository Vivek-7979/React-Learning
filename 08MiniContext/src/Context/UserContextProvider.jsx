import React from 'react'
import UserContext from './UserContext'


// UserContext :->  Eh data kisi bhi component vich send krne de bhhi kaam aunda and . kisi bhi component vich data isde vicho recive krne de bhi vich kaam aunda



const  UserContextProvider = ( ({children}) =>          // This UserContextProvider is nothing but just a Method [ Where childern is a data that we are passing in it and it will passed forward as it is ]
     {

    const [ user , setuser ] = React.useState('')

    return(
        <UserContext.Provider value={ { user , setuser } }>   {/* We are wrapping the data = {childern} inside the UserContext.Provider . Where every value that we want to access is passed in its props ( like - data from API , cookies etc ) */}

            {children}

        </UserContext.Provider>
   
    )

})

export default UserContextProvider; 