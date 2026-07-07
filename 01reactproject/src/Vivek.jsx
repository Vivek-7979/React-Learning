// Mein apne kol toh kuch bhi file bna reha teh ohnu app.jssx ch import krke chla bhi reha . bcz , at the end they are function returning html

function Vivek(){
   return( <h4>Here , this is my own made component imported in app.jssx and runned successfully ! .</h4>
)}

// Note : 1.] Function's name should be capitalized (i.e. first letter should be capital) otherwise it will not work and show error in console. 
//        2.] Function should return only one component (i.e. one html tag) otherwise it will show error in console.
//        3.] Function should be exported to use in other file (i.e. app.jsx file) otherwise it will show error in console.
//        4.] File name should bs .jsx not .js it it returning the html just like in this file Vivek.jsx


//         B.] File name should be captialized ( but it is not compulsory )
//         {  vite react is more sttricter than >  pure react } . As , this strictness is defined by the vite developers .
// And React is SPA ( because ik hi html file hai sade kol = document . us vich hi js pa rehe manupulate kr rehe (and ik hi div hai apne kol index.html de vich => 'root'))
export default Vivek