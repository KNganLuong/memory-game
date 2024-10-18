import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const rootRender = document.getElementById('root')
const root = createRoot(rootRender)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
