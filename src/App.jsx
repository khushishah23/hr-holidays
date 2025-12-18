import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

/* ---------- SHARED COMPONENTS ---------- */

function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="page-hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

function Section({ title, children, light }) {
  return (
    <section className={`section ${light ? "light" : ""}`}>
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

/* ---------- PAGES ---------- */

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1>
            Travel the World <br /> in Luxury
          </h1>
          <p>
            Premium domestic & international holidays with complete
            passport and visa assistance.
          </p>
          <a
            href="https://wa.me/918980217355"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>

      {/* DOMESTIC */}
      <Section title="Domestic Destinations">
        <div className="grid">
          <div className="image-card kashmir">Kashmir</div>
          <div className="image-card kerala">Kerala</div>
          <div className="image-card goa">Goa</div>
        </div>
      </Section>

      {/* INTERNATIONAL */}
      <Section title="International Destinations" light>
        <div className="grid">
          <div className="image-card maldives">Maldives</div>
          <div className="image-card dubai">Dubai</div>
          <div className="image-card bali">Bali</div>
        </div>
      </Section>
    </>
  );
}

function Domestic() {
  return (
    <>
      <PageHero
        title="Domestic Luxury Holidays"
        subtitle="Explore India with curated comfort and elegance."
      />
      <Section title="Popular Domestic Packages">
        <div className="grid">
          <div className="info-card">Kashmir Luxury Escape</div>
          <div className="info-card">Kerala Backwaters Retreat</div>
          <div className="info-card">Royal Rajasthan Tour</div>
        </div>
      </Section>
    </>
  );
}

function International() {
  return (
    <>
      <PageHero
        title="International Experiences"
        subtitle="Luxury journeys across iconic global destinations."
      />
      <Section title="Top International Packages">
        <div className="grid">
          <div className="info-card">Maldives Overwater Villas</div>
          <div className="info-card">Dubai Premium City Tour</div>
          <div className="info-card">Bali Private Villa Stay</div>
        </div>
      </Section>
    </>
  );
}

function Services() {
  return (
    <>
      <PageHero
        title="Passport & Visa Services"
        subtitle="Documentation handled professionally and smoothly."
      />
      <Section title="Our Services" light>
        <div className="grid">
          <div className="info-card">Passport Application & Renewal</div>
          <div className="info-card">Tourist Visa Assistance</div>
          <div className="info-card">Student & Business Visas</div>
        </div>
      </Section>
    </>
  );
}

function Customize() {
  return (
    <>
      <PageHero
        title="Customize Your Trip"
        subtitle="Your journey, designed exactly your way."
      />
      <Section title="How It Works">
        <div className="grid">
          <div className="info-card">Tell us your destination</div>
          <div className="info-card">We design your itinerary</div>
          <div className="info-card">You travel stress-free</div>
        </div>
      </Section>
    </>
  );
}

function HappyClients() {
  return (
    <>
      <PageHero
        title="Happy Clients"
        subtitle="Travel stories that speak for our service."
      />
      <Section title="What Our Clients Say" light>
        <div className="grid">
          <div className="info-card">“Everything was perfectly managed.”</div>
          <div className="info-card">“Truly luxury travel experience.”</div>
          <div className="info-card">“Visa process was seamless.”</div>
        </div>
      </Section>
    </>
  );
}

function About() {
  return (
    <>
      <PageHero
        title="About HR Holidays"
        subtitle="A premium travel company you can trust."
      />
      <Section title="Who We Are">
        <p>
          HR Holidays specializes in luxury domestic and international
          travel experiences, along with end-to-end passport and visa
          services.
        </p>
      </Section>
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
        <Route path="/domestic" element={<Domestic />} />
        <Route path="/international" element={<International />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/happy-clients" element={<HappyClients />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
