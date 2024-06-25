import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section first-color">
        <div className="leftbox">
          <h4>Contact Us</h4>
          <p>Email: support@bloom.com</p>
          <p>Phone: +961 81 835 725</p>
        </div>
        <div className="middlebox">
          <h4>Mental Health Hotlines</h4>
          <p>National Suicide Prevention Lifeline: 1-800-273-8255</p>
          <p>Embrace, The Life Line: 1564</p>
        </div>
        <div className="rightbox">
          <h4>Follow Us</h4>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Bloom. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
