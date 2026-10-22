import { siteConfig } from "../data/siteConfig.js";
import SunflowerBloom from "./SunflowerBloom.jsx";

// The hero artwork: a handcrafted cartoon sunflower blooming at sunrise
// inside an artisan wooden embroidery hoop with a ring of travelling text.
export default function HeroArt() {
  return (
    <div className="hero-art">
      <div className="hero-art-disc" />

      {/* A dashed orbit that turns the opposite way */}
      <svg className="ring ring--inner" viewBox="0 0 400 400" focusable="false" aria-hidden="true">
        <circle cx="200" cy="200" r="134" fill="none" stroke="#A3B18A" strokeWidth="1.5" strokeDasharray="3 9" strokeLinecap="round" />
      </svg>

      {/* Text running along a circle path */}
      <svg className="ring ring--text" viewBox="0 0 400 400" focusable="false" aria-hidden="true">
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
        <SunflowerBloom />
      </div>
    </div>
  );
}

