import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Overview from './Overview';
import Movies from './Movies';
import Header from "./components/Header"
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import TrendingMoviesPage from './TrendingMoviesPage';
import UpcomingMoviesPage from './UpcomingMoviesPage';
import MovieOfTheWeek from './MovieOfTheWeek';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header/>
    <Routes>
        <Route path='/' exact element={< Overview/>} />
        <Route path='/movies' exact element={< Movies/>} />
        <Route path='/trending-movies' exact element={< TrendingMoviesPage/>} />
        <Route path='/upcoming-premiers' exact element={< UpcomingMoviesPage/>} />
        <Route path='/movie-of-the-week' exact element={< MovieOfTheWeek/>} />
    </Routes>
    <Footer/>
  </Router>
);

