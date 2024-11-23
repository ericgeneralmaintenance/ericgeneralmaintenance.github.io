import React, { useState } from 'react';
import './BookNowPage.css';

const BookNowPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    description: '',
    preferredDate: '',
    preferredTime: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    additionalComments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Booking request submitted!');
  };

  return (
    <div className="book-now-page">
      <header className="header">
        <h1>Book Now</h1>
      </header>
      <form className="book-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>
          Email Address:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Type of Service Needed:
          <select name="serviceType" value={formData.serviceType} onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Painting">Painting</option>
            <option value="HVAC">HVAC</option>
            <option value="Handyman">Handyman Services</option>
          </select>
        </label>
        <label>
          Description of the Issue or Service Request:
          <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
        </label>
        <label>
          Preferred Date for Service:
          <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required />
        </label>
        <label>
          Preferred Time Slot for Service:
          <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required />
        </label>
        <label>
          Street Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <label>
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </label>
        <label>
          ZIP Code:
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
        </label>
        <label>
          Any Special Instructions or Additional Comments:
          <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookNowPage; 