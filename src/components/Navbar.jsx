import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Employee Portal
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-links">
        <NavLink to="/" onClick={closeMenu}>
          Dashboard
        </NavLink>

        <NavLink to="/employees" onClick={closeMenu}>
          Employees
        </NavLink>

        <NavLink to="/add-employee" onClick={closeMenu}>
          Add Employee
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <div className="mobile-sidebar-header">
          <span>Menu</span>

          <button
            className="mobile-close-button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        <div className="mobile-sidebar-links">
          <NavLink to="/" onClick={closeMenu}>
            Dashboard
          </NavLink>

          <NavLink to="/employees" onClick={closeMenu}>
            Employees
          </NavLink>

          <NavLink to="/add-employee" onClick={closeMenu}>
            Add Employee
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </div>
      </div>

      {/* Background overlay */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}

export default Navbar;