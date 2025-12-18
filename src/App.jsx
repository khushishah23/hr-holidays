import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
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
            rel="noreferrer"
            className="btn"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Domestic & International Tours</h3>
            <p>
              Curated luxury travel experiences designed for comfort,
              elegance, and unforgettable memories.
            </p>
          </div>

          <div className="card">
            <h3>Passport Assistance</h3>
            <p>
              Complete end-to-end support for new passports and renewals
              with zero hassle.
            </p>
          </div>

          <div className="card">
            <h3>Visa Services</h3>
            <p>
              Tourist, student, and business visa services handled
              professionally and efficiently.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
