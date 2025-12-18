import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

/* ---------- COMPONENTS ---------- */

function Hero({ title, subtitle }) {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>HR HOLIDAYS</h1>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <a
          href="https://wa.me/918980217355"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}

function Carousel({ items }) {
  return (
    <div className="carousel">
      {items.map((item) => (
        <div key={item.label} className={`carousel-card ${item.class}`}>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- PAGES ---------- */

function Home() {
  return (
    <>
      <Hero
        title="Luxury Travel Experiences"
        subtitle="Domestic & International holidays with seamless passport and visa assistance"
      />

      <section className="carousel-section">
        <h3>Domestic Holidays</h3>
        <Carousel
          items={[
            { label: "Kashmir", class: "kashmir" },
            { label: "Kerala", class: "kerala" },
            { label: "Goa", class: "goa" },
            { label: "Rajasthan", class: "rajasthan" },
          ]}
        />
        <a
          href="https://wa.me/918980217355"
          target="_blank"
          rel="noreferrer"
          className="btn small"
        >
          Book Domestic Package
        </a>
      </section>

      <section className="carousel-section light">
        <h3>International Holidays</h3>
        <Carousel
          items={[
            { label: "Maldives", class: "maldives" },
            { label: "Dubai", class: "dubai" },
            { label: "Bali", class: "bali" },
            { label: "Europe", class: "europe" },
          ]}
        />
        <a
          href="https://wa.me/918980217355"
          target="_blank"
          rel="noreferrer"
          className="btn small"
        >
          Book International Package
        </a>
      </section>
    </>
  );
}

function SimplePage({ title }) {
  return (
    <>
      <Hero
        title={title}
        subtitle="Curated luxury journeys designed with care and expertise"
      />

      <section className="carousel-section">
        <h3>Popular Choices</h3>
        <Carousel
          items={[
            { label: "Premium Stay", class: "maldives" },
            { label: "Guided Tours", class: "dubai" },
            { label: "Luxury Transport", class: "bali" },
          ]}
        />
        <a
          href="https://wa.me/918980217355"
          target="_blank"
          rel="noreferrer"
          className="btn small"
        >
          Book Now
        </a>
      </section>
    </>
  );
}

/* ---------- APP ---------- */

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domestic" element={<SimplePage title="Domestic Holidays" />} />
        <Route
          path="/international"
          element={<SimplePage title="International Holidays" />}
        />
        <Route path="/services" element={<SimplePage title="Passport & Visa Services" />} />
        <Route path="/customize" element={<SimplePage title="Customize Your Trip" />} />
        <Route path="/happy-clients" element={<SimplePage title="Happy Clients" />} />
        <Route path="/about" element={<SimplePage title="About HR Holidays" />} />
      </Routes>
    </>
  );
}
