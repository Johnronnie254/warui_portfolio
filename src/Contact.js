import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaVimeo, FaImdb } from 'react-icons/fa'; // For icons
import './Contact.css'; 
import CustomNavbar from './Navbar';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Navbar Section */}
      <CustomNavbar />
     
      {/* Welcome Text */}
      <div className="welcome-text">
        Let's create magic
      </div>

      {/* Profile Image */}
      <div className="image-container">
        <img src="https://i.pinimg.com/736x/a0/16/ce/a016cee922eacf9f227f3c13d7b871af.jpg" alt="Profile" className="profile-image" />
      </div>

      {/* Location Text */}
      <div className="location-text">
        Nairobi, Kenya
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="email">
          <FaEnvelope className="icon" />
          <a href="mailto:waruifred@gmail.com" className="contact-link">waruifred@gmail.com</a>
        </div>
        <div className="phone">
          <FaPhoneAlt className="icon" />
          <a href="tel:+254720062393" className="contact-link">+254720062393</a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <a href="https://www.instagram.com/warui_fred/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://vimeo.com/waruifred" target="_blank" rel="noopener noreferrer">
          <FaVimeo className="social-icon" />
        </a>
        <a href="https://www.imdb.com/name/nm9577816/" target="_blank" rel="noopener noreferrer">
          <FaImdb className="social-icon" />
        </a>
      </div>

      {/* Copyright */}
      <div className="copyright">
        &copy; 2024 Fred Warui
      </div>
    </div>
  );
}

export default Contact;
