import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

 

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={styles.navbar}>
        <Link 
          className={location.pathname === '/' ? styles.active : styles.link} 
          to="/"
        >
          Home
        </Link>
        <Link 
          className={location.pathname === '/todo' ? styles.active : styles.link} 
          to="/todo"
        >
          To-Do
        </Link>
        <Link 
          className={location.pathname === '/github' ? styles.active : styles.link} 
          to="/github"
        >
          GitHub
        </Link>
      </nav>

      
     

    
      <button 
        className={styles.hamburger} 
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
      </button>

     
      {isMobileMenuOpen && (
        <div 
          className={styles.mobileOverlay} 
          onClick={closeMobileMenu}
        />
      )}

     
      <nav className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <Link 
            className={location.pathname === '/' ? styles.mobileActive : styles.mobileLink} 
            to="/"
            onClick={closeMobileMenu}
          >
            <span className={styles.mobileLinkIcon}>🏠</span>
            Home
          </Link>
          <Link 
            className={location.pathname === '/todo' ? styles.mobileActive : styles.mobileLink} 
            to="/todo"
            onClick={closeMobileMenu}
          >
            <span className={styles.mobileLinkIcon}>✓</span>
            To-Do
          </Link>
          <Link 
            className={location.pathname === '/github' ? styles.mobileActive : styles.mobileLink} 
            to="/github"
            onClick={closeMobileMenu}
          >
            <span className={styles.mobileLinkIcon}>🐙</span>
            GitHub
          </Link>
        </div>
      </nav>
    </>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>TaskHub</Link>
          <Navbar />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;