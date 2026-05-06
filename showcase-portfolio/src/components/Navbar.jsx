import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Mijn Portfolio</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">Over mij</Link>
        <Link to="/projects">Projecten</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin" className="admin-link">
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;