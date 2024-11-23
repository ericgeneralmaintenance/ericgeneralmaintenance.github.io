import React from 'react';
import './ContactPage.css';
import BackButton from './components/BackButton';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header className="header">
        <h1>Contact Us</h1>
      </header>
      <BackButton />
      <section className="contact-info">
        <p><strong>Phone:</strong> +1 (763) 332-7091</p>
        <p><strong>Email:</strong> info@ericmaintenance.com</p>
        <p><strong>Location:</strong> Brooklyn, Minnesota, USA</p>
      </section>
    </div>
  );
};

export default ContactPage; 