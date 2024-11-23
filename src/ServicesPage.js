import React from 'react';
import './ServicesPage.css';
import BackButton from './components/BackButton';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <header className="header">
        <h1>Our Services</h1>
      </header>
      <BackButton />
      <section className="services-list">
        <div className="service-item">
          <h2>Plumbing</h2>
          <p>Expert plumbing repairs and installations, including leak detection, pipe repair, and fixture installation.</p>
        </div>
        <div className="service-item">
          <h2>Electrical</h2>
          <p>Reliable electrical maintenance and installations, from wiring and lighting to circuit breaker upgrades.</p>
        </div>
        <div className="service-item">
          <h2>Carpentry</h2>
          <p>Custom carpentry and remodeling projects, including cabinetry, shelving, and home renovations.</p>
        </div>
        <div className="service-item">
          <h2>Painting</h2>
          <p>Professional interior and exterior painting services to refresh and protect your property.</p>
        </div>
        <div className="service-item">
          <h2>HVAC Services</h2>
          <p>Comprehensive heating, ventilation, and air conditioning services to ensure your comfort year-round.</p>
        </div>
        <div className="service-item">
          <h2>General Maintenance</h2>
          <p>Routine maintenance services to keep your home or business in top condition, including inspections and repairs.</p>
        </div>
        <div className="service-item">
          <h2>Landscaping</h2>
          <p>Complete landscaping services, including lawn care, garden design, and seasonal clean-ups.</p>
        </div>
        <div className="service-item">
          <h2>Roofing</h2>
          <p>Roof repair and installation services to protect your home from the elements.</p>
        </div>
        <div className="service-item">
          <h2>Flooring</h2>
          <p>Installation and repair of various flooring types, including hardwood, tile, and carpet.</p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 