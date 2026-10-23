import { useState, useId } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";

/**
 * CinematicCraftScene
 * 
 * A cinematic, storytelling hero animation for Cray Cadres:
 * - Scene 1: Soft warm sunshine and dust motes illuminate a natural oak crafting table.
 * - Scene 2 & 3: Transparent glass cup holding a sunflower falls from above, tilts,
 *   and makes gentle contact with the wooden table, settling naturally.
 * - Scene 4: Coordinated spreading animation of artist paintbrushes, scissors,
 *   pencils, paint tubes, satin ribbon spool, and handmade paper cutouts.
 * - Scene 5: Balanced, high-end editorial still-life composition with gentle idle
 *   petal breathing, sunbeam shimmer, and soft contact shadows.
 */
export default function CinematicCraftScene() {
  const uid = useId().replace(/:/g, "");
  const reduced = usePrefersReducedMotion();
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey((k) => k + 1);
  };

  // 24 sunflower petals around the center
  const petals = Array.from({ length: 24 }, (_, i) => ({
    angle: i * 15,
    length: i % 2 === 0 ? 52 : 46,
    width: i % 2 === 0 ? 16 : 14,
    color: i % 3 === 0 ? "#F4C542" : i % 3 === 1 ? "#F5B72E" : "#E8A15A",
  }));

  // Sunlight dust motes
  const dustMotes = [
    { cx: 80, cy: 120, r: 1.8, delay: "0s", dur: "7s" },
    { cx: 160, cy: 90, r: 2.2, delay: "1.2s", dur: "8.5s" },
    { cx: 220, cy: 160, r: 1.5, delay: "2.5s", dur: "6s" },
    { cx: 140, cy: 220, r: 2.0, delay: "0.8s", dur: "7.5s" },
    { cx: 290, cy: 110, r: 1.6, delay: "3.2s", dur: "9s" },
    { cx: 340, cy: 190, r: 1.4, delay: "1.8s", dur: "6.8s" },
    { cx: 190, cy: 270, r: 2.4, delay: "4s", dur: "8s" },
    { cx: 260, cy: 240, r: 1.7, delay: "2.1s", dur: "7.2s" },
    { cx: 110, cy: 180, r: 1.3, delay: "3.5s", dur: "6.5s" },
    { cx: 380, cy: 140, r: 2.1, delay: "0.4s", dur: "8.8s" },
  ];

  return (
    <div
      className={`cinematic-craft-container ${reduced ? "is-reduced" : ""}`}
      key={replayKey}
      role="region"
      aria-label="Cinematic craft table animation with sunflower, glass cup, and artist tools"
    >
      <svg
        className="cinematic-craft-svg"
        viewBox="0 0 640 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ---------------- Realistic Soft Drop Shadows ---------------- */}
          <filter id={`soft-shadow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#261A12" floodOpacity="0.22" />
          </filter>

          <filter id={`table-contact-shadow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#1F140D" floodOpacity="0.28" />
          </filter>

          <filter id={`glass-blur-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>

          {/* ---------------- Natural Oak Wood Table Grain ---------------- */}
          <linearGradient id={`wood-base-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8A07A" />
            <stop offset="35%" stopColor="#B68B64" />
            <stop offset="70%" stopColor="#A87954" />
            <stop offset="100%" stopColor="#8C5F3B" />
          </linearGradient>

          <linearGradient id={`wood-sheen-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF4E0" stopOpacity="0.3" />
            <stop offset="45%" stopColor="#FFE0B2" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3E2723" stopOpacity="0.2" />
          </linearGradient>

          {/* ---------------- Golden Sunlight Beam ---------------- */}
          <linearGradient id={`sunlight-beam-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF9E6" stopOpacity="0.65" />
            <stop offset="30%" stopColor="#FFE8A3" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#FFD54F" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFA000" stopOpacity="0" />
          </linearGradient>

          {/* ---------------- Glass Cup Shaders ---------------- */}
          <linearGradient id={`glass-body-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
            <stop offset="15%" stopColor="#E0F2FE" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="85%" stopColor="#E0F2FE" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.65" />
          </linearGradient>

          <linearGradient id={`glass-base-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#B0BEC5" stopOpacity="0.6" />
          </linearGradient>

          {/* ---------------- Sunflower Center Shaders ---------------- */}
          <radialGradient id={`seed-center-${uid}`} cx="40%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#5D4037" />
            <stop offset="45%" stopColor="#3E2723" />
            <stop offset="85%" stopColor="#271810" />
            <stop offset="100%" stopColor="#1A0D06" />
          </radialGradient>

          <radialGradient id={`petal-warmth-${uid}`} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="35%" stopColor="#F4C542" />
            <stop offset="75%" stopColor="#E8A15A" />
            <stop offset="100%" stopColor="#D97706" />
          </radialGradient>

          {/* ---------------- Brass & Metal Shaders ---------------- */}
          <linearGradient id={`brass-metal-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="40%" stopColor="#D4AF37" />
            <stop offset="80%" stopColor="#AA820A" />
            <stop offset="100%" stopColor="#6D5000" />
          </linearGradient>

          <linearGradient id={`steel-blade-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#ECEFF1" />
            <stop offset="85%" stopColor="#CFD8DC" />
            <stop offset="100%" stopColor="#90A4AE" />
          </linearGradient>

          <linearGradient id={`ribbon-satin-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="85%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>

        {/* ================================================================ */}
        {/* SCENE 1: WARM SUNSHINE & NATURAL OAK WOOD CRAFTING TABLE         */}
        {/* ================================================================ */}
        <g className="scene-background">
          {/* Wooden Tabletop Base */}
          <rect x="0" y="0" width="640" height="520" rx="16" fill={`url(#wood-base-${uid})`} />

          {/* Wood Planks & Natural Grain Lines */}
          <g className="wood-grain" opacity="0.35">
            {/* Plank separator seams */}
            <line x1="0" y1="130" x2="640" y2="130" stroke="#5D4037" strokeWidth="1.8" />
            <line x1="0" y1="131" x2="640" y2="131" stroke="#FFE0B2" strokeWidth="0.8" opacity="0.5" />
            <line x1="0" y1="260" x2="640" y2="260" stroke="#5D4037" strokeWidth="1.8" />
            <line x1="0" y1="261" x2="640" y2="261" stroke="#FFE0B2" strokeWidth="0.8" opacity="0.5" />
            <line x1="0" y1="390" x2="640" y2="390" stroke="#5D4037" strokeWidth="1.8" />
            <line x1="0" y1="391" x2="640" y2="391" stroke="#FFE0B2" strokeWidth="0.8" opacity="0.5" />

            {/* Fine grain flow */}
            <path d="M0 60 Q180 50 360 65 T640 55" stroke="#795548" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M0 185 Q220 200 440 180 T640 195" stroke="#795548" strokeWidth="1.2" fill="none" opacity="0.45" />
            <path d="M0 320 Q160 305 320 325 T640 315" stroke="#795548" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M0 450 Q260 470 520 445 T640 460" stroke="#795548" strokeWidth="1" fill="none" opacity="0.35" />
          </g>

          {/* Surface Sheen & Ambient Occlusion */}
          <rect x="0" y="0" width="640" height="520" rx="16" fill={`url(#wood-sheen-${uid})`} />

          {/* Golden-Hour Sunlight Beam from Top-Left */}
          <polygon
            className="sunlight-beam"
            points="0,0 280,0 540,520 0,520"
            fill={`url(#sunlight-beam-${uid})`}
          />

          {/* Illuminated Sun Dust Motes */}
          <g className="sun-dust-layer">
            {dustMotes.map((m, idx) => (
              <circle
                key={`mote-${idx}`}
                className="dust-mote"
                cx={m.cx}
                cy={m.cy}
                r={m.r}
                fill="#FFF9E6"
                style={{
                  animationDuration: m.dur,
                  animationDelay: m.delay,
                }}
              />
            ))}
          </g>
        </g>

        {/* ================================================================ */}
        {/* SCENE 4: SPREADING CRAFT SUPPLIES (Frame the central flower)     */}
        {/* ================================================================ */}
        <g className="craft-supplies-layer">
          {/* ---------------- 1. Handmade Botanical Paper Cutouts ---------------- */}
          <g className="supply-item supply-paper-card" filter={`url(#soft-shadow-${uid})`}>
            {/* Deckle-edged watercolor paper */}
            <rect x="55" y="65" width="115" height="150" rx="4" fill="#FFFDF8" stroke="#EFEBE9" strokeWidth="1.2" transform="rotate(-8 112 140)" />
            {/* Pressed flower botanical sketch */}
            <g transform="rotate(-8 112 140)" opacity="0.55">
              <path d="M112 90 Q112 150 112 180" stroke="#8D6E63" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="112" cy="95" r="7" fill="none" stroke="#8D6E63" strokeWidth="1.2" />
              <path d="M112 125 Q95 115 88 122 Q95 130 112 128" fill="#A3B18A" fillOpacity="0.35" stroke="#795548" strokeWidth="1" />
              <path d="M112 145 Q128 135 135 142 Q128 150 112 148" fill="#A3B18A" fillOpacity="0.35" stroke="#795548" strokeWidth="1" />
            </g>
          </g>

          {/* Smaller Kraft Tag Cutout */}
          <g className="supply-item supply-kraft-tag" filter={`url(#soft-shadow-${uid})`}>
            <polygon points="460,70 535,70 545,95 535,120 460,120" fill="#EADBC8" stroke="#D7CCC8" strokeWidth="1" transform="rotate(14 500 95)" />
            <circle cx="475" cy="95" r="3.5" fill="#FAF7F0" stroke="#BCAAA4" strokeWidth="1" transform="rotate(14 500 95)" />
            <text x="490" y="99" fill="#5D4037" fontSize="10" fontFamily="'DM Sans', sans-serif" fontWeight="600" letterSpacing="0.06em" transform="rotate(14 500 95)">
              HANDMADE
            </text>
          </g>

          {/* ---------------- 2. Artist Paintbrushes ---------------- */}
          {/* Paintbrush 1: Cobalt Blue Tip (Slides to upper right) */}
          <g className="supply-item supply-brush-1" filter={`url(#soft-shadow-${uid})`}>
            {/* Wood handle */}
            <path d="M430 80 L560 30" stroke="#C9A675" strokeWidth="7" strokeLinecap="round" />
            <path d="M430 80 L560 30" stroke="#E6D3B3" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            {/* Silver nickel ferrule */}
            <path d="M428 81 L405 90" stroke="#D5D8DC" strokeWidth="8" strokeLinecap="round" />
            <line x1="416" y1="83" x2="414" y2="89" stroke="#90A4AE" strokeWidth="1.2" />
            {/* Fine artist bristles */}
            <path d="M404 90 Q392 95 385 100 Q396 102 402 92 Z" fill="#2C3E50" />
            {/* Cobalt blue paint tip */}
            <path d="M394 95 Q385 100 382 101 Q392 103 398 97 Z" fill="#2563EB" />
          </g>

          {/* Paintbrush 2: Ochre Gold Tip (Slides to upper left) */}
          <g className="supply-item supply-brush-2" filter={`url(#soft-shadow-${uid})`}>
            {/* Dark cherry handle */}
            <path d="M120 220 L25 150" stroke="#8D5B4C" strokeWidth="6.5" strokeLinecap="round" />
            <path d="M120 220 L25 150" stroke="#BCAAA4" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
            {/* Brass ferrule */}
            <path d="M120 220 L138 233" stroke="url(#brass-metal)" strokeWidth="7.5" strokeLinecap="round" />
            {/* Bristles */}
            <path d="M139 234 Q148 241 154 246 Q149 248 141 237 Z" fill="#4E342E" />
            {/* Warm Ochre Paint tip */}
            <path d="M146 239 Q154 246 156 248 Q152 249 144 242 Z" fill="#F59E0B" />
          </g>

          {/* ---------------- 3. Artist Shears / Scissors (Lower Right) ---------------- */}
          <g className="supply-item supply-scissors" filter={`url(#soft-shadow-${uid})`}>
            {/* Left Blade (Stainless Steel) */}
            <path d="M455 350 L530 405" stroke={`url(#steel-blade-${uid})`} strokeWidth="5.5" strokeLinecap="round" />
            {/* Right Blade */}
            <path d="M465 342 L525 415" stroke={`url(#steel-blade-${uid})`} strokeWidth="5.5" strokeLinecap="round" />
            {/* Golden Pivot Screw */}
            <circle cx="492" cy="378" r="3.8" fill={`url(#brass-metal-${uid})`} stroke="#876800" strokeWidth="1" />
            {/* Vintage Brass Handles */}
            <ellipse cx="544" cy="416" rx="14" ry="10" fill="none" stroke={`url(#brass-metal-${uid})`} strokeWidth="4.5" transform="rotate(38 544 416)" />
            <ellipse cx="538" cy="428" rx="13" ry="9" fill="none" stroke={`url(#brass-metal-${uid})`} strokeWidth="4.5" transform="rotate(38 538 428)" />
          </g>

          {/* ---------------- 4. Artist Coloured Pencils ---------------- */}
          {/* Pencil 1: Forest Sage Green (Lower Left) */}
          <g className="supply-item supply-pencil-1" filter={`url(#soft-shadow-${uid})`}>
            {/* Hexagonal lacquer body */}
            <path d="M130 380 L55 425" stroke="#5A7352" strokeWidth="6.5" strokeLinecap="round" />
            {/* Gold foil imprint accent */}
            <line x1="85" y1="407" x2="87" y2="405" stroke="#FFE082" strokeWidth="1.2" />
            {/* Sharpened cedar wood cone */}
            <polygon points="130,379 142,373 133,385" fill="#D7CCC8" />
            {/* Sharp colored lead tip */}
            <polygon points="138,375 145,371 140,378" fill="#3B5335" />
          </g>

          {/* Pencil 2: Sunflower Yellow (Lower Center-Left) */}
          <g className="supply-item supply-pencil-2" filter={`url(#soft-shadow-${uid})`}>
            <path d="M185 450 L110 475" stroke="#F4C542" strokeWidth="6" strokeLinecap="round" />
            <polygon points="185,449 196,445 188,454" fill="#D7CCC8" />
            <polygon points="192,446 199,444 194,450" fill="#E69500" />
          </g>

          {/* ---------------- 5. Squeezed Artist Paint Tubes ---------------- */}
          {/* Paint Tube 1: Warm Amber Orange (Mid Right) */}
          <g className="supply-item supply-paint-tube-1" filter={`url(#soft-shadow-${uid})`}>
            {/* Tube body */}
            <rect x="495" y="240" width="48" height="20" rx="3" fill="#E8A15A" stroke="#C57C36" strokeWidth="1" transform="rotate(-16 519 250)" />
            {/* Crimped end */}
            <line x1="492" y1="238" x2="492" y2="258" stroke="#8D6E63" strokeWidth="3" strokeLinecap="square" transform="rotate(-16 519 250)" />
            {/* Screw cap */}
            <rect x="543" y="244" width="8" height="12" rx="1.5" fill="#37474F" transform="rotate(-16 519 250)" />
            {/* Label */}
            <text x="502" y="253" fill="#3E2723" fontSize="7" fontWeight="bold" fontFamily="monospace" transform="rotate(-16 519 250)">
              OCHRE
            </text>
          </g>

          {/* Paint Tube 2: Sage Green (Mid Left) */}
          <g className="supply-item supply-paint-tube-2" filter={`url(#soft-shadow-${uid})`}>
            <rect x="75" y="280" width="44" height="18" rx="2.5" fill="#879875" stroke="#607250" strokeWidth="1" transform="rotate(22 97 289)" />
            <line x1="72" y1="278" x2="72" y2="296" stroke="#4E342E" strokeWidth="2.8" transform="rotate(22 97 289)" />
            <rect x="119" y="284" width="7" height="10" rx="1.5" fill="#37474F" transform="rotate(22 97 289)" />
          </g>

          {/* ---------------- 6. Wooden Spool & Satin Ribbon ---------------- */}
          <g className="supply-item supply-ribbon-spool" filter={`url(#soft-shadow-${uid})`}>
            {/* Unfurling satin ribbon curving across the wood */}
            <path
              className="flowing-ribbon"
              d="M385 410 C410 435 440 445 475 435 C510 425 540 450 565 445"
              fill="none"
              stroke={`url(#ribbon-satin-${uid})`}
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* Satin highlight sheen */}
            <path
              d="M386 409 C410 434 440 444 475 434 C510 424 540 449 565 444"
              fill="none"
              stroke="#FFF9C4"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Wooden Ribbon Spool Bobbin */}
            <ellipse cx="375" cy="405" rx="14" ry="20" fill="#B58A63" stroke="#8D5B4C" strokeWidth="1.2" />
            <ellipse cx="375" cy="405" rx="8" ry="13" fill="#D7CCC8" />
            <rect x="365" y="393" width="20" height="24" fill="#D97706" />
            <circle cx="375" cy="405" r="4" fill="#3E2723" />
          </g>
        </g>

        {/* ================================================================ */}
        {/* SCENE 2, 3 & 5: THE TRANSPARENT GLASS CUP & SUNFLOWER HERO       */}
        {/* ================================================================ */}
        <g className="sunflower-cup-hero" filter={`url(#table-contact-shadow-${uid})`}>
          {/* Dynamic Table Contact Shadow */}
          <ellipse
            className="cup-contact-shadow"
            cx="285"
            cy="375"
            rx="65"
            ry="24"
            fill="#1E130B"
            opacity="0.35"
            filter={`url(#glass-blur-${uid})`}
          />

          {/* The Falling & Tilting Cup Group */}
          <g className="falling-glass-group">
            {/* ---------------- The Natural Sunflower ---------------- */}
            <g className="hero-sunflower">
              {/* Organic Green Stem */}
              <path
                className="sunflower-stem"
                d="M265 340 C260 280 252 230 255 160"
                fill="none"
                stroke="#558B2F"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M266 338 C261 280 253 230 256 162"
                fill="none"
                stroke="#8BC34A"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.75"
              />

              {/* Natural Leaves on the Stem */}
              {/* Left Leaf */}
              <g className="sunflower-leaf leaf-left">
                <path
                  d="M258 260 C230 252 195 240 180 255 C190 278 230 282 256 266 Z"
                  fill="#689F38"
                  stroke="#33691E"
                  strokeWidth="1.2"
                />
                <path d="M257 261 Q220 255 185 253" stroke="#9CCC65" strokeWidth="1.4" fill="none" />
              </g>

              {/* Right Leaf */}
              <g className="sunflower-leaf leaf-right">
                <path
                  d="M255 220 C280 210 315 200 330 215 C320 238 280 242 254 226 Z"
                  fill="#7CB342"
                  stroke="#33691E"
                  strokeWidth="1.2"
                />
                <path d="M254 221 Q290 215 325 213" stroke="#AED581" strokeWidth="1.4" fill="none" />
              </g>

              {/* ---------------- Sunflower Blossom Head ---------------- */}
              <g className="sunflower-head" style={{ transformOrigin: "255px 155px" }}>
                {/* Back Sepals / Calyx */}
                {petals.map((p, idx) => (
                  <polygon
                    key={`calyx-${idx}`}
                    points="250,155 260,155 255,108"
                    fill="#33691E"
                    transform={`rotate(${p.angle + 7.5} 255 155)`}
                  />
                ))}

                {/* 24 Radiant Golden Sunflower Petals with Organic Depth */}
                {petals.map((p, idx) => (
                  <g key={`petal-${idx}`} transform={`rotate(${p.angle} 255 155)`}>
                    {/* Petal Outer Body */}
                    <path
                      d={`M255 155 C${255 - p.width / 2} ${155 - p.length * 0.4} ${
                        255 - p.width / 2
                      } ${155 - p.length * 0.8} 255 ${155 - p.length} C${
                        255 + p.width / 2
                      } ${155 - p.length * 0.8} ${255 + p.width / 2} ${
                        155 - p.length * 0.4
                      } 255 155 Z`}
                      fill={`url(#petal-warmth-${uid})`}
                      stroke="#D97706"
                      strokeWidth="0.8"
                    />
                    {/* Natural Petal Crease & Highlight */}
                    <line
                      x1="255"
                      y1="150"
                      x2="255"
                      y2={155 - p.length * 0.88}
                      stroke="#FFE082"
                      strokeWidth="1"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </g>
                ))}

                {/* Rich Textured Brown Seed Center */}
                <circle
                  cx="255"
                  cy="155"
                  r="32"
                  fill={`url(#seed-center-${uid})`}
                  stroke="#1A0D06"
                  strokeWidth="2"
                />

                {/* Concentric Golden Seed Spirals */}
                <circle
                  cx="255"
                  cy="155"
                  r="26"
                  fill="none"
                  stroke="#A1887F"
                  strokeWidth="2.4"
                  strokeDasharray="2.5 3.5"
                  opacity="0.8"
                />
                <circle
                  cx="255"
                  cy="155"
                  r="19"
                  fill="none"
                  stroke="#8D6E63"
                  strokeWidth="2"
                  strokeDasharray="2 3"
                  opacity="0.75"
                />
                <circle
                  cx="255"
                  cy="155"
                  r="12"
                  fill="none"
                  stroke="#6D4C41"
                  strokeWidth="1.8"
                  strokeDasharray="1.8 2.5"
                  opacity="0.6"
                />

                {/* Warm Golden Core Highlight */}
                <circle cx="248" cy="148" r="4.5" fill="#FFA000" opacity="0.45" filter={`url(#glass-blur-${uid})`} />
              </g>
            </g>

            {/* ---------------- The Transparent Glass Cup ---------------- */}
            <g className="transparent-glass-cup">
              {/* Glass Shadow inside itself */}
              <path
                d="M228 260 L242 365 C243 372 250 376 265 376 C280 376 287 372 288 365 L302 260 Z"
                fill="#263238"
                fillOpacity="0.08"
              />

              {/* Water Refraction Level inside the Glass */}
              <ellipse cx="265" cy="335" rx="27" ry="6" fill="#E0F2FE" fillOpacity="0.32" />
              <path
                d="M238 335 L242 365 C243 372 250 376 265 376 C280 376 287 372 288 365 L292 335 Z"
                fill="#B3E5FC"
                fillOpacity="0.18"
              />

              {/* Main Transparent Glass Body */}
              <path
                d="M228 260 L242 365 C243 373 250 377 265 377 C280 377 287 373 288 365 L302 260 Z"
                fill={`url(#glass-body-${uid})`}
              />

              {/* Heavy Solid Glass Base with Caustics */}
              <path
                d="M241 360 L242 368 C243 375 251 378 265 378 C279 378 287 375 288 368 L289 360 Z"
                fill={`url(#glass-base-${uid})`}
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeOpacity="0.8"
              />

              {/* Bright Specular Glass Highlights (Edge reflections) */}
              {/* Left rim reflection */}
              <path
                d="M231 262 L244 362"
                stroke="#FFFFFF"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeOpacity="0.85"
              />
              <path
                d="M234 266 L246 360"
                stroke="#E0F2FE"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeOpacity="0.6"
              />

              {/* Right rim reflection */}
              <path
                d="M299 262 L286 362"
                stroke="#FFFFFF"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeOpacity="0.9"
              />

              {/* Top Glass Oval Rim with Specular Sheen */}
              <ellipse
                cx="265"
                cy="260"
                rx="37"
                ry="8"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                strokeOpacity="0.9"
              />
              <ellipse
                cx="265"
                cy="260"
                rx="35"
                ry="7"
                fill="#FFFFFF"
                fillOpacity="0.1"
              />
              {/* Rim sparkle */}
              <circle cx="295" cy="258" r="2.2" fill="#FFFFFF" />
            </g>
          </g>
        </g>
      </svg>

      {/* ---------------- Editorial Story Badge & Replay Trigger ---------------- */}
      <div className="cinematic-craft-footer">
        <span className="craft-scene-label">
          <span className="live-dot" />
          The Sunlit Atelier · A Creative Story
        </span>
        <button
          type="button"
          className="replay-story-btn"
          onClick={handleReplay}
          title="Replay the cinematic story animation"
          aria-label="Replay the cinematic story animation"
        >
          <span className="replay-icon">↺</span> Replay Story
        </button>
      </div>
    </div>
  );
}
