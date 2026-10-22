import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured);
  if (featured.length === 0) return null;

  return (
    <section className="section section-white">
      <div className="container">
        <SectionHeading
          eyebrow="Our favourites"
          title="Featured Products"
          text="A small selection of handmade pieces to start with."
        />
        <Reveal className="reveal--bare">
          <div className="product-grid stagger">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Reveal>
        <div className="center">
          <Link to="/shop" className="btn btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
