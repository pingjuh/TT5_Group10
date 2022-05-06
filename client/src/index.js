import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
// import Register from './Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/*" element={<App />} />
        <Route path="/Signin" element={<Signin />} />
        {/* <Route path="/Register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

