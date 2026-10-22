import { useState, useId, useCallback } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";

/**
 * Handcrafted Cartoon Sunflower Sunrise Animation
 * 
 * Features:
 * - Handcrafted embroidery hoop frame with wooden grain and brass hardware.
 * - Dawn-to-sunrise sky with gentle paper-cut craft clouds.
 * - Cheerful cartoon smiling sun rising with spinning warm rays.
 * - Layered craft garden hills with stitched thread details.
 * - Sprouting stem, uncurling leaves, and a magnificent layered sunflower blooming
 *   with dual rings of 32 golden petals and an adorable cartoon seed center.
 * - Floating golden morning pollen and twinkle sparkles.
 * - Gentle breeze sway during full bloom.
 * - Interactive: Hover or click to trigger a happy celebration wiggle!
 * - Accessible: Honors prefers-reduced-motion with an elegant, serene resting state.
 */
export default function SunflowerBloom() {
  const uid = useId().replace(/:/g, "");
  const reduced = usePrefersReducedMotion();
  const [celebrating, setCelebrating] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  const handleInteraction = useCallback(() => {
    setCelebrating(true);
    setReplayKey((k) => k + 1);
    const timer = setTimeout(() => setCelebrating(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  // 16 outer petals angles
  const outerPetals = Array.from({ length: 16 }, (_, i) => i * 22.5);
  // 16 inner petals offset by 11.25 deg
  const innerPetals = Array.from({ length: 16 }, (_, i) => i * 22.5 + 11.25);
  // 12 sun rays angles
  const sunRays = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <div
      className={`sunflower-canvas-wrapper ${celebrating ? "is-celebrating" : ""}`}
      onClick={handleInteraction}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleInteraction();
        }
      }}
      aria-label="Handcrafted cartoon sunflower blooming at sunrise. Click or tap to bloom!"
      title="Click to see the sunflower bloom!"
    >
      <svg
        key={replayKey}
        className={`sunflower-hoop ${reduced ? "is-reduced" : ""}`}
        viewBox="0 0 400 400"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* Circular fabric boundary */}
          <clipPath id={`sf-fabric-clip-${uid}`}>
            <circle cx="200" cy="200" r="144" />
          </clipPath>

          {/* Gradients */}
          <linearGradient id={`sf-sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="45%" stopColor="#FFE0C2" />
            <stop offset="78%" stopColor="#F9D4C2" />
            <stop offset="100%" stopColor="#F4C6B6" />
          </linearGradient>

          <radialGradient id={`sf-sunglow-${uid}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE57F" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#FFD54F" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FFCA28" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={`sf-sunbody-${uid}`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="40%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FF9800" />
          </radialGradient>

          <linearGradient id={`sf-petal-outer-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="25%" stopColor="#FFCA28" />
            <stop offset="85%" stopColor="#FB8C00" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>

          <linearGradient id={`sf-petal-inner-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF59D" />
            <stop offset="35%" stopColor="#FFD54F" />
            <stop offset="85%" stopColor="#FFA000" />
            <stop offset="100%" stopColor="#F57C00" />
          </linearGradient>

          <radialGradient id={`sf-center-${uid}`} cx="36%" cy="34%" r="65%">
            <stop offset="0%" stopColor="#795548" />
            <stop offset="50%" stopColor="#4E342E" />
            <stop offset="100%" stopColor="#2E1C14" />
          </radialGradient>

          <linearGradient id={`sf-stem-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8BC34A" />
            <stop offset="40%" stopColor="#689F38" />
            <stop offset="100%" stopColor="#33691E" />
          </linearGradient>

          <linearGradient id={`sf-hill-back-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DCE7C8" />
            <stop offset="100%" stopColor="#B3C999" />
          </linearGradient>

          <linearGradient id={`sf-hill-front-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#97B874" />
            <stop offset="100%" stopColor="#6C8D4B" />
          </linearGradient>

          <linearGradient id={`sf-wood-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E6C8A4" />
            <stop offset="35%" stopColor="#C99E75" />
            <stop offset="70%" stopColor="#AD8057" />
            <stop offset="100%" stopColor="#8C5C36" />
          </linearGradient>

          <linearGradient id={`sf-brass-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#FFCA28" />
            <stop offset="100%" stopColor="#C79100" />
          </linearGradient>

          {/* Filters for craft paper drop shadows */}
          <filter id={`sf-shadow-${uid}`} x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#3E2723" floodOpacity="0.22" />
          </filter>

          <filter id={`sf-petal-shadow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.8" stdDeviation="2" floodColor="#27150B" floodOpacity="0.32" />
          </filter>
        </defs>

        {/* ============================================================== */}
        {/* INSIDE THE HOOP: The Handcrafted Fabric Scene                  */}
        {/* ============================================================== */}
        <g clipPath={`url(#sf-fabric-clip-${uid})`}>
          {/* Dawn Sky Canvas */}
          <rect
            className="sf-sky"
            x="40"
            y="40"
            width="320"
            height="320"
            fill={`url(#sf-sky-${uid})`}
          />

          {/* Subtle Craft Fabric Texture Grain */}
          <circle cx="200" cy="200" r="144" fill="#FAF7F0" opacity="0.15" />

          {/* ------------------------------------------------------------ */}
          {/* SUNRISE: Cheerful Cartoon Sun rising & shining               */}
          {/* ------------------------------------------------------------ */}
          <g className="sf-sunrise">
            {/* Pulsing Sun Glow */}
            <circle
              className="sf-sun-glow"
              cx="200"
              cy="108"
              r="62"
              fill={`url(#sf-sunglow-${uid})`}
            />

            {/* Rotating Sun Rays */}
            <g className="sf-sun-rays" style={{ transformOrigin: "200px 108px" }}>
              {sunRays.map((angle) => (
                <polygon
                  key={angle}
                  points="196,78 204,78 200,64"
                  fill="#FFB300"
                  opacity="0.9"
                  transform={`rotate(${angle} 200 108)`}
                />
              ))}
            </g>

            {/* Sun Core Disc */}
            <circle
              cx="200"
              cy="108"
              r="27"
              fill={`url(#sf-sunbody-${uid})`}
              stroke="#FF8F00"
              strokeWidth="1.6"
              filter={`url(#sf-shadow-${uid})`}
            />

            {/* Cheerful Cartoon Sun Face */}
            <g className="sf-sun-face">
              {/* Rosy Cheeks */}
              <ellipse cx="188" cy="111" rx="3.5" ry="2" fill="#FF8A80" opacity="0.85" />
              <ellipse cx="212" cy="111" rx="3.5" ry="2" fill="#FF8A80" opacity="0.85" />

              {/* Sweet Curved Smiling Eyes */}
              <path
                d="M189 106 Q192 101 195 106"
                fill="none"
                stroke="#5D4037"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M205 106 Q208 101 211 106"
                fill="none"
                stroke="#5D4037"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              {/* Happy Smile */}
              <path
                d="M197 111 Q200 115 203 111"
                fill="none"
                stroke="#5D4037"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* ------------------------------------------------------------ */}
          {/* FLUFFY CRAFT CLOUDS                                          */}
          {/* ------------------------------------------------------------ */}
          <g className="sf-cloud sf-cloud--left">
            <path
              d="M100 98 Q100 88 110 88 Q115 78 128 81 Q138 75 148 83 Q158 83 160 93 Q165 98 160 103 Q160 108 150 108 L110 108 Q100 108 100 98 Z"
              fill="#FFFFFF"
              opacity="0.88"
              filter={`url(#sf-shadow-${uid})`}
            />
            {/* Cloud stitch detail */}
            <path
              d="M108 105 L152 105"
              fill="none"
              stroke="#D7CCC8"
              strokeWidth="1"
              strokeDasharray="2 3"
            />
          </g>

          <g className="sf-cloud sf-cloud--right">
            <path
              d="M245 84 Q245 76 253 76 Q258 68 268 70 Q276 65 284 72 Q292 72 294 80 Q298 84 294 88 Q294 92 286 92 L253 92 Q245 92 245 84 Z"
              fill="#FFFFFF"
              opacity="0.8"
              filter={`url(#sf-shadow-${uid})`}
            />
          </g>

          {/* ------------------------------------------------------------ */}
          {/* ROLLING CRAFT HILLS & GARDEN SOIL                            */}
          {/* ------------------------------------------------------------ */}
          {/* Back Hill */}
          <path
            d="M40 330 Q130 262 235 286 Q310 306 360 330 L360 360 L40 360 Z"
            fill={`url(#sf-hill-back-${uid})`}
          />
          <path
            d="M50 328 Q135 264 235 288 Q305 307 355 328"
            fill="none"
            stroke="#FAF7F0"
            strokeWidth="1.5"
            strokeDasharray="3 5"
            opacity="0.75"
          />

          {/* Front Hill */}
          <path
            d="M40 348 Q155 304 275 322 Q335 332 360 350 L360 360 L40 360 Z"
            fill={`url(#sf-hill-front-${uid})`}
          />

          {/* Garden Soil Mound */}
          <ellipse cx="200" cy="336" rx="48" ry="14" fill="#5D4037" />
          <ellipse cx="200" cy="336" rx="40" ry="10" fill="#6D4C41" />
          {/* Soil craft pebble dots */}
          <circle cx="180" cy="336" r="1.8" fill="#8D6E63" />
          <circle cx="218" cy="337" r="1.8" fill="#8D6E63" />
          <circle cx="202" cy="339" r="1.5" fill="#A1887F" />
          <circle cx="192" cy="334" r="1.2" fill="#D7CCC8" />

          {/* ------------------------------------------------------------ */}
          {/* FLOATING SPARKLES & MORNING POLLEN                          */}
          {/* ------------------------------------------------------------ */}
          <g className="sf-sparkles">
            {/* Sparkle 1 */}
            <path
              className="sf-sparkle sf-sparkle--1"
              d="M135 155 Q135 160 140 160 Q135 160 135 165 Q135 160 130 160 Q135 160 135 155 Z"
              fill="#FFD54F"
            />
            {/* Sparkle 2 */}
            <path
              className="sf-sparkle sf-sparkle--2"
              d="M265 148 Q265 154 271 154 Q265 154 265 160 Q265 154 259 154 Q265 154 265 148 Z"
              fill="#FFE082"
            />
            {/* Sparkle 3 */}
            <path
              className="sf-sparkle sf-sparkle--3"
              d="M155 120 Q155 125 160 125 Q155 125 155 130 Q155 125 150 125 Q155 125 155 120 Z"
              fill="#FFF9C4"
            />
            {/* Sparkle 4 */}
            <path
              className="sf-sparkle sf-sparkle--4"
              d="M245 118 Q245 123 250 123 Q245 123 245 128 Q245 123 240 123 Q245 123 245 118 Z"
              fill="#FFD54F"
            />
            {/* Pollen dots */}
            <circle className="sf-pollen sf-pollen--1" cx="170" cy="180" r="1.8" fill="#FFCA28" />
            <circle className="sf-pollen sf-pollen--2" cx="228" cy="175" r="1.8" fill="#FFD54F" />
            <circle className="sf-pollen sf-pollen--3" cx="198" cy="142" r="1.5" fill="#FFE082" />
          </g>

          {/* ------------------------------------------------------------ */}
          {/* THE CARTOON SUNFLOWER: Sprout, Stem, Leaves, & Bloom         */}
          {/* ------------------------------------------------------------ */}
          <g className="sf-sunflower">
            {/* Sprouting Green Stem */}
            <path
              className="sf-stem"
              d="M200 336 C198 296 198 245 200 198"
              fill="none"
              stroke={`url(#sf-stem-${uid})`}
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Stem stitch highlight */}
            <path
              className="sf-stem-stitch"
              d="M200 334 C198 296 198 246 200 200"
              fill="none"
              stroke="#DCEDC8"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              opacity="0.8"
            />

            {/* Left Leaf */}
            <g className="sf-leaf sf-leaf--left" style={{ transformOrigin: "198px 274px" }}>
              <path
                d="M198 274 C180 268 158 256 148 266 C155 284 180 288 198 278 Z"
                fill="#7CB342"
                stroke="#558B2F"
                strokeWidth="1.5"
                filter={`url(#sf-shadow-${uid})`}
              />
              <path
                d="M198 275 Q174 271 150 267"
                fill="none"
                stroke="#C5E1A5"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </g>

            {/* Right Leaf */}
            <g className="sf-leaf sf-leaf--right" style={{ transformOrigin: "200px 248px" }}>
              <path
                d="M200 248 C218 242 240 230 250 240 C243 258 218 262 200 252 Z"
                fill="#7CB342"
                stroke="#558B2F"
                strokeWidth="1.5"
                filter={`url(#sf-shadow-${uid})`}
              />
              <path
                d="M200 249 Q224 245 248 241"
                fill="none"
                stroke="#C5E1A5"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </g>

            {/* ---------------------------------------------------------- */}
            {/* THE SUNFLOWER HEAD: Calyx, 32 Petals, & Cute Smiling Center */}
            {/* ---------------------------------------------------------- */}
            <g className="sf-blossom" style={{ transformOrigin: "200px 198px" }}>
              {/* Green Calyx Sepals (Behind Petals) */}
              <g className="sf-sepals">
                {outerPetals.map((angle) => (
                  <polygon
                    key={`sepal-${angle}`}
                    points="195,198 205,198 200,166"
                    fill="#558B2F"
                    stroke="#33691E"
                    strokeWidth="1"
                    transform={`rotate(${angle + 11.25} 200 198)`}
                  />
                ))}
              </g>

              {/* Outer Petals Layer (16 Golden Sunshine Petals) */}
              <g className="sf-petals-outer">
                {outerPetals.map((angle) => (
                  <g
                    key={`p-out-${angle}`}
                    transform={`rotate(${angle} 200 198)`}
                    filter={`url(#sf-petal-shadow-${uid})`}
                  >
                    <path
                      d="M200 198 C188 178 186 150 200 134 C214 150 212 178 200 198 Z"
                      fill={`url(#sf-petal-outer-${uid})`}
                      stroke="#E65100"
                      strokeWidth="0.8"
                    />
                    {/* Petal paper crease line */}
                    <line
                      x1="200"
                      y1="184"
                      x2="200"
                      y2="142"
                      stroke="#BF360C"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                      opacity="0.38"
                    />
                  </g>
                ))}
              </g>

              {/* Inner Petals Layer (16 Bright Buttercup Petals) */}
              <g className="sf-petals-inner">
                {innerPetals.map((angle) => (
                  <g
                    key={`p-in-${angle}`}
                    transform={`rotate(${angle} 200 198)`}
                    filter={`url(#sf-petal-shadow-${uid})`}
                  >
                    <path
                      d="M200 198 C189 180 188 156 200 142 C211 156 210 180 200 198 Z"
                      fill={`url(#sf-petal-inner-${uid})`}
                      stroke="#F57C00"
                      strokeWidth="0.8"
                    />
                    <line
                      x1="200"
                      y1="185"
                      x2="200"
                      y2="148"
                      stroke="#E65100"
                      strokeWidth="1"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </g>
                ))}
              </g>

              {/* Center Seed Disc with Stitched Texture */}
              <circle
                cx="200"
                cy="198"
                r="29"
                fill={`url(#sf-center-${uid})`}
                stroke="#1B0000"
                strokeWidth="1.5"
                filter={`url(#sf-shadow-${uid})`}
              />

              {/* Concentric Seed Texture Rings */}
              <circle
                cx="200"
                cy="198"
                r="24"
                fill="none"
                stroke="#A1887F"
                strokeWidth="2.2"
                strokeDasharray="2.5 3.5"
                opacity="0.75"
              />
              <circle
                cx="200"
                cy="198"
                r="18"
                fill="none"
                stroke="#8D6E63"
                strokeWidth="1.8"
                strokeDasharray="2 3"
                opacity="0.6"
              />

              {/* ADORABLE CARTOON SUNFLOWER FACE */}
              <g className="sf-face">
                {/* Big Glossy Cartoon Eyes */}
                {/* Left Eye */}
                <ellipse cx="191" cy="195" rx="4.2" ry="4.8" fill="#1A0D00" />
                <circle cx="192.6" cy="193.4" r="1.7" fill="#FFFFFF" />
                <circle cx="189.8" cy="197" r="0.8" fill="#FFFFFF" />

                {/* Right Eye */}
                <ellipse cx="209" cy="195" rx="4.2" ry="4.8" fill="#1A0D00" />
                <circle cx="210.6" cy="193.4" r="1.7" fill="#FFFFFF" />
                <circle cx="207.8" cy="197" r="0.8" fill="#FFFFFF" />

                {/* Cheerful Rosy Pink Cheeks */}
                <ellipse cx="185" cy="200" rx="3.5" ry="2.2" fill="#FF80AB" opacity="0.9" />
                <ellipse cx="215" cy="200" rx="3.5" ry="2.2" fill="#FF80AB" opacity="0.9" />

                {/* Sweet Curved Smile */}
                <path
                  d="M196 202 Q200 207 204 202"
                  fill="none"
                  stroke="#1A0D00"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Tiny Craft Heart on Forehead */}
                <path
                  d="M200 184 C198 181 195 181 195 183 C195 185 200 188 200 188 C200 188 205 185 205 183 C205 181 202 181 200 184 Z"
                  fill="#FF80AB"
                  opacity="0.85"
                />
              </g>
            </g>
          </g>
        </g>

        {/* ============================================================== */}
        {/* THE WOODEN EMBROIDERY HOOP & BRASS CLAMP                       */}
        {/* ============================================================== */}
        {/* Outer Wooden Ring */}
        <circle
          cx="200"
          cy="200"
          r="158"
          fill="none"
          stroke={`url(#sf-wood-${uid})`}
          strokeWidth="14"
          filter={`url(#sf-shadow-${uid})`}
        />
        {/* Inner Wood Grain Line */}
        <circle
          cx="200"
          cy="200"
          r="151"
          fill="none"
          stroke="#7A4E2D"
          strokeWidth="1.8"
          opacity="0.45"
        />
        {/* Outer Wood Rim Line */}
        <circle
          cx="200"
          cy="200"
          r="165"
          fill="none"
          stroke="#683D1F"
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Craft Brass Clamp & Screw at the Top (Hoop Tightener) */}
        <g className="sf-brass-clamp">
          {/* Clamp Base Plate */}
          <rect
            x="189"
            y="26"
            width="22"
            height="18"
            rx="3"
            fill={`url(#sf-brass-${uid})`}
            stroke="#997C22"
            strokeWidth="1.2"
          />
          {/* Horizontal Screw Rod */}
          <rect
            x="178"
            y="32"
            width="44"
            height="6"
            rx="2"
            fill={`url(#sf-brass-${uid})`}
            stroke="#876800"
            strokeWidth="1"
          />
          {/* Thumbscrew Knob */}
          <circle
            cx="225"
            cy="35"
            r="5.5"
            fill={`url(#sf-brass-${uid})`}
            stroke="#876800"
            strokeWidth="1.2"
          />
          <circle cx="225" cy="35" r="2" fill="#FFE082" />
        </g>
      </svg>

      {/* Interactive Micro-badge */}
      <span className="sunflower-badge">
        <span className="sunflower-badge-sparkle">🌻</span>
        {celebrating ? "Blooming with joy!" : "Handcrafted in Bloom"}
      </span>
    </div>
  );
}
