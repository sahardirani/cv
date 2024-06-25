import React, { useEffect, useState } from "react";
import "./NavBar.css";

function NavBar({ onContactClick, onPortfolioClick }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <h1 className="title" onClick={onPortfolioClick}>
        <span className="portfolio-text">Portfolio</span>
      </h1>
      <a href="/my-cv.pdf" className="contact-button" download="Sahar-Dirani-CV.pdf">My CV</a>
      <button className="contact-button" onClick={onContactClick}>Contact Me</button>
    </nav>
  );
}

export default NavBar;