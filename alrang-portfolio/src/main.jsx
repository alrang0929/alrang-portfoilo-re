import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// export default한 결과물
createRoot(document.getElementById('root')).render(
  //StrictMode = 엄격모드 
  <StrictMode>
    <App />
  </StrictMode>,
)
