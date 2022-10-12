import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Books from '../Pages/Books';
import Songs from '../Pages/Songs';
import Movies from '../Pages/Movies';
import ContactUs from '../Pages/ContactUs'


export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='books' element={<Books />} />
                <Route path='songs' element={<Songs />} />
                <Route path='movies' element={<Movies />} />
                <Route path='contactus' element={<ContactUs />} />
            </Routes>
            <Footer />
        </Router>
    );
}