import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleQuoteRequest = () => {
    navigate('/request-quote');
  };

  const handleBookNow = () => {
    navigate('/book-now');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <div className="home-page">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Eric General Maintenance</h1>
          <p className="tagline">"Your Trusted Partner for Reliable Repairs and Maintenance Solutions in Minnesota."</p>
          <div className="cta-buttons">
            <button className="cta-button" onClick={handleQuoteRequest}>Request a Quote</button>
            <button className="cta-button" onClick={handleBookNow}>Book Now</button>
            <button className="cta-button" onClick={handleContactUs}>Contact Us</button>
          </div>
        </div>
      </header>

      <section className="about-us">
        <h2>About Us</h2>
        <p>At Eric General Maintenance, we pride ourselves on delivering top-notch repair and maintenance services. Our team of experts is dedicated to ensuring your home or business is in perfect condition.</p>
      </section>

      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Plumbing</h3>
            <p>Expert plumbing repairs and installations.</p>
          </div>
          <div className="service-item">
            <h3>Electrical</h3>
            <p>Reliable electrical maintenance and installations.</p>
          </div>
          <div className="service-item">
            <h3>Carpentry</h3>
            <p>Custom carpentry and remodeling projects.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>
          "Eric General Maintenance was amazing! They repaired my plumbing quickly and professionally. Highly recommend." - Sarah M., Brooklyn, MN
        </blockquote>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p><strong>Phone:</strong> +1 (763) 332-7091</p>
        <p><strong>Email:</strong> info@ericmaintenance.com</p>
      </section>
    </div>
  );
};

export default HomePage; 