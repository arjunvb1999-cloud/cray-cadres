import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "../data/siteConfig.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="wordmark">{siteConfig.brandName}</p>
          <p className="muted">{siteConfig.announcement}</p>
        </div>
        <ul className="footer-links">
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/#custom">Custom Gifts</Link></li>
          <li><Link to="/#about">About Us</Link></li>
        </ul>
        <div className="footer-social">
          <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
            <Instagram size={18} /> {siteConfig.instagramHandle}
          </a>
          <a
            href={whatsappLink("Hi Cray Cadres!")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>
      <p className="container copyright">
        © {new Date().getFullYear()} {siteConfig.brandName}. Prices shown are indicative.
      </p>
    </footer>
  );
}
