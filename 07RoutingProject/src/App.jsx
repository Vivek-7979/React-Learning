import './App.css'

import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import User from './Components/User'
import Github from './Components/Github'

function App() {


 

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />     {/* it will stay coanstant  */}

      <main className="flex-1">

        { /* This mid-part will chnage and will perform routing [ This part may have Home , About or Contact ] . Rest header - footer will stay same . Inside the "Routes" -> The "routes" defined will be changed . */}
        <Routes>

          <Route path="/"              element={<Home />}    />
          <Route path="/about"         element={<About />}   />
          <Route path='/contact'       element={<Contact/>}  />
          <Route path='user/:userid'   element={<User/>}     />    {/* Taking Dynamic Data :- This is a path that take us to the specific user ( that can access by id - thats_vivek.79 , 2303652  etc by specific id ) . The specific id will display the specific data connected to that particular id . like - 2303652 => has own data , 2303645 => has own data etc . */}
                                                                   {/* Syntax path:'specific variable name' . So , by this we can access it in the User.jsx  . Example : user/ => path ; : (syntax) ; 'userid' => variable   */}
                                                                   {/* Note : ":" This double dot is important in this path .  And to go onto that specific id . Write   "  /user/123(or any id)   "      */}


          {/* We can directly call the fetch method here and can get the response inside loader . But , it is prefrred to create a method and then call it */}   {/* So , githubInfoLoader is a method  */}
         <Route     

            // loader= {() => {
            //   fetch('https://api.github.com/users/Vivek-7979') 
            //   .then( response => response.json())
            //   .then(data => setdata(data)) 


            // }}   

            path='/github'    
            element={<Github />}  />   { /* We can pass 1 more attribute here that is loader */} {/* It is one step more optimized as when we hover on the github text it started fetching data and keep the fetched data in the cache . */}
  
  </Routes> 
   </main> 


      <Footer /> {/* It will stay fixed and dont change while the page will routes only the inside elements ( about , contact us and home ) */}
    </div>
  )
}

export default App
