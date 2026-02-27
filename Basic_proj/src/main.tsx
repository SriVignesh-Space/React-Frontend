import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LoginContext from './context/LoginContext.tsx'

createRoot(document.getElementById('root')!).render(
  <LoginContext>
    <App />
  </LoginContext>,
)
