import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">HR HOLIDAYS</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/domestic">Domestic</a></li>
        <li><a href="/international">International</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/customize">Customize</a></li>
        <li><a href="/happy-clients">Happy Clients</a></li>
        <li><a href="/about">About</a></li>
        <li>
          <a
            href="https://wa.me/918980217355"
            target="_blank"
            className="nav-btn"
          >
            Book Now
          </a>
        </li>
      </ul>
    </nav>
  );
}
