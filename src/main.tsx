import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { BrowserRouter as Router } from 'react-router-dom'

const root = document.getElementById('root');

window.addEventListener('resize', () => {
  root!.style.background = "red";
  root!.style.height = window.innerHeight + "px";
});

window.addEventListener('scroll', () => {
  root!.style.background = "green";
  root!.style.height = '100vh';
});

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
