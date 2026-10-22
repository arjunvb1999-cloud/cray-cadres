import { Link } from "react-router-dom";
import { siteConfig, whatsappLink } from "../data/siteConfig.js";
import Words from "./Words.jsx";
import HeroArt from "./HeroArt.jsx";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow hero-fade" style={{ "--d": 0 }}>Handmade with love</p>
          <h1>
            <Words hero text={hero.heading} />
          </h1>
          <p className="lead hero-fade" style={{ "--d": 1 }}>{hero.description}</p>
          <div className="button-row hero-fade" style={{ "--d": 2 }}>
            <Link to="/shop" className="btn btn-primary">
              {hero.primaryButton}
            </Link>
            <a
              href={whatsappLink(hero.customGiftMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              {hero.secondaryButton}
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <HeroArt />
        </div>
      </div>
    </section>
  );
}
