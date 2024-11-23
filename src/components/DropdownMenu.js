import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}>
        &#x22EE; {/* Unicode for vertical ellipsis */}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/" onClick={toggleMenu}>About Us</Link>
          <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu; 