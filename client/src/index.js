import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
// import Register from './Register';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/*" element={<App />} />
        <Route path="/Signin" element={<Signin />} />
        {/* <Route path="/Register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

