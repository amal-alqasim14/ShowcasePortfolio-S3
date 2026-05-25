import { Link } from "react-router-dom";
// import PortfolioLogo from "./components/PortfolioLogo";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Portfolio
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">Over mij</a>
        <a href="#projects">Projecten</a>
        <a href="#contact">Contact</a>
        <Link to="/admin" className="admin-link">
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;