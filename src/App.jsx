import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

/* ---------- FULL BLEED SECTIONS ---------- */

function FullBleedHero({ title, subtitle }) {
  return (
    <section className="full-hero">
      <div className="full-hero-overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

function ImageRow({ items }) {
  return (
    <section className="image-row">
      {items.map((item) => (
        <div
          key={item.label}
          className={`image-tile ${item.class}`}
        >
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}

/* ---------- PAGES ---------- */

function Home() {
  return (
    <>
      <FullBleedHero
        title="Travel the World in Luxury"
        subtitle="Premium domestic & international holidays with seamless passport and visa assistance"
      />

      <ImageRow
        items={[
          { label: "Kashmir", class: "kashmir" },
          { label: "Kerala", class: "kerala" },
          { label: "Goa", class: "goa" },
        ]}
      />

      <ImageRow
        items={[
          { label: "Maldives", class: "maldives" },
          { label: "Dubai", class: "dubai" },
          { label: "Bali", class: "bali" },
        ]}
      />
    </>
  );
}

function SimplePage({ title, subtitle }) {
  return (
    <>
      <FullBleedHero title={title} subtitle={subtitle} />
      <div className="center-strip">
        <p>
          HR Holidays delivers curated luxury travel experiences with
          complete documentation support, ensuring comfort, clarity,
          and confidence at every step.
        </p>
      </div>
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
        <Route
          path="/domestic"
          element={
            <SimplePage
              title="Domestic Luxury Holidays"
              subtitle="Explore India without compromise"
            />
          }
        />
        <Route
          path="/international"
          element={
            <SimplePage
              title="International Experiences"
              subtitle="Global destinations, premium journeys"
            />
          }
        />
        <Route
          path="/services"
          element={
            <SimplePage
              title="Passport & Visa Services"
              subtitle="Documentation done right"
            />
          }
        />
        <Route
          path="/customize"
          element={
            <SimplePage
              title="Customize Your Trip"
              subtitle="Your journey, designed your way"
            />
          }
        />
        <Route
          path="/happy-clients"
          element={
            <SimplePage
              title="Happy Clients"
              subtitle="Journeys that earned trust"
            />
          }
        />
        <Route
          path="/about"
          element={
            <SimplePage
              title="About HR Holidays"
              subtitle="A travel brand built on reliability"
            />
          }
        />
      </Routes>
    </>
  );
}
