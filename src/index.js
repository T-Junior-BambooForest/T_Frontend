import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const meta = document.createElement('meta')
meta.name = 'google'
meta.content = 'notranslate'
document.body.style = 'background: #242424;';
document.getElementsByTagName('head')[0].appendChild(meta)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
