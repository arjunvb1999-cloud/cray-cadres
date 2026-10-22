import { Link } from "react-router-dom";
import { categories } from "../data/categories.js";
import { formatPrice, getCategoryName } from "../data/products.js";
import { whatsappLink } from "../data/siteConfig.js";

export default function ProductCard({ product }) {
  const buyMessage = `Hi Cray Cadres! I'd like to buy "${product.name}" (${formatPrice(
    product.price
  )}). Is it available?`;

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image" aria-label={`View ${product.name}`}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div className="product-body">
        <p className="tag">{getCategoryName(categories, product.category)}</p>
        <h3>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="muted">{product.short}</p>
        <div className="product-footer">
          <span className="price">{formatPrice(product.price)}</span>
          <a
            href={whatsappLink(buyMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-small"
          >
            Buy Now
          </a>
        </div>
      </div>
    </article>
  );
}
