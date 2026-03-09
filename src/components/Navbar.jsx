import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Vinayaga Automation" className="logo-img" />
          <span className="logo-text">Vinayaga Automation</span>
        </a>

        <div className="nav-links hidden-mobile">
          <a href="#products" className="nav-link">Products</a>
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </div>

        <div className="nav-actions hidden-mobile">
          <button className="btn btn-ghost">Login</button>
          <button className="btn btn-primary">Start Free Trial</button>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav-links">
            <a href="#products" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="#solutions" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Solutions</a>
            <a href="#testimonials" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#pricing" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <div className="mobile-nav-actions">
              <button className="btn btn-ghost w-full mb-2">Login</button>
              <button className="btn btn-primary w-full">Start Free Trial</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
