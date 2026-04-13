import React, { useEffect, useMemo, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  const navLinks = useMemo(
    () => [
      { name: 'About', href: '/#about', key: 'about' },
      { name: 'Skills', href: '/#skills', key: 'skills' },
      { name: 'Projects', href: '/#projects', key: 'projects' },
      { name: 'Contact', href: '/#contact', key: 'contact' },
    ],
    []
  );

  const isProjectPage = location.pathname.startsWith('/projects/');

  const activeKey = useMemo(() => {
    if (isProjectPage) return 'projects';

    if (location.hash) {
      return location.hash.replace('#', '');
    }

    return '';
  }, [location.hash, isProjectPage]);

  return (
    <nav className={`navbar ${isScrolled || isProjectPage ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="nav-logo">
          <Code2 className="logo-icon text-primary" size={30} />
          <span>
            <span className="text-primary">.SSB</span>
          </span>
        </Link>

        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeKey === link.key ? 'active-nav-link' : ''}`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="/#contact"
            className={`btn-primary nav-cta ${activeKey === 'contact' ? 'active-nav-cta' : ''}`}
          >
            Hire Me
          </a>
        </div>

        <button
          className="mobile-toggle mobile-only"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu glass">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`mobile-nav-link ${activeKey === link.key ? 'active-mobile-nav-link' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="/#contact"
            className="mobile-hire-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;