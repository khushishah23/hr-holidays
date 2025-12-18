import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

/* ---------- PAGE SECTIONS ---------- */

function HeroSection({ title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="page-hero-overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

function ContentSection({ children }) {
  return <section className="page-content">{children}</section>;
}

/* ---------- PAGES ---------- */

function Home() {
  return (
    <>
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
    </>
  );
}

function Domestic() {
  return (
    <>
      <HeroSection
        title="Domestic Luxury Holidays"
        subtitle="Explore India with comfort, elegance, and curated experiences."
      />
      <ContentSection>
        <p>
          From the serene valleys of Kashmir to the tranquil backwaters of
          Kerala, HR Holidays offers handpicked domestic travel experiences
          designed for luxury and peace of mind.
        </p>
      </ContentSection>
    </>
  );
}

function International() {
  return (
    <>
      <HeroSection
        title="International Travel Experiences"
        subtitle="Luxury journeys across the world, crafted just for you."
      />
      <ContentSection>
        <p>
          Discover iconic international destinations like Maldives, Dubai,
          Bali, and Europe with premium stays, seamless planning, and expert
          guidance.
        </p>
      </ContentSection>
    </>
  );
}

function Services() {
  return (
    <>
      <HeroSection
        title="Passport & Visa Services"
        subtitle="Professional documentation support, end to end."
      />
      <ContentSection>
        <p>
          We assist with passport applications, renewals, and tourist,
          student, and business visas — ensuring a smooth and stress-free
          process.
        </p>
      </ContentSection>
    </>
  );
}

function Customize() {
  return (
    <>
      <HeroSection
        title="Customize Your Trip"
        subtitle="Because no two journeys should ever be the same."
      />
      <ContentSection>
        <p>
          Tell us your destination, travel style, and budget. We’ll design a
          personalized itinerary that matches your vision perfectly.
        </p>
      </ContentSection>
    </>
  );
}

function HappyClients() {
  return (
    <>
      <HeroSection
        title="Happy Clients"
        subtitle="Stories from travelers who trusted HR Holidays."
      />
      <ContentSection>
        <p>
          Our clients choose us for our transparency, personalized service,
          and attention to detail. Their journeys speak for themselves.
        </p>
      </ContentSection>
    </>
  );
}

function About() {
  return (
    <>
      <HeroSection
        title="About HR Holidays"
        subtitle="Your trusted partner in luxury travel."
      />
      <ContentSection>
        <p>
          HR Holidays is a premium travel company offering domestic and
          international holiday packages along with complete passport and
          visa assistance.
        </p>
      </ContentSection>
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
