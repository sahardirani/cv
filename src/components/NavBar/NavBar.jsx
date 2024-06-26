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
      <a href="https://drive.google.com/file/d/1egQU1P0BGALt7RRmc-ZO6okPw2l2mCZQ/view?usp=sharing" className="contact-button" target="_blank" rel="noopener noreferrer">My CV</a>
      <button className="contact-button" onClick={onContactClick}>Contact Me</button>
    </nav>
  );
}

export default NavBar;