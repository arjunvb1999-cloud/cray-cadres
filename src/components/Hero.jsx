import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig, whatsappLink } from "../data/siteConfig.js";
import PaintingHeroArtwork from "./PaintingHeroArtwork.jsx";
import CinematicCraftScene from "./CinematicCraftScene.jsx";

/**
 * Editorial Hero Section: The Sunlit Craft Atelier
 * 
 * Features:
 * - Left: Editorial typography, story copy, and sunshine-inspired CTA buttons.
 * - Right: Toggleable hero visual supporting:
 *   1. "Painting Video": The user's original watercolor & butterfly painting with
 *      HTML5 video (autoplay loop muted playsinline) from Runway / Luma.
 *   2. "Sunlit Craft Story": The falling glass cup, sunflower, and scattered
 *      crafting supplies on the wooden table.
 */
export default function Hero() {
  const { hero } = siteConfig;
  const [heroView, setHeroView] = useState("craft"); // "craft" is the primary storytelling visual

  return (
    <section className="hero hero--cinematic">
      {/* Warm Ambient Sunlight Backdrop */}
      <div className="sunlight-backdrop" aria-hidden="true">
        <div className="ambient-sun-glow" />
        <div className="table-perspective-base" />
      </div>

      <div className="container hero-inner">
        {/* ---------------- Left: Editorial Typography & CTAs ---------------- */}
        <div className="hero-text">
          {/* Brand Eyebrow Tag */}
          <div className="hero-story-eyebrow hero-fade" style={{ "--d": 0 }}>
            <span className="eyebrow-accent">
              <Sparkles size={14} />
            </span>
            <span className="eyebrow-brand">{siteConfig.brandName}</span>
            <span className="eyebrow-separator">·</span>
            <span className="eyebrow-tagline">Artisanal Botanical &amp; Clay Gifts</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title hero-fade" style={{ "--d": 1 }}>
            Little Things, <br />
            <span className="headline-highlight">Made with Love.</span>
          </h1>

          {/* Supporting Text */}
          <p className="lead hero-fade" style={{ "--d": 2 }}>
            {hero.description}
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="button-row hero-fade" style={{ "--d": 3 }}>
            <Link to="/shop" className="btn btn-primary btn-sunshine">
              <span>{hero.primaryButton}</span>
              <ArrowRight size={17} />
            </Link>
            <a
              href={whatsappLink(hero.customGiftMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sunshine-outline"
            >
              <MessageCircle size={18} />
              <span>{hero.secondaryButton}</span>
            </a>
          </div>

          {/* Editorial Trust Badges */}
          <div className="hero-editorial-features hero-fade" style={{ "--d": 4 }}>
            <div className="editorial-feature-item">
              <span className="feature-dot" />
              <div className="feature-text">
                <strong>Everlasting Sunflowers</strong>
                <small>Blooms that never wilt</small>
              </div>
            </div>

            <div className="editorial-feature-item">
              <span className="feature-dot" />
              <div className="feature-text">
                <strong>Handcrafted Details</strong>
                <small>Individually sculpted by hand</small>
              </div>
            </div>

            <div className="editorial-feature-item">
              <span className="feature-dot" />
              <div className="feature-text">
                <strong>Custom Made for You</strong>
                <small>Personalised on WhatsApp</small>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Right: Artwork Visual / Video Player ---------------- */}
        <div className="hero-visual hero-visual--cinematic">
          {/* Visual Mode Selector Tabs */}
          <div className="hero-artwork-tabs" role="tablist" aria-label="Hero visual view">
            <button
              type="button"
              role="tab"
              aria-selected={heroView === "painting"}
              className={`hero-tab-btn ${heroView === "painting" ? "is-active" : ""}`}
              onClick={() => setHeroView("painting")}
            >
              <span>🎨</span> Original Painting Video
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={heroView === "craft"}
              className={`hero-tab-btn ${heroView === "craft" ? "is-active" : ""}`}
              onClick={() => setHeroView("craft")}
            >
              <span>🌻</span> Sunlit Craft Story
            </button>
          </div>

          {/* Render selected artwork visual */}
          {heroView === "painting" ? (
            <PaintingHeroArtwork />
          ) : (
            <CinematicCraftScene />
          )}
        </div>
      </div>
    </section>
  );
}
