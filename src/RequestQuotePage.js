import React, { useState } from 'react';
import './RequestQuotePage.css';

const RequestQuotePage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    serviceType: '',
    description: '',
    preferredDate: '',
    preferredTime: '',
    additionalComments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Quote request submitted!');
  };

  return (
    <div className="request-quote-page">
      <header className="header">
        <h1>Request a Quote</h1>
      </header>
      <form className="quote-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Email Address:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
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
          Preferred Time for Service:
          <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required />
        </label>
        <label>
          Any Additional Comments or Special Instructions:
          <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestQuotePage; 