import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import data from "./assets/data/siteData.json"

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App data={data}/>
  </StrictMode>
  
)
