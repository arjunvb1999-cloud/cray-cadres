import { siteConfig } from "../data/siteConfig.js";
import EmbroideryHoop from "./EmbroideryHoop.jsx";

// The hero artwork: an embroidery hoop where a needle stitches a heart sprig
// onto the fabric, over and over, inside a ring of travelling text.
// Decorative only (the heading already says the same thing), so it is hidden from screen readers.
// Edit the ring text in src/data/siteConfig.js -> hero.ringText
export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art-disc" />

      {/* A dashed orbit that turns the opposite way */}
      <svg className="ring ring--inner" viewBox="0 0 400 400" focusable="false">
        <circle cx="200" cy="200" r="134" fill="none" stroke="#A3B18A" strokeWidth="1.5" strokeDasharray="3 9" strokeLinecap="round" />
      </svg>

      {/* Text running along a circle path */}
      <svg className="ring ring--text" viewBox="0 0 400 400" focusable="false">
        <defs>
          <path id="cc-ring-path" d="M200 200 m-160 0 a160 160 0 1 1 320 0 a160 160 0 1 1 -320 0" fill="none" />
        </defs>
        <text className="ring-text">
          <textPath href="#cc-ring-path" textLength="1000" lengthAdjust="spacing">
            {siteConfig.hero.ringText}
          </textPath>
        </text>
      </svg>

      <div className="hero-art-hoop">
        <EmbroideryHoop />
      </div>
    </div>
  );
}
