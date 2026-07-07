import React from 'react';                 // This is thte react library 
import ReactDOM from 'react-dom/client';   // This is the react-dom library which is used to render the react component in the browser .
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />            // This is basically a function inside the App.js that is returning the html for renderning in the browser .
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
