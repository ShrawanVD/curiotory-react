import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProgressBar from './components/ProgressBar/ProgressBar.jsx'
import AnimCursor from './components/AnimatedCursor/AnimCursor.jsx'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProgressBar/>
    <AnimCursor/>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
