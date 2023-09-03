import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Overview from './Overview';
import Header from "./Header"
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header/>
    <Routes>
        <Route path='/' exact element={< Overview/>} />
    </Routes>
  </Router>
);

