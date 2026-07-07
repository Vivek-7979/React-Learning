import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root'))
.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// So , kehn da bhaav ehi hai ki kaam dohve react library same hi kr rehi - vitereact bhi and purerReact bhi sirf fark ihna hai ki bss vite neh jo simple neh testing,scripts,build etc . files download kr lei c oh is vich nhi haiii ( hence , Vite is lightweight . Altough working is same )
