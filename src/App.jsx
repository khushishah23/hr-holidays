import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
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

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Luxury Tours</h3>
            <p>
              Carefully curated domestic and international travel
              experiences designed for comfort and elegance.
            </p>
          </div>

          <div className="card">
            <h3>Passport Assistance</h3>
            <p>
              Complete end-to-end support for passport applications and
              renewals without stress.
            </p>
          </div>

          <div className="card">
            <h3>Visa Services</h3>
            <p>
              Tourist, student, and business visas handled professionally
              and efficiently.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
