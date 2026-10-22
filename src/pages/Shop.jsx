import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "../data/categories.js";
import { occasions } from "../data/occasions.js";
import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Shop() {
  // Filters live in the page address (e.g. /shop?category=clay-creations),
  // so links from the homepage work and the browser Back button behaves.
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "all";
  const occasion = params.get("occasion") || "all";
  const sort = params.get("sort") || "default";

  const update = (key, value, emptyValue) => {
    const next = new URLSearchParams(params);
    if (value === emptyValue) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const activeOccasions = occasions.filter((o) =>
    products.some((p) => p.occasions.includes(o.id))
  );

  const visible = useMemo(() => {
    let list = products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        (occasion === "all" || p.occasions.includes(occasion))
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [category, occasion, sort]);

  const hasFilters = category !== "all" || occasion !== "all";

  return (
    <section className="section container">
      <div className="section-heading">
        <p className="eyebrow">The collection</p>
        <h1>Shop</h1>
        <p className="muted">
          Handmade flowers, clay creations, miniature gifts, craft kits and personalised
          gifts. Prices are indicative.
        </p>
      </div>

      <div className="filters">
        <div className="chip-group" role="group" aria-label="Filter by category">
          <button
            className={`chip ${category === "all" ? "is-active" : ""}`}
            aria-pressed={category === "all"}
            onClick={() => update("category", "all", "all")}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              className={`chip ${category === c.id ? "is-active" : ""}`}
              aria-pressed={category === c.id}
              onClick={() => update("category", c.id, "all")}
            >
              {c.name}
            </button>
          ))}
        </div>

        {activeOccasions.length > 0 && (
          <div className="chip-group" role="group" aria-label="Filter by occasion">
            <span className="chip-label">Occasion:</span>
            <button
              className={`chip ${occasion === "all" ? "is-active" : ""}`}
              aria-pressed={occasion === "all"}
              onClick={() => update("occasion", "all", "all")}
            >
              Any
            </button>
            {activeOccasions.map((o) => (
              <button
                key={o.id}
                className={`chip ${occasion === o.id ? "is-active" : ""}`}
                aria-pressed={occasion === o.id}
                onClick={() => update("occasion", o.id, "all")}
              >
                {o.name}
              </button>
            ))}
          </div>
        )}

        <div className="toolbar">
          <p className="muted" aria-live="polite">
            {visible.length} {visible.length === 1 ? "product" : "products"}
          </p>
          <label className="sort">
            <span>Sort by</span>
            <select value={sort} onChange={(e) => update("sort", e.target.value, "default")}>
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </label>
        </div>
      </div>

      {visible.length > 0 ? (
        <div
          key={`${category}-${occasion}-${sort}`}
          className="product-grid stagger stagger--auto"
        >
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No products found</h2>
          <p className="muted">Nothing matches these filters yet.</p>
          {hasFilters && (
            <button className="btn btn-outline" onClick={() => setParams({}, { replace: true })}>
              Clear filters
            </button>
          )}
        </div>
      )}
    </section>
  );
}
