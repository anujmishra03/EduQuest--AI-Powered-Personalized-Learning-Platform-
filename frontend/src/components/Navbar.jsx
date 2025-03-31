import { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa"; 
import "./Navbar.css"; // Add custom styles

const Navbar = ({ toggleTheme, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          EduQuest
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Dark Mode Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
