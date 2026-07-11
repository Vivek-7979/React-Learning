// Sara kaam apna is vich hi hundaa 
// Optimal way of generating a random strong pass ( not just a way . But OPTIMAL !)
// learnt : useState hook , useCallback hook , useEffect hook and created a random password generator from them ...

import { useCallback, useEffect, useState ,useRef } from 'react'

import './App.css'

function App() { 
  // JS here : 

  // All the variables whose state will be changed(like - value will change on clicking them) and some task will happen
  // useState : Hook { const [state , setState] = useState } : - [ har jagah ihne state nu update kardena , seState f(x) naal ; jado state ik jgah run hona matlab update hona ]

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  // usRef hook :
  const passwordRef = useRef(null)  // default value of this is null 

  // This password generator method will be called again and again . Even when we click number , characters or lenght .
  // useCallback (fn , [dependencies])    :- Hook
  // useCallback :- Has the feature of memoization(remembering the data and not only running it )
  //                When it is called it save the depemdemcies im the browser's memeory and display it on webpage ( stores it )
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (characterAllowed) str += '!@#$%^&*()_?`~{}'

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed , setPassword]) // useCallback dependencies : optimize karo is nu cache memory vich rakho  


  const copyPasswordToClipboard = useCallback(() => {
    if (!password) return

    passwordRef.current?.focus()
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, password.length)

    window.navigator.clipboard.writeText(password)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }, [password])


  // useEffect( f(n) , [ dependencies ]) : Hook
   useEffect(() => {
    passwordGenerator()  // It calls one time by default when the page runs / reloads . Again when lenght etc value changes it again runs 
  }, [length, numberAllowed, characterAllowed])  // useEffect Dependencies : je cher-char howe tina vicho teh fir toh run kro  ( matlab passwordGenerator di value ihna pr depend kardi) ; je lenght naal cher-char kiti teh fir toh passwordGenerator method run hona , numberAllowed and charAllowed pr bhi .... 
  


  return (
    <>
   <h1 style={{textAlign:'center',color:'white'}}>Password Generator </h1>

<div style={{height:'60vh',width:'448px',borderRadius:'15px', color:'orange', backgroundColor:'black',margin:'20px auto 150px auto' , padding:'20px' }}>
   
   <div style={{overflow:'hidden' , display:'flex' , justifyContent:'center'}}> 
    <input style={{width:'450px', margin:'30px '}}
    type="text" 
    value={password} 
    placeholder='Password'
    readOnly
    ref={passwordRef}/>  

    <button
      onClick={copyPasswordToClipboard}
      disabled={!password}
      style={{
        height: '40px',
        margin: '30px',
        minWidth: '80px',
        backgroundColor: copied ? '#2e7d32' : '#4285F4',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: password ? 'pointer' : 'not-allowed',
      }}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
</div>


<div >
  <div style={{padding:'25px'}}>
    <input type="range"
    min={8}
    max={65}
    value={length}
    onChange={(e) => {
      setLength(Number(e.target.value))
    }}
    /> <label > Length : {length} </label>
  </div>

  <div style={{padding:'25px'}}>
    <input type="checkbox"
    defaultChecked={numberAllowed}
    id='numberInput'
    onChange={() => {
      setNumberAllowed((previousValue) => !previousValue);
    }} />
    <label > Numbers</label>
     </div>

       <div style={{padding:'25px'}}>
    <input type="checkbox"
    checked={characterAllowed}
    id='CharacterInput'
    onChange={() => {
      setCharacterAllowed((previousValue) => !previousValue);
    }} />
    <label > Special Characters</label>
     </div>




</div>


   </div> 

    </>
  )
}

export default App
