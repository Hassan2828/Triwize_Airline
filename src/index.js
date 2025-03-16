import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/js/bootstrap.bundle" 
import "bootstrap/dist/css/bootstrap.min.css" 

import './index.css'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);


// B Coder
// 11:42 AM
// git config --global user.name "Your New Username"
// git config --global user.email "yournewemail@example.com"
// B Coder
// 11:54 AM
// react-datepicker


