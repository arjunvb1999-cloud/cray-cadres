import { useState, useId } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";

/**
 * CinematicCraftScene
 * 
 * A cinematic, storytelling hero animation for Cray Cadres:
 * - Scene 1: Soft warm cream atmosphere, golden sunlight beam, and illuminated dust particles across natural oak wood table.
 * - Scene 2 & 3: Transparent glass cup containing a radiant sunflower falls from above, tilting with momentum,
 *   makes gentle contact with the wooden table, rolls slightly and settles intact without breaking.
 * - Scene 4: Coordinated spreading animation of artist paintbrushes, scissors, coloured pencils, paint tubes,
 *   golden satin ribbon spool, handmade deckle-edge botanical paper, and dried petal cutouts.
 * - Scene 5: Balanced, high-end editorial still-life composition with gentle idle petal sway, sunbeam warmth,
 *   and realistic contact shadows.
 */
export default function CinematicCraftScene() {
  const uid = useId().replace(/:/g, "");
  const reduced = usePrefersReducedMotion();
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey((k) => k + 1);
  };

  // Outer ring of 20 elongated golden petals
  const outerPetals = Array.from({ length: 20 }, (_, i) => ({
    angle: i * 18,
    length: i % 2 === 0 ? 54 : 48,
    width: i % 2 === 0 ? 17 : 15,
  }));

  // Inner ring of 20 offset amber/gold petals for botanical depth
  const innerPetals = Array.from({ length: 20 }, (_, i) => ({
    angle: i * 18 + 9,
    length: i % 2 === 0 ? 44 : 40,
    width: i % 2 === 0 ? 15 : 13,
  }));

  // Sunlight illuminated floating dust particles
  const dustParticles = [
    { cx: 75, cy: 110, r: 1.6, delay: "0s", dur: "7s" },
    { cx: 155, cy: 80, r: 2.2, delay: "1.2s", dur: "8.5s" },
    { cx: 215, cy: 150, r: 1.5, delay: "2.4s", dur: "6.2s" },
    { cx: 135, cy: 210, r: 1.9, delay: "0.8s", dur: "7.8s" },
    { cx: 280, cy: 105, r: 1.7, delay: "3.1s", dur: "9.2s" },
    { cx: 335, cy: 185, r: 1.4, delay: "1.7s", dur: "6.5s" },
    { cx: 185, cy: 265, r: 2.3, delay: "3.9s", dur: "8.2s" },
    { cx: 255, cy: 235, r: 1.6, delay: "2.0s", dur: "7.1s" },
    { cx: 105, cy: 175, r: 1.3, delay: "3.4s", dur: "6.8s" },
    { cx: 375, cy: 130, r: 2.0, delay: "0.5s", dur: "8.6s" },
    { cx: 420, cy: 210, r: 1.5, delay: "2.8s", dur: "7.4s" },
    { cx: 160, cy: 310, r: 1.8, delay: "1.0s", dur: "8.0s" },
  ];

  return (
    <div
      className={`cinematic-craft-container ${reduced ? "is-reduced" : ""}`}
      key={replayKey}
      role="region"
      aria-label="Cinematic craft table animation with sunflower, transparent glass cup, and handmade artist tools"
    >
      <svg
        className="cinematic-craft-svg"
        viewBox="0 0 660 530"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ---------------- Realistic Soft Drop Shadows ---------------- */}
          <filter id={`soft-shadow-${uid}`} x="-35%" y="-35%" width="170%" height="170%">
            <feDropShadow dx="0" dy="7" stdDeviation="7" floodColor="#261A12" floodOpacity="0.20" />
          </filter>

          <filter id={`deep-shadow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="12" stdDeviation="11" floodColor="#1C120B" floodOpacity="0.27" />
          </filter>

          <filter id={`contact-shadow-filter-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" />
          </filter>

          <filter id={`glass-blur-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.8" />
          </filter>

          {/* ---------------- Natural Oak Wood Table Grain ---------------- */}
          <linearGradient id={`wood-base-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D4A77D" />
            <stop offset="30%" stopColor="#C4966C" />
            <stop offset="65%" stopColor="#B3845B" />
            <stop offset="100%" stopColor="#956740" />
          </linearGradient>

          <linearGradient id={`wood-sheen-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF7E8" stopOpacity="0.32" />
            <stop offset="40%" stopColor="#FFE5B9" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#3E2723" stopOpacity="0.22" />
          </linearGradient>

          {/* ---------------- Golden Sunlight Beam ---------------- */}
          <linearGradient id={`sunlight-beam-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF9E6" stopOpacity="0.68" />
            <stop offset="28%" stopColor="#FFE8A3" stopOpacity="0.48" />
            <stop offset="65%" stopColor="#FFD54F" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#FFA000" stopOpacity="0" />
          </linearGradient>

          {/* ---------------- Glass Cup Shaders ---------------- */}
          <linearGradient id={`glass-body-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.58" />
            <stop offset="14%" stopColor="#E0F2FE" stopOpacity="0.16" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="86%" stopColor="#E0F2FE" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.68" />
          </linearGradient>

          <linearGradient id={`glass-base-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#90A4AE" stopOpacity="0.65" />
          </linearGradient>

          <linearGradient id={`glass-water-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E0F7FA" stopOpacity="0.42" />
            <stop offset="50%" stopColor="#B2EBF2" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#80DEEA" stopOpacity="0.32" />
          </linearGradient>

          {/* ---------------- Sunflower Petals & Center Shaders ---------------- */}
          <radialGradient id={`seed-center-${uid}`} cx="42%" cy="40%" r="62%">
            <stop offset="0%" stopColor="#5D4037" />
            <stop offset="42%" stopColor="#3E2723" />
            <stop offset="82%" stopColor="#271810" />
            <stop offset="100%" stopColor="#170C05" />
          </radialGradient>

          <radialGradient id={`petal-warmth-outer-${uid}`} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="35%" stopColor="#F4C542" />
            <stop offset="78%" stopColor="#E8A15A" />
            <stop offset="100%" stopColor="#D97706" />
          </radialGradient>

          <radialGradient id={`petal-warmth-inner-${uid}`} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="85%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </radialGradient>

          {/* ---------------- Brass & Metal Shaders ---------------- */}
          <linearGradient id={`brass-metal-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF0B3" />
            <stop offset="38%" stopColor="#D4AF37" />
            <stop offset="78%" stopColor="#A8820B" />
            <stop offset="100%" stopColor="#6D5000" />
          </linearGradient>

          <linearGradient id={`steel-blade-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#ECEFF1" />
            <stop offset="80%" stopColor="#CFD8DC" />
            <stop offset="100%" stopColor="#90A4AE" />
          </linearGradient>

          <linearGradient id={`ribbon-satin-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="35%" stopColor="#F59E0B" />
            <stop offset="80%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id={`deckle-card-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#F5EFE6" />
          </linearGradient>
        </defs>

        {/* ================================================================ */}
        {/* SCENE 1: WARM SUNSHINE & NATURAL OAK WOOD CRAFTING TABLE         */}
        {/* ================================================================ */}
        <g className="scene-background">
          {/* Wooden Tabletop Base */}
          <rect x="0" y="0" width="660" height="530" rx="18" fill={`url(#wood-base-${uid})`} />

          {/* Wood Planks & Natural Grain Lines */}
          <g className="wood-grain" opacity="0.38">
            {/* Plank separator seams */}
            <line x1="0" y1="135" x2="660" y2="135" stroke="#5D4037" strokeWidth="1.8" />
            <line x1="0" y1="136" x2="660" y2="136" stroke="#FFE0B2" strokeWidth="0.8" opacity="0.55" />
            <line x1="0" y1="270" x2="660" y2="270" stroke="#5D4037" strokeWidth="1.8" />
            <line x1="0" y1="271" x2="660" y2="271" stroke="#FFE0B2" strokeWidth="0.8" opacity="0.55" />
            <line x1="0" y1="405" x2="660" y2="405" stroke="#5D4037" strokeWidth="1.8" />
            <line x1="0" y1="406" x2="660" y2="406" stroke="#FFE0B2" strokeWidth="0.8" opacity="0.55" />

            {/* Fine grain flow */}
            <path d="M0 65 Q190 55 380 70 T660 60" stroke="#795548" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M0 195 Q230 210 460 190 T660 205" stroke="#795548" strokeWidth="1.2" fill="none" opacity="0.45" />
            <path d="M0 335 Q170 320 340 340 T660 330" stroke="#795548" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M0 465 Q280 485 540 460 T660 475" stroke="#795548" strokeWidth="1" fill="none" opacity="0.35" />

            {/* Natural wood knots */}
            <ellipse cx="140" cy="95" rx="14" ry="7" fill="none" stroke="#6D4C41" strokeWidth="1" opacity="0.3" />
            <ellipse cx="530" cy="365" rx="18" ry="8" fill="none" stroke="#6D4C41" strokeWidth="1" opacity="0.25" />
          </g>

          {/* Surface Sheen & Ambient Lighting */}
          <rect x="0" y="0" width="660" height="530" rx="18" fill={`url(#wood-sheen-${uid})`} />

          {/* Golden-Hour Sunlight Beam from Top-Left */}
          <polygon
            className="sunlight-beam"
            points="0,0 290,0 560,530 0,530"
            fill={`url(#sunlight-beam-${uid})`}
          />

          {/* Illuminated Sun Dust Motes */}
          <g className="sun-dust-layer">
            {dustParticles.map((m, idx) => (
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
          {/* ---------------- 1. Handmade Botanical Paper Cutout ---------------- */}
          <g className="supply-item supply-paper-card" filter={`url(#soft-shadow-${uid})`}>
            {/* Deckle-edged watercolor paper */}
            <rect
              x="50"
              y="60"
              width="120"
              height="155"
              rx="4"
              fill={`url(#deckle-card-${uid})`}
              stroke="#E8DFD3"
              strokeWidth="1.2"
              transform="rotate(-8 110 137)"
            />
            {/* Pressed botanical illustration on paper */}
            <g transform="rotate(-8 110 137)" opacity="0.6">
              <path d="M110 85 Q110 145 110 178" stroke="#8D6E63" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="110" cy="90" r="7.5" fill="none" stroke="#8D6E63" strokeWidth="1.2" />
              <path d="M110 120 Q92 110 85 118 Q92 126 110 124" fill="#A3B18A" fillOpacity="0.4" stroke="#795548" strokeWidth="1" />
              <path d="M110 142 Q128 132 135 140 Q128 148 110 146" fill="#A3B18A" fillOpacity="0.4" stroke="#795548" strokeWidth="1" />
              <text x="75" y="195" fill="#A87954" fontSize="8" fontFamily="'DM Sans', sans-serif" letterSpacing="0.05em">
                CRAY CADRES · BOTANICAL
              </text>
            </g>
          </g>

          {/* Kraft Gift Tag with eyelet & twine */}
          <g className="supply-item supply-kraft-tag" filter={`url(#soft-shadow-${uid})`}>
            <polygon
              points="480,68 555,68 566,93 555,118 480,118"
              fill="#E5D6C5"
              stroke="#D2C1AF"
              strokeWidth="1"
              transform="rotate(14 520 93)"
            />
            <circle cx="494" cy="93" r="3.6" fill="#FFF8EF" stroke={`url(#brass-metal-${uid})`} strokeWidth="1.2" transform="rotate(14 520 93)" />
            {/* Twine thread */}
            <path d="M490 91 C465 80 450 70 435 75" stroke="#BCAAA4" strokeWidth="1.4" fill="none" strokeLinecap="round" transform="rotate(14 520 93)" />
            <text
              x="506"
              y="97"
              fill="#5D4037"
              fontSize="9.5"
              fontFamily="'DM Sans', sans-serif"
              fontWeight="700"
              letterSpacing="0.08em"
              transform="rotate(14 520 93)"
            >
              HANDMADE
            </text>
          </g>

          {/* ---------------- 2. Artist Paintbrushes ---------------- */}
          {/* Paintbrush 1: Slender Birch Handle with Cobalt Blue Tip (Slides to upper right) */}
          <g className="supply-item supply-brush-1" filter={`url(#soft-shadow-${uid})`}>
            {/* Wood handle */}
            <path d="M450 75 L585 22" stroke="#D7BA8E" strokeWidth="7" strokeLinecap="round" />
            <path d="M450 75 L585 22" stroke="#EFE3CE" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
            {/* Nickel ferrule */}
            <path d="M448 76 L424 85" stroke="#CFD8DC" strokeWidth="8" strokeLinecap="round" />
            <line x1="436" y1="78" x2="434" y2="84" stroke="#90A4AE" strokeWidth="1.2" />
            {/* Dark sable bristles */}
            <path d="M423 85 Q411 90 404 95 Q415 97 421 87 Z" fill="#2C3E50" />
            {/* Cobalt blue paint tip */}
            <path d="M413 90 Q404 95 401 96 Q411 98 417 92 Z" fill="#2563EB" />
          </g>

          {/* Paintbrush 2: Mahogany Handle with Brass Ferrule & Ochre Gold Tip (Slides to upper left) */}
          <g className="supply-item supply-brush-2" filter={`url(#soft-shadow-${uid})`}>
            {/* Rich dark wood handle */}
            <path d="M125 215 L25 145" stroke="#7A4338" strokeWidth="6.5" strokeLinecap="round" />
            <path d="M125 215 L25 145" stroke="#A86E61" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
            {/* Brass ferrule */}
            <path d="M125 215 L143 228" stroke={`url(#brass-metal-${uid})`} strokeWidth="7.5" strokeLinecap="round" />
            {/* Natural bristles */}
            <path d="M144 229 Q153 236 159 241 Q154 243 146 232 Z" fill="#4E342E" />
            {/* Warm Ochre Paint tip */}
            <path d="M151 234 Q159 241 161 243 Q157 244 149 237 Z" fill="#F59E0B" />
          </g>

          {/* Paintbrush 3: Fine Detail Rigger Brush (Mid-Right) */}
          <g className="supply-item supply-brush-3" filter={`url(#soft-shadow-${uid})`}>
            <path d="M545 180 L625 130" stroke="#3E2723" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M545 180 L532 188" stroke={`url(#brass-metal-${uid})`} strokeWidth="5.5" strokeLinecap="round" />
            <path d="M531 189 Q522 195 517 198 Q525 200 529 191 Z" fill="#879875" />
          </g>

          {/* ---------------- 3. Vintage Artisan Shears / Scissors (Lower Right) ---------------- */}
          <g className="supply-item supply-scissors" filter={`url(#deep-shadow-${uid})`}>
            {/* Left Stainless Steel Blade */}
            <path d="M470 355 L545 410" stroke={`url(#steel-blade-${uid})`} strokeWidth="5.5" strokeLinecap="round" />
            {/* Right Stainless Steel Blade */}
            <path d="M480 347 L540 420" stroke={`url(#steel-blade-${uid})`} strokeWidth="5.5" strokeLinecap="round" />
            {/* Golden Brass Pivot Screw */}
            <circle cx="507" cy="383" r="4" fill={`url(#brass-metal-${uid})`} stroke="#876800" strokeWidth="1" />
            {/* Vintage Ornate Brass Loop Handles */}
            <ellipse
              cx="559"
              cy="421"
              rx="14"
              ry="10"
              fill="none"
              stroke={`url(#brass-metal-${uid})`}
              strokeWidth="4.5"
              transform="rotate(38 559 421)"
            />
            <ellipse
              cx="553"
              cy="433"
              rx="13"
              ry="9"
              fill="none"
              stroke={`url(#brass-metal-${uid})`}
              strokeWidth="4.5"
              transform="rotate(38 553 433)"
            />
          </g>

          {/* ---------------- 4. Artist Coloured Pencils ---------------- */}
          {/* Pencil 1: Forest Sage Green (Lower Left) */}
          <g className="supply-item supply-pencil-1" filter={`url(#soft-shadow-${uid})`}>
            {/* Hexagonal lacquer body */}
            <path d="M135 385 L55 430" stroke="#5A7352" strokeWidth="6.5" strokeLinecap="round" />
            {/* Gold foil imprint accent */}
            <line x1="88" y1="411" x2="90" y2="409" stroke="#FFE082" strokeWidth="1.2" />
            {/* Sharpened cedar wood cone */}
            <polygon points="135,384 147,378 138,390" fill="#D7CCC8" />
            {/* Sharp dark green lead tip */}
            <polygon points="143,380 150,376 145,383" fill="#2E4429" />
          </g>

          {/* Pencil 2: Sunflower Yellow (Lower Center-Left) */}
          <g className="supply-item supply-pencil-2" filter={`url(#soft-shadow-${uid})`}>
            <path d="M190 455 L115 480" stroke="#F4C542" strokeWidth="6" strokeLinecap="round" />
            <polygon points="190,454 201,450 193,459" fill="#D7CCC8" />
            <polygon points="197,451 204,449 199,455" fill="#D97706" />
          </g>

          {/* ---------------- 5. Miniature Artist Paint Tubes ---------------- */}
          {/* Paint Tube 1: Warm Amber Orange (Mid Right) */}
          <g className="supply-item supply-paint-tube-1" filter={`url(#soft-shadow-${uid})`}>
            {/* Tube body */}
            <rect
              x="515"
              y="245"
              width="50"
              height="21"
              rx="3"
              fill="#E8A15A"
              stroke="#C57C36"
              strokeWidth="1"
              transform="rotate(-16 540 255)"
            />
            {/* Crimped end */}
            <line
              x1="512"
              y1="243"
              x2="512"
              y2="263"
              stroke="#8D6E63"
              strokeWidth="3.2"
              strokeLinecap="square"
              transform="rotate(-16 540 255)"
            />
            {/* Screw cap */}
            <rect x="565" y="249" width="8.5" height="13" rx="1.5" fill="#37474F" transform="rotate(-16 540 255)" />
            {/* Typography Label */}
            <text
              x="523"
              y="258"
              fill="#3E2723"
              fontSize="7.5"
              fontWeight="bold"
              fontFamily="monospace"
              transform="rotate(-16 540 255)"
            >
              OCHRE
            </text>
          </g>

          {/* Paint Tube 2: Sage Green (Mid Left) */}
          <g className="supply-item supply-paint-tube-2" filter={`url(#soft-shadow-${uid})`}>
            <rect
              x="78"
              y="285"
              width="45"
              height="19"
              rx="2.5"
              fill="#879875"
              stroke="#5D6F4B"
              strokeWidth="1"
              transform="rotate(22 100 294)"
            />
            <line
              x1="75"
              y1="283"
              x2="75"
              y2="301"
              stroke="#4E342E"
              strokeWidth="2.8"
              transform="rotate(22 100 294)"
            />
            <rect x="123" y="289" width="7" height="11" rx="1.5" fill="#37474F" transform="rotate(22 100 294)" />
          </g>

          {/* ---------------- 6. Wooden Spool & Unfurling Satin Ribbon ---------------- */}
          <g className="supply-item supply-ribbon-spool" filter={`url(#deep-shadow-${uid})`}>
            {/* Graceful flowing satin ribbon curving across the oak table grain */}
            <path
              className="flowing-ribbon"
              d="M395 415 C425 442 458 452 495 440 C532 428 565 455 595 448"
              fill="none"
              stroke={`url(#ribbon-satin-${uid})`}
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* Satin highlight sheen */}
            <path
              d="M396 414 C425 441 458 451 495 439 C532 427 565 454 595 447"
              fill="none"
              stroke="#FFF9C4"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity="0.65"
            />
            {/* Turned Wooden Ribbon Spool Bobbin */}
            <ellipse cx="385" cy="410" rx="15" ry="21" fill="#B58A63" stroke="#8D5B4C" strokeWidth="1.2" />
            <ellipse cx="385" cy="410" rx="9" ry="14" fill="#D7CCC8" />
            <rect x="375" y="398" width="20" height="24" fill="#D97706" />
            <circle cx="385" cy="410" r="4" fill="#3E2723" />
          </g>

          {/* ---------------- 7. Dried Petal Cutouts (Gentle handmade accents) ---------------- */}
          <g className="supply-item supply-petal-confetti" opacity="0.85">
            <ellipse cx="230" cy="405" rx="6" ry="3.5" fill="#F4C542" transform="rotate(25 230 405)" />
            <ellipse cx="330" cy="445" rx="7" ry="4" fill="#E8A15A" transform="rotate(-35 330 445)" />
            <ellipse cx="450" cy="290" rx="5.5" ry="3" fill="#F5B72E" transform="rotate(45 450 290)" />
          </g>
        </g>

        {/* ================================================================ */}
        {/* SCENE 2, 3 & 5: THE TRANSPARENT GLASS CUP & SUNFLOWER HERO       */}
        {/* ================================================================ */}
        <g className="sunflower-cup-hero">
          {/* Dynamic Table Contact Shadow */}
          <ellipse
            className="cup-contact-shadow"
            cx="295"
            cy="385"
            rx="70"
            ry="26"
            fill="#1A0F07"
            opacity="0.4"
            filter={`url(#contact-shadow-filter-${uid})`}
          />

          {/* The Falling & Tilting Cup Group */}
          <g className="falling-glass-group">
            {/* ---------------- The Natural Sunflower ---------------- */}
            <g className="hero-sunflower">
              {/* Organic Green Stem */}
              <path
                className="sunflower-stem"
                d="M272 350 C267 285 258 230 262 160"
                fill="none"
                stroke="#558B2F"
                strokeWidth="7.5"
                strokeLinecap="round"
              />
              {/* Stem highlight */}
              <path
                d="M273 348 C268 285 259 230 263 162"
                fill="none"
                stroke="#8BC34A"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* Natural Leaves on the Stem */}
              {/* Left Leaf */}
              <g className="sunflower-leaf leaf-left">
                <path
                  d="M265 265 C235 256 198 244 182 260 C193 284 235 288 263 271 Z"
                  fill="#689F38"
                  stroke="#33691E"
                  strokeWidth="1.2"
                />
                <path d="M264 266 Q224 260 188 258" stroke="#AED581" strokeWidth="1.5" fill="none" />
                <path d="M228 262 Q220 252 215 248" stroke="#9CCC65" strokeWidth="1" fill="none" opacity="0.7" />
                <path d="M232 264 Q228 274 220 278" stroke="#9CCC65" strokeWidth="1" fill="none" opacity="0.7" />
              </g>

              {/* Right Leaf */}
              <g className="sunflower-leaf leaf-right">
                <path
                  d="M261 222 C288 211 326 200 342 216 C331 240 289 245 260 228 Z"
                  fill="#7CB342"
                  stroke="#33691E"
                  strokeWidth="1.2"
                />
                <path d="M260 223 Q298 217 336 214" stroke="#C5E1A5" strokeWidth="1.5" fill="none" />
                <path d="M294 220 Q302 210 308 206" stroke="#AED581" strokeWidth="1" fill="none" opacity="0.7" />
                <path d="M298 221 Q304 231 312 235" stroke="#AED581" strokeWidth="1" fill="none" opacity="0.7" />
              </g>

              {/* ---------------- Sunflower Blossom Head ---------------- */}
              <g className="sunflower-head" style={{ transformOrigin: "262px 155px" }}>
                {/* Back Sepals / Calyx */}
                {outerPetals.map((p, idx) => (
                  <polygon
                    key={`calyx-${idx}`}
                    points="257,155 267,155 262,106"
                    fill="#33691E"
                    transform={`rotate(${p.angle + 9} 262 155)`}
                  />
                ))}

                {/* Layer 1: 20 Outer Golden Sunflower Petals */}
                {outerPetals.map((p, idx) => (
                  <g key={`petal-outer-${idx}`} transform={`rotate(${p.angle} 262 155)`}>
                    <path
                      d={`M262 155 C${262 - p.width / 2} ${155 - p.length * 0.4} ${
                        262 - p.width / 2
                      } ${155 - p.length * 0.8} 262 ${155 - p.length} C${
                        262 + p.width / 2
                      } ${155 - p.length * 0.8} ${262 + p.width / 2} ${
                        155 - p.length * 0.4
                      } 262 155 Z`}
                      fill={`url(#petal-warmth-outer-${uid})`}
                      stroke="#D97706"
                      strokeWidth="0.8"
                    />
                    {/* Natural Petal Crease & Golden Highlight */}
                    <line
                      x1="262"
                      y1="150"
                      x2="262"
                      y2={155 - p.length * 0.88}
                      stroke="#FFF59D"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                      opacity="0.75"
                    />
                  </g>
                ))}

                {/* Layer 2: 20 Inner Offset Amber Sunflower Petals (Lush botanical depth) */}
                {innerPetals.map((p, idx) => (
                  <g key={`petal-inner-${idx}`} transform={`rotate(${p.angle} 262 155)`}>
                    <path
                      d={`M262 155 C${262 - p.width / 2} ${155 - p.length * 0.4} ${
                        262 - p.width / 2
                      } ${155 - p.length * 0.8} 262 ${155 - p.length} C${
                        262 + p.width / 2
                      } ${155 - p.length * 0.8} ${262 + p.width / 2} ${
                        155 - p.length * 0.4
                      } 262 155 Z`}
                      fill={`url(#petal-warmth-inner-${uid})`}
                      stroke="#B45309"
                      strokeWidth="0.7"
                    />
                    <line
                      x1="262"
                      y1="150"
                      x2="262"
                      y2={155 - p.length * 0.85}
                      stroke="#FFE082"
                      strokeWidth="1"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </g>
                ))}

                {/* Rich Textured Brown Seed Center */}
                <circle
                  cx="262"
                  cy="155"
                  r="33"
                  fill={`url(#seed-center-${uid})`}
                  stroke="#170C05"
                  strokeWidth="2.2"
                />

                {/* Concentric Golden Seed Spirals (Fibonacci disc florets) */}
                <circle
                  cx="262"
                  cy="155"
                  r="27"
                  fill="none"
                  stroke="#A1887F"
                  strokeWidth="2.5"
                  strokeDasharray="2.5 3.5"
                  opacity="0.85"
                />
                <circle
                  cx="262"
                  cy="155"
                  r="20"
                  fill="none"
                  stroke="#8D6E63"
                  strokeWidth="2"
                  strokeDasharray="2 3"
                  opacity="0.8"
                />
                <circle
                  cx="262"
                  cy="155"
                  r="13"
                  fill="none"
                  stroke="#6D4C41"
                  strokeWidth="1.8"
                  strokeDasharray="1.8 2.5"
                  opacity="0.65"
                />
                <circle
                  cx="262"
                  cy="155"
                  r="6"
                  fill="none"
                  stroke="#5D4037"
                  strokeWidth="1.5"
                  strokeDasharray="1.5 2"
                  opacity="0.5"
                />

                {/* Warm Golden Core Disc Highlight */}
                <circle cx="255" cy="148" r="5" fill="#FFA000" opacity="0.5" filter={`url(#glass-blur-${uid})`} />
              </g>
            </g>

            {/* ---------------- The Transparent Glass Cup ---------------- */}
            <g className="transparent-glass-cup">
              {/* Glass Inner Shadow Depth */}
              <path
                d="M234 265 L248 375 C249 383 257 387 272 387 C287 387 295 383 296 375 L310 265 Z"
                fill="#263238"
                fillOpacity="0.09"
              />

              {/* Water Refraction Level inside the Glass */}
              <ellipse cx="272" cy="342" rx="28" ry="6.5" fill="#E0F7FA" fillOpacity="0.38" />
              <path
                d="M244 342 L248 375 C249 383 257 387 272 387 C287 387 295 383 296 375 L300 342 Z"
                fill={`url(#glass-water-${uid})`}
              />

              {/* Submerged stem portion inside water with refraction offset */}
              <path
                d="M270 342 C269 355 268 368 271 378"
                stroke="#689F38"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.45"
              />

              {/* Main Transparent Glass Body */}
              <path
                d="M234 265 L248 375 C249 383 257 388 272 388 C287 388 295 383 296 375 L310 265 Z"
                fill={`url(#glass-body-${uid})`}
              />

              {/* Heavy Solid Glass Base with Caustic Lens Effect */}
              <path
                d="M247 370 L248 378 C249 385 258 389 272 389 C286 389 295 385 296 378 L297 370 Z"
                fill={`url(#glass-base-${uid})`}
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeOpacity="0.85"
              />

              {/* Bright Specular Glass Highlights (Edge reflections) */}
              {/* Left rim vertical reflection */}
              <path
                d="M237 267 L250 372"
                stroke="#FFFFFF"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeOpacity="0.85"
              />
              <path
                d="M240 271 L252 370"
                stroke="#E0F2FE"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeOpacity="0.6"
              />

              {/* Right rim vertical reflection */}
              <path
                d="M307 267 L294 372"
                stroke="#FFFFFF"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeOpacity="0.9"
              />

              {/* Top Glass Oval Rim with Specular Sheen */}
              <ellipse
                cx="272"
                cy="265"
                rx="38"
                ry="8.5"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.4"
                strokeOpacity="0.92"
              />
              <ellipse
                cx="272"
                cy="265"
                rx="36"
                ry="7.5"
                fill="#FFFFFF"
                fillOpacity="0.12"
              />
              {/* Rim specular star glint */}
              <circle cx="303" cy="263" r="2.4" fill="#FFFFFF" />
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
