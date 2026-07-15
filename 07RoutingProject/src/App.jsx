import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
