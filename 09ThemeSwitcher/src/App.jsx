import { useState , useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'




function App() {

  const [ themeMode , setThemeMode ] = useState('light') // it wil l update the state of theme - dark / light 
 
 // The methods we had defined in themeBtn what they will do  is defined here  .
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  // How actual change in theme will occur :

  useEffect(() => {
    const root = document.documentElement     // selecting the document and then docuent element that is the div inside which we have to changt the theme .

    root.classList.remove('light', 'dark')    // jo bhi hona remove krdo chae light chae dark 
    root.classList.add(themeMode)             // add krdo theme mode jehra nhi c . je light remove kita teh darkTheme add krna vice-versa .
  }, [themeMode])
 

  return (
    <ThemeProvider value={{themeMode , lightTheme , darkTheme }}>   {/* Here , we have defined the Context(global variable) now all the things inside it can access it . But , they can the acess the values that are defined in the value={{ only these values can be acceseed }} only  */}


      <div className='flex flex-wrap min-h-screen items-center'>

        <div className='w-full' >

          <div className='w-full max-w-sm mx-auto flex justify-end mb-4 '>  

            <ThemeBtn/>   {/* Theme btn component is loaded here . */}

          </div>
          
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4' >   <Card/>  </div>

        


        </div>

      </div>


    </ThemeProvider>
  )
}

export default App
