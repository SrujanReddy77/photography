import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assests/logo.png';


const Footer = () => (
  <div className="footer">
    <h2>Get In Touch With Us:</h2>
     <div className="middle">
      <a className="btn" href="#">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a className="btn" href="#">
        <i className="fab fa-twitter"></i>
      </a>
      <a className="btn" href="#">
        <i className="fab fa-google"></i>
      </a>
      <a className="btn" href="#">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
    <div className="links">
      <h2>Links:</h2>
      <NavLink to="/GALLERY" exact>Gallery</NavLink>
      <NavLink to="/EVENTS" exact>Events</NavLink>
      <NavLink to="/ABOUT" exact>About</NavLink>
      <NavLink to="/CONTACT" exact>Contact</NavLink>
    </div>
    <div className="Fimg">
      <img src={logo} alt="" />
    </div>
    <p className="love">Made with <i className="fas fa-heart"></i> in Lpu</p>
  </div>
);

export default Footer;