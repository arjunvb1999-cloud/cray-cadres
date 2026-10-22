import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { categories } from "../data/categories.js";
import { occasions } from "../data/occasions.js";
import { products, detailPlaceholders, formatPrice, getCategoryName } from "../data/products.js";
import { whatsappLink } from "../data/siteConfig.js";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <section className="section container center">
        <h1>Product not found</h1>
        <p className="muted">We couldn't find that product.</p>
        <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
      </section>
    );
  }

  const d = product.details || {};
  const rows = [
    ["Customisation", d.customisation || detailPlaceholders.customisation],
    ["Preparation time (indicative)", d.prepTime || detailPlaceholders.prepTime],
    ["Materials", d.materials || detailPlaceholders.materials],
    ["Care instructions", d.care || detailPlaceholders.care],
  ];

  const message = `Hi Cray Cadres! I'm interested in "${product.name}" (${formatPrice(
    product.price
  )}). Could you share more details?`;

  const productOccasions = occasions.filter((o) => product.occasions.includes(o.id));

  return (
    <section className="section container">
      <Link to="/shop" className="back-link">
        <ArrowLeft size={16} /> Back to Shop
      </Link>

      <div className="detail">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-info">
          <p className="tag">{getCategoryName(categories, product.category)}</p>
          <h1>{product.name}</h1>
          <p className="price price-large">{formatPrice(product.price)}</p>
          <p className="muted">Indicative price</p>
          <p className="lead">{product.description}</p>

          <dl className="detail-list">
            {rows.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          {productOccasions.length > 0 && (
            <p className="muted">
              Great for: {productOccasions.map((o) => o.name).join(", ")}
            </p>
          )}

          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle size={18} /> Buy Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
