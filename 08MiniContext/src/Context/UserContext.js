// here we will create a Context . Context is nothing but like "Global Variable" which can be accessed by (everyone) any element in the application .
// Eh data kisi bhi component vich send krne de bhhi kaam aunda and . kisi bhi component vich data isde vicho recive krne de bhi vich kaam aunda 
import React from "react";

const UserContext = React.createContext()  // React creates the context as context is the part of the react .

export default UserContext ;

