import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { BrowserRouter as Router } from 'react-router-dom'

const root = document.getElementById('root');

function adjustPageHeight():void {
  root!.style.height = window.innerHeight + "px";
}

window.addEventListener('resize', adjustPageHeight);
window.addEventListener('scroll', function() {
  root!.style.height = '100vh';
});

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
