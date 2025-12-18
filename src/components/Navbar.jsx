import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">HR HOLIDAYS</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/domestic">Domestic</Link></li>
        <li><Link to="/international">International</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/customize">Customize</Link></li>
        <li><Link to="/happy-clients">Happy Clients</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          <a
            href="https://wa.me/918980217355"
            target="_blank"
            rel="noreferrer"
            className="nav-btn"
          >
            Book Now
          </a>
        </li>
      </ul>
    </nav>
  );
}
