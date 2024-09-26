import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootRender = document.getElementById('root')
const root = createRoot(rootRender)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
