import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../data/categories.js";
import { products } from "../data/products.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function CategoryCards() {
  return (
    <section id="categories" className="section container">
      <SectionHeading
        eyebrow="Browse"
        title="Shop by Category"
        text="Find the perfect handmade gift, one little category at a time."
      />
      <Reveal className="reveal--bare">
        <div className="category-grid stagger">
          {categories.map((c) => {
            const count = products.filter((p) => p.category === c.id).length;
            return (
              <Link key={c.id} to={`/shop?category=${c.id}`} className="category-card">
                <img src={c.image} alt="" loading="lazy" />
                <div className="category-card-body">
                  <h3>{c.name}</h3>
                  <p>{c.description}</p>
                  <span className="explore">
                    Explore{count ? ` (${count})` : ""} <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
