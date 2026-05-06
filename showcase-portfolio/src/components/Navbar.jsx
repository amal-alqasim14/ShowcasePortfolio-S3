import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Mijn Portfolio</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">Over mij</a>
        <a href="#projects">Projecten</a>
        <a href="#contact">Contact</a>

        <Link to="/admin" className="admin-link">
          Aanmelden als Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;