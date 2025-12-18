import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>
              Travel the World <br />
              the Luxury Way
            </h1>
            <p>
              Bespoke domestic & international holidays with seamless
              passport and visa assistance.
            </p>
            <a
              href="https://wa.me/918980217355"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Book Now on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* DOMESTIC DESTINATIONS */}
      <section className="destinations">
        <h2>Domestic Destinations</h2>
        <div className="destination-grid">
          <div className="destination-card kashmir">
            <div className="destination-overlay">
              <h3>Kashmir</h3>
            </div>
          </div>

          <div className="destination-card kerala">
            <div className="destination-overlay">
              <h3>Kerala</h3>
            </div>
          </div>

          <div className="destination-card goa">
            <div className="destination-overlay">
              <h3>Goa</h3>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL DESTINATIONS */}
      <section className="destinations light">
        <h2>International Destinations</h2>
        <div className="destination-grid">
          <div className="destination-card maldives">
            <div className="destination-overlay">
              <h3>Maldives</h3>
            </div>
          </div>

          <div className="destination-card dubai">
            <div className="destination-overlay">
              <h3>Dubai</h3>
            </div>
          </div>

          <div className="destination-card bali">
            <div className="destination-overlay">
              <h3>Bali</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
