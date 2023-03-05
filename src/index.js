import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/Home/Home';
import IndyGo from './Pages/ProjectPages/IndyGo';
import Portfolio from './Pages/ProjectPages/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Routes>
          <>
            <Route path='/' element={<App />}></Route>
            <Route path='/indygo' element={<IndyGo />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
          </>
        </Routes>
      </>
    </BrowserRouter>
  </React.StrictMode>
);
