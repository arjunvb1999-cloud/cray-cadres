import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Scissors } from "lucide-react";
import { siteConfig, whatsappLink } from "../data/siteConfig.js";
import PapercraftCutoutScene from "./PapercraftCutoutScene.jsx";

/**
 * Redesigned Hero Section: The Paper Atelier
 * 
 * Re-architected with:
 * - Folded paper & creased background facets with cutting mat texture.
 * - Artisanal craft pill badge with miniature shears.
 * - Expressive typography with paper crease highlight and hand-drawn SVG underline.
 * - Studio craft lead copy and glowing sunflower CTA button.
 * - Interactive Papercraft Cutout Shadowbox showing real-time paper cutting & blooming.
 * - Studio trust tags (Everlasting Blooms, 100% Hand-Sculpted, Bespoke Gifts).
 */
export default function Hero() {
  const { hero } = siteConfig;
  const [craftMode, setCraftMode] = useState("craft");

  return (
    <section className="hero hero--papercraft">
      {/* ---------------- Folded Paper Canvas Backdrop ---------------- */}
      <div className="folded-paper-bg" aria-hidden="true">
        {/* Origami 4-quadrant paper folds */}
        <div className="paper-quadrant paper-quadrant--nw" />
        <div className="paper-quadrant paper-quadrant--ne" />
        <div className="paper-quadrant paper-quadrant--sw" />
        <div className="paper-quadrant paper-quadrant--se" />

        {/* Paper crease lines */}
        <div className="paper-crease paper-crease--h" />
        <div className="paper-crease paper-crease--v" />
        <div className="paper-crease paper-crease--diag" />

        {/* Studio cutting grid & craft ruler accents */}
        <div className="cutting-mat-grid" />

        {/* Floating Paper Petals & Confetti */}
        <span className="paper-float paper-float--1">✂</span>
        <span className="paper-float paper-float--2">🌻</span>
        <span className="paper-float paper-float--3">✦</span>
        <span className="paper-float paper-float--4">✧</span>
        <span className="paper-float paper-float--5">✿</span>
      </div>

      <div className="container hero-inner">
        {/* ---------------- Left: Craft Atelier Story ---------------- */}
        <div className="hero-text">
          {/* Atelier Badge */}
          <div className="hero-craft-pill hero-fade" style={{ "--d": 0 }}>
            <span className="pill-scissors">
              <Scissors size={14} />
            </span>
            <span className="pill-text">Artisanal Paper &amp; Sunflower Atelier</span>
            <span className="pill-sparkle">✦</span>
          </div>

          {/* Heading with folded crease highlight */}
          <h1 className="hero-title hero-fade" style={{ "--d": 1 }}>
            Little Things.{" "}
            <span className="highlight-crease">
              Thoughtfully Made.
              <svg
                className="crease-underline"
                viewBox="0 0 280 16"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M4 12 Q70 3 140 10 Q210 16 276 6"
                  stroke="#E69500"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Lead Copy */}
          <p className="lead hero-fade" style={{ "--d": 2 }}>
            Step into our creative atelier where folded paper, warm clay, and everlasting sunflowers
            are sculpted piece by piece. Thoughtfully handcrafted to bring sunshine and heartfelt joy
            to someone you love.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="button-row hero-fade" style={{ "--d": 3 }}>
            <Link to="/shop" className="btn btn-primary btn-craft-sun">
              <span>{hero.primaryButton}</span>
              <ArrowRight size={17} />
            </Link>
            <a
              href={whatsappLink(hero.customGiftMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-craft-outline"
            >
              <MessageCircle size={18} />
              <span>{hero.secondaryButton}</span>
            </a>
          </div>

          {/* Handcrafted Studio Tags */}
          <div className="hero-craft-tags hero-fade" style={{ "--d": 4 }}>
            <div className="craft-tag">
              <span className="tag-emoji">🌻</span>
              <div className="tag-meta">
                <strong>Everlasting Blooms</strong>
                <small>Stays radiant forever</small>
              </div>
            </div>

            <div className="craft-tag">
              <span className="tag-emoji">✂</span>
              <div className="tag-meta">
                <strong>100% Hand-Cut Art</strong>
                <small>Original papercraft &amp; clay</small>
              </div>
            </div>

            <div className="craft-tag">
              <span className="tag-emoji">💌</span>
              <div className="tag-meta">
                <strong>Customised Keepsakes</strong>
                <small>Bespoke on WhatsApp</small>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Right: Papercraft Cutout Shadowbox ---------------- */}
        <div className="hero-visual hero-visual--paper">
          <PapercraftCutoutScene mode={craftMode} onToggleMode={setCraftMode} />
        </div>
      </div>
    </section>
  );
}
