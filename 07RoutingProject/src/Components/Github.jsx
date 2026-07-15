import React, { useEffect, useState } from 'react'
//import { useLoaderData } from 'react-router-dom' // It makes the loader accessing the method inside this file possible 


function Github() {


    // const data = useLoaderData()    // inside the data variable the response that the gitinfoLoader method is returning from app.jsx is stored inside the 'data' variable




// Method 1 :-    WORKING (     But , not OPTIMISED )   
// This is fetch api method by using useState and useEffect hooks . But , this is not optimize approach  . As , when we click on the Github text only then it start the process ( like - then it will send request get the data from the github ) . It takes time and our component may be lagged by 1 second ... 


const [data , setdata ] = useState([])                 // to setting the data in the data variable ( or state )

// We used useEffect hook because when we call this component Github(by clicking on github text in the nvaigation bar) . So , the method(fetch) will start running || 

useEffect(() => { 
fetch('https://api.github.com/users/Vivek-7979')        // This is a github api . we can access any user's public info by The usename in the end . Like -'vivek-7979' in this ! 
.then( response => response.json())                     // converting the data into json format 
.then(data => setdata(data))                            // setting the data in the state/variable  ( => data )
},[])






  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>

      Github followers :     {data.followers}                                     {/* It will give the real time followers of that account  */}  {/* To want followers here we should have github api . And getting dat from state and by api accesing by .follwers , .avatar_url etc   */}
     <img src={data.avatar_url}  alt="Github profile photo" width={400} />        {/* It will give the profile picture of github */}
   
    </div>
  )
}

export default Github


// Method 2 : It is optomzed but it has some other syntax like - loading the outlet in the app.jsx , and then importing the loader and all 
// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/Vivek-7979')
//     return response.json()
// }
