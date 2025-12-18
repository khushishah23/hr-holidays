import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <h1>HR HOLIDAYS</h1>
          <p>
            Luxury Domestic & International Travel <br />
            Passport & Visa Assistance
          </p>

          <a
            href="https://wa.me/918980217355"
            target="_blank"
            className="btn"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Domestic & International Tours</h3>
            <p>Carefully curated luxury travel experiences.</p>
          </div>

          <div className="card">
            <h3>Passport Assistance</h3>
            <p>End-to-end support with zero stress.</p>
          </div>

          <div className="card">
            <h3>Visa Services</h3>
            <p>Tourist, Student & Business visas handled professionally.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="overlay">
          <h1>HR HOLIDAYS</h1>
          <p>
            Luxury Domestic & International Travel <br />
            Passport & Visa Assistance
          </p>

          <a
            href="https://wa.me/918980217355"
            target="_blank"
            className="btn"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
