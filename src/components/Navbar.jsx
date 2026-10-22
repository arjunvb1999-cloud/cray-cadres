import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { siteConfig, whatsappLink } from "../data/siteConfig.js";

const links = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Categories", to: "/#categories" },
  { label: "Custom Gifts", to: "/#custom" },
  { label: "About Us", to: "/#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the page changes.
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  // Hide the bar while scrolling down, bring it back when scrolling up.
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 160 && y > last + 4) setHidden(true);
      else if (y < last - 4 || y <= 160) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`navbar ${hidden && !open ? "is-hidden" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="wordmark" aria-label={`${siteConfig.brandName} home`}>
          {siteConfig.brandName}
        </Link>

        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav id="primary-nav" className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.label}>
                {l.to.includes("#") ? (
                  <Link to={l.to}>{l.label}</Link>
                ) : (
                  <NavLink to={l.to} end={l.to === "/"}>
                    {l.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Cray Cadres on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={whatsappLink("Hi Cray Cadres! I'd like to know more about your gifts.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-small"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
