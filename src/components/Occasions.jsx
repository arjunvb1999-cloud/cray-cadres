import { Link } from "react-router-dom";
import { occasions } from "../data/occasions.js";
import { products } from "../data/products.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

// Only occasions that have at least one product assigned are shown.
export default function Occasions() {
  const active = occasions
    .map((o) => ({ ...o, count: products.filter((p) => p.occasions.includes(o.id)).length }))
    .filter((o) => o.count > 0);

  if (active.length === 0) return null;

  return (
    <section id="occasions" className="section container">
      <SectionHeading
        eyebrow="Find the right gift"
        title="Gifting Occasions"
        text="Shop by the moment you're celebrating."
      />
      <Reveal className="reveal--bare">
        <div className="occasion-grid stagger">
          {active.map((o) => (
            <Link key={o.id} to={`/shop?occasion=${o.id}`} className="occasion-card">
              <span className="occasion-emoji" aria-hidden="true">{o.emoji}</span>
              <h3>{o.name}</h3>
              <p className="muted">
                {o.count} {o.count === 1 ? "gift" : "gifts"}
              </p>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
