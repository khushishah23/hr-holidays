import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

/* PAGES */
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
  return <div className="page">Domestic Packages</div>;
}

function International() {
  return <div className="page">International Packages</div>;
}

function Services() {
  return <div className="page">Passport & Visa Services</div>;
}

function Customize() {
  return <div className="page">Customize Your Trip</div>;
}

function HappyClients() {
  return <div className="page">Happy Clients</div>;
}

function About() {
  return <div className="page">About HR Holidays</div>;
}

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
