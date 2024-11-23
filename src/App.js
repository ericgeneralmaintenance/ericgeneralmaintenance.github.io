// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import BlogPage from './BlogPage';
import ServicesPage from './ServicesPage';
import RequestQuotePage from './RequestQuotePage';
import BookNowPage from './BookNowPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/request-quote">Request a Quote</Link>
          <Link to="/book-now">Book Now</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/book-now" element={<BookNowPage />} />
        </Routes>
        <footer className="footer">
          <p>&copy; 2024 Eric General Maintenance</p>
          <p>
            <a href="mailto:info@ericmaintenance.com">Email Us</a> | 
            <a href="https://www.facebook.com">Facebook</a> | 
            <a href="https://www.twitter.com">Twitter</a>
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
