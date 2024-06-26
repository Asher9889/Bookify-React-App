import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirebaseProvider } from './firebase/FirebaseContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>,
)
