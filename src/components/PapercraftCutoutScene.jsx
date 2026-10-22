import { useState, useId, useEffect } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";

/**
 * PapercraftCutoutScene
 * 
 * An artistic, blissfully animated papercraft shadowbox where a sunflower
 * and smiling sun craft is cut out, assembled, and blooms before your eyes.
 * 
 * Features:
 * - Folded origami & creased sketchbook paper background with realistic light/shadow facets.
 * - Washi tape corners with authentic jagged tear edges.
 * - Animated craft scissors snipping along dotted cutout guidelines (---✂---).
 * - Folded paper sun with alternating accordion-folded ray facets and a cute cartoon face.
 * - Layered cut-paper hills with stitched hems and craft paper drop shadows.
 * - Pop-up origami sunflower with 32 faceted paper petals that unfold with dimensional depth.
 * - Floating paper confetti and petal scraps fluttering in the breeze.
 * - Interactive mode switcher: "Cutout Craft" vs "Full Bloom" + Replay action.
 */
export default function PapercraftCutoutScene({ mode = "craft", onToggleMode }) {
  const uid = useId().replace(/:/g, "");
  const reduced = usePrefersReducedMotion();
  const [craftStage, setCraftStage] = useState(mode); // "craft" | "bloom"
  const [animKey, setAnimKey] = useState(0);

  // Sync with prop if provided
  useEffect(() => {
    setCraftStage(mode);
  }, [mode]);

  const replay = () => {
    setAnimKey((k) => k + 1);
  };

  // Outer & inner petals
  const outerAngles = Array.from({ length: 16 }, (_, i) => i * 22.5);
  const innerAngles = Array.from({ length: 16 }, (_, i) => i * 22.5 + 11.25);
  // 12 faceted sun rays
  const sunRayAngles = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <div
      className={`papercraft-shadowbox stage--${craftStage} ${reduced ? "is-reduced" : ""}`}
      key={animKey}
    >
      {/* ---------------- Washi Tape Top-Left ---------------- */}
      <div className="washi-tape washi-tape--tl" aria-hidden="true">
        <svg viewBox="0 0 100 32" preserveAspectRatio="none">
          <polygon
            points="2,0 98,0 95,32 5,32"
            fill="#E8CFCB"
            fillOpacity="0.88"
          />
          {/* Subtle tape print pattern */}
          <line x1="15" y1="0" x2="15" y2="32" stroke="#FAF7F0" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
          <line x1="50" y1="0" x2="50" y2="32" stroke="#FAF7F0" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
          <line x1="85" y1="0" x2="85" y2="32" stroke="#FAF7F0" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
        </svg>
      </div>

      {/* ---------------- Washi Tape Top-Right ---------------- */}
      <div className="washi-tape washi-tape--tr" aria-hidden="true">
        <svg viewBox="0 0 100 32" preserveAspectRatio="none">
          <polygon
            points="5,0 95,0 98,32 2,32"
            fill="#A3B18A"
            fillOpacity="0.85"
          />
          <line x1="20" y1="0" x2="20" y2="32" stroke="#FAF7F0" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.7" />
          <line x1="50" y1="0" x2="50" y2="32" stroke="#FAF7F0" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.7" />
          <line x1="80" y1="0" x2="80" y2="32" stroke="#FAF7F0" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.7" />
        </svg>
      </div>

      {/* ---------------- The Main Paper Canvas SVG ---------------- */}
      <svg
        className="papercraft-svg"
        viewBox="0 0 480 480"
        role="img"
        aria-label="Folded paper cutout craft animation showing a smiling paper sun rising and a sunflower blooming"
      >
        <defs>
          {/* Papercut shadow filter (layered soft realistic ambient shadow) */}
          <filter id={`paper-shadow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="3.2" floodColor="#3E2C22" floodOpacity="0.22" />
          </filter>

          <filter id={`deep-shadow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="7" stdDeviation="6" floodColor="#3E2C22" floodOpacity="0.28" />
          </filter>

          <filter id={`scissor-shadow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#2A1B14" floodOpacity="0.35" />
          </filter>

          {/* Paper sky gradients */}
          <linearGradient id={`sky-craft-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF4E0" />
            <stop offset="40%" stopColor="#FFE4CE" />
            <stop offset="80%" stopColor="#FBD3C0" />
            <stop offset="100%" stopColor="#F5BEAF" />
          </linearGradient>

          {/* Sun body craft gradient */}
          <linearGradient id={`sun-craft-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="50%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FF9800" />
          </linearGradient>

          {/* Stem paper gradient */}
          <linearGradient id={`stem-craft-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9CCC65" />
            <stop offset="50%" stopColor="#7CB342" />
            <stop offset="100%" stopColor="#558B2F" />
          </linearGradient>

          {/* Center seed disc */}
          <radialGradient id={`seed-craft-${uid}`} cx="38%" cy="34%" r="65%">
            <stop offset="0%" stopColor="#795548" />
            <stop offset="50%" stopColor="#4E342E" />
            <stop offset="100%" stopColor="#2E1C14" />
          </radialGradient>

          {/* Folded paper clip path */}
          <clipPath id={`sheet-clip-${uid}`}>
            <rect x="18" y="18" width="444" height="444" rx="22" />
          </clipPath>
        </defs>

        {/* ========================================================== */}
        {/* BACKGROUND: FOLDED & CREASED ARTISAN PAPER SHEET           */}
        {/* ========================================================== */}
        {/* Base Paper Cast Shadow */}
        <rect
          x="18"
          y="18"
          width="444"
          height="444"
          rx="22"
          fill="#FAF7F0"
          filter={`url(#deep-shadow-${uid})`}
        />

        {/* Paper Sheet Content (clipped) */}
        <g clipPath={`url(#sheet-clip-${uid})`}>
          {/* Dawn morning sky canvas */}
          <rect x="18" y="18" width="444" height="444" fill={`url(#sky-craft-${uid})`} />

          {/* Origami Crease Facets (quadrant folds with light & shadow) */}
          {/* Top-left quadrant (ambient light) */}
          <polygon points="18,18 240,18 240,240 18,240" fill="#FFFFFF" fillOpacity="0.08" />
          {/* Bottom-right quadrant (ambient shade) */}
          <polygon points="240,240 462,240 462,462 240,462" fill="#3E2C22" fillOpacity="0.04" />
          {/* Diagonal paper crease line */}
          <line x1="18" y1="18" x2="462" y2="462" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.4" />
          <line x1="20" y1="20" x2="460" y2="460" stroke="#3E2C22" strokeWidth="1" opacity="0.15" />
          {/* Horizontal and vertical fold lines */}
          <line x1="18" y1="240" x2="462" y2="240" stroke="#3E2C22" strokeWidth="1" strokeDasharray="2 6" opacity="0.25" />
          <line x1="240" y1="18" x2="240" y2="462" stroke="#3E2C22" strokeWidth="1" strokeDasharray="2 6" opacity="0.25" />

          {/* Dotted sketch grid / cutting blueprint guidelines */}
          <g className="paper-guidelines" opacity="0.45">
            <circle cx="240" cy="120" r="70" fill="none" stroke="#D7CCC8" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="240" cy="245" r="95" fill="none" stroke="#D7CCC8" strokeWidth="1.2" strokeDasharray="5 7" />
            <line x1="60" y1="80" x2="420" y2="80" stroke="#EFEBE9" strokeWidth="1" />
            <line x1="60" y1="400" x2="420" y2="400" stroke="#EFEBE9" strokeWidth="1" />
          </g>

          {/* -------------------------------------------------------- */}
          {/* THE FOLDED PAPER SUN (Rises with origami-faceted rays)   */}
          {/* -------------------------------------------------------- */}
          <g className="paper-sun">
            {/* Soft Warm Morning Radiance Glow */}
            <circle cx="240" cy="125" r="74" fill="#FFE082" fillOpacity="0.4" className="sun-pulse-glow" />

            {/* Accordion-Folded Sun Rays (Dual-Faceted Paper Triangles) */}
            <g className="paper-sun-rays" style={{ transformOrigin: "240px 125px" }}>
              {sunRayAngles.map((angle) => (
                <g key={`ray-${angle}`} transform={`rotate(${angle} 240 125)`}>
                  {/* Left Facet (Light side) */}
                  <polygon points="240,125 235,88 240,70" fill="#FFF176" filter={`url(#paper-shadow-${uid})`} />
                  {/* Right Facet (Shaded side) */}
                  <polygon points="240,125 240,70 245,88" fill="#FFB300" filter={`url(#paper-shadow-${uid})`} />
                  {/* Paper spine crease */}
                  <line x1="240" y1="125" x2="240" y2="70" stroke="#F57F17" strokeWidth="0.8" opacity="0.5" />
                </g>
              ))}
            </g>

            {/* Main Sun Paper Cutout Disc */}
            <circle
              cx="240"
              cy="125"
              r="34"
              fill={`url(#sun-craft-${uid})`}
              stroke="#FFA000"
              strokeWidth="2"
              filter={`url(#paper-shadow-${uid})`}
            />

            {/* Cartoon Paper Face */}
            <g className="paper-sun-face">
              {/* Sweet closed smiling eyes */}
              <path d="M226 122 Q230 116 234 122" fill="none" stroke="#5D4037" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M246 122 Q250 116 254 122" fill="none" stroke="#5D4037" strokeWidth="2.2" strokeLinecap="round" />
              {/* Rosy paper cutout cheeks */}
              <circle cx="224" cy="129" r="4.2" fill="#FF8A80" fillOpacity="0.9" />
              <circle cx="256" cy="129" r="4.2" fill="#FF8A80" fillOpacity="0.9" />
              {/* Joyful smile */}
              <path d="M236 128 Q240 134 244 128" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>

          {/* -------------------------------------------------------- */}
          {/* CUT-PAPER ROLLING HILLS (Layered with stitched edges)    */}
          {/* -------------------------------------------------------- */}
          {/* Distant Paper Hill (Soft Sage Paper) */}
          <path
            d="M18 390 Q120 310 240 338 Q360 365 462 390 L462 462 L18 462 Z"
            fill="#DCE7C8"
            filter={`url(#paper-shadow-${uid})`}
          />
          {/* White thread stitch line along top curve */}
          <path
            d="M26 388 Q125 312 240 340 Q355 367 454 388"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeDasharray="4 6"
            opacity="0.8"
          />

          {/* Foreground Paper Hill (Fresh Leaf Green Paper) */}
          <path
            d="M18 415 Q150 360 300 380 Q390 392 462 415 L462 462 L18 462 Z"
            fill="#A3B18A"
            filter={`url(#paper-shadow-${uid})`}
          />
          <path
            d="M26 413 Q150 362 298 382 Q388 394 454 413"
            fill="none"
            stroke="#FAF7F0"
            strokeWidth="1.6"
            strokeDasharray="3 5"
            opacity="0.75"
          />

          {/* Plant Mound Base (Clay-colored craft paper) */}
          <ellipse cx="240" cy="405" rx="58" ry="16" fill="#6D4C41" filter={`url(#paper-shadow-${uid})`} />
          <ellipse cx="240" cy="405" rx="46" ry="11" fill="#8D6E63" />

          {/* -------------------------------------------------------- */}
          {/* THE CUTOUT SUNFLOWER CRAFT (Stem, Faceted Petals, Bloom)  */}
          {/* -------------------------------------------------------- */}
          <g className="paper-sunflower">
            {/* Green Folded Paper Stem */}
            <g className="paper-stem-group">
              <path
                className="paper-stem"
                d="M240 405 C237 355 237 305 240 245"
                fill="none"
                stroke={`url(#stem-craft-${uid})`}
                strokeWidth="9"
                strokeLinecap="round"
                filter={`url(#paper-shadow-${uid})`}
              />
              {/* Stem central fold crease */}
              <path
                d="M240 403 C237 355 237 305 240 248"
                fill="none"
                stroke="#C5E1A5"
                strokeWidth="1.4"
                strokeDasharray="3 4"
                opacity="0.9"
              />
            </g>

            {/* Left Origami Folded Leaf */}
            <g className="paper-leaf paper-leaf--left" style={{ transformOrigin: "238px 338px" }}>
              {/* Upper leaf half (light facet) */}
              <path
                d="M238 338 C216 330 188 314 174 326 C182 348 214 354 238 343 Z"
                fill="#8BC34A"
                filter={`url(#paper-shadow-${uid})`}
              />
              {/* Lower leaf half (shadow facet) */}
              <path
                d="M238 338 C210 338 186 332 174 326 C186 348 218 352 238 343 Z"
                fill="#689F38"
              />
              {/* Paper spine crease */}
              <path d="M238 339 Q206 333 176 327" fill="none" stroke="#DCEDC8" strokeWidth="1.6" strokeLinecap="round" />
            </g>

            {/* Right Origami Folded Leaf */}
            <g className="paper-leaf paper-leaf--right" style={{ transformOrigin: "240px 305px" }}>
              <path
                d="M240 305 C262 297 290 281 304 293 C296 315 264 321 240 310 Z"
                fill="#8BC34A"
                filter={`url(#paper-shadow-${uid})`}
              />
              <path
                d="M240 305 C268 305 292 299 304 293 C292 315 260 319 240 310 Z"
                fill="#689F38"
              />
              <path d="M240 306 Q272 300 302 294" fill="none" stroke="#DCEDC8" strokeWidth="1.6" strokeLinecap="round" />
            </g>

            {/* ------------------------------------------------------ */}
            {/* THE SUNFLOWER HEAD (Faceted 32-Petal Origami Bloom)     */}
            {/* ------------------------------------------------------ */}
            <g className="paper-flower-head" style={{ transformOrigin: "240px 245px" }}>
              {/* Green Calyx Paper Points */}
              <g className="paper-calyx">
                {outerAngles.map((angle) => (
                  <polygon
                    key={`calyx-${angle}`}
                    points="234,245 246,245 240,204"
                    fill="#558B2F"
                    stroke="#33691E"
                    strokeWidth="0.8"
                    transform={`rotate(${angle + 11.25} 240 245)`}
                  />
                ))}
              </g>

              {/* Outer Layer: 16 Faceted Golden Paper Petals */}
              <g className="paper-petals-outer">
                {outerAngles.map((angle) => (
                  <g
                    key={`p-out-${angle}`}
                    transform={`rotate(${angle} 240 245)`}
                    filter={`url(#paper-shadow-${uid})`}
                  >
                    {/* Left Petal Half (Light Facet) */}
                    <path
                      d="M240 245 C226 220 224 186 240 166 L240 245 Z"
                      fill="#FFCA28"
                    />
                    {/* Right Petal Half (Shadow Facet) */}
                    <path
                      d="M240 245 L240 166 C256 186 254 220 240 245 Z"
                      fill="#F57C00"
                    />
                    {/* Origami Center Crease */}
                    <line
                      x1="240"
                      y1="245"
                      x2="240"
                      y2="168"
                      stroke="#FFE082"
                      strokeWidth="1.2"
                      opacity="0.8"
                    />
                    {/* Dotted craft cutting guideline on petal border */}
                    <path
                      d="M240 166 C256 186 254 220 240 245 C226 220 224 186 240 166"
                      fill="none"
                      stroke="#BF360C"
                      strokeWidth="0.8"
                      strokeDasharray="2 3"
                      opacity="0.4"
                    />
                  </g>
                ))}
              </g>

              {/* Inner Layer: 16 Bright Buttercup Paper Petals */}
              <g className="paper-petals-inner">
                {innerAngles.map((angle) => (
                  <g
                    key={`p-in-${angle}`}
                    transform={`rotate(${angle} 240 245)`}
                    filter={`url(#paper-shadow-${uid})`}
                  >
                    {/* Left half */}
                    <path
                      d="M240 245 C228 222 226 194 240 176 L240 245 Z"
                      fill="#FFF59D"
                    />
                    {/* Right half */}
                    <path
                      d="M240 245 L240 176 C252 194 250 222 240 245 Z"
                      fill="#FFA000"
                    />
                    <line
                      x1="240"
                      y1="245"
                      x2="240"
                      y2="178"
                      stroke="#FFFDE7"
                      strokeWidth="1"
                      opacity="0.85"
                    />
                  </g>
                ))}
              </g>

              {/* Seed Center: Cut Paper Circles with Punched Dots */}
              <circle
                cx="240"
                cy="245"
                r="36"
                fill={`url(#seed-craft-${uid})`}
                stroke="#1B0000"
                strokeWidth="1.8"
                filter={`url(#paper-shadow-${uid})`}
              />
              {/* Concentric Punched Paper Seed Dots */}
              <circle
                cx="240"
                cy="245"
                r="30"
                fill="none"
                stroke="#A1887F"
                strokeWidth="2.5"
                strokeDasharray="3 4"
                opacity="0.85"
              />
              <circle
                cx="240"
                cy="245"
                r="22"
                fill="none"
                stroke="#8D6E63"
                strokeWidth="2"
                strokeDasharray="2.5 3.5"
                opacity="0.75"
              />

              {/* ADORABLE CARTOON SUNFLOWER FACE */}
              <g className="paper-flower-face">
                {/* Big glossy cartoon eyes with light sparkles */}
                <ellipse cx="229" cy="241" rx="5.2" ry="5.8" fill="#1A0D00" />
                <circle cx="231" cy="239" r="2" fill="#FFFFFF" />
                <circle cx="227.5" cy="243.5" r="0.9" fill="#FFFFFF" />

                <ellipse cx="251" cy="241" rx="5.2" ry="5.8" fill="#1A0D00" />
                <circle cx="253" cy="239" r="2" fill="#FFFFFF" />
                <circle cx="249.5" cy="243.5" r="0.9" fill="#FFFFFF" />

                {/* Rosy paper blush cheeks */}
                <ellipse cx="221" cy="247" rx="4.5" ry="2.8" fill="#FF80AB" fillOpacity="0.95" />
                <ellipse cx="259" cy="247" rx="4.5" ry="2.8" fill="#FF80AB" fillOpacity="0.95" />

                {/* Sweet curved smile */}
                <path
                  d="M235 249 Q240 256 245 249"
                  fill="none"
                  stroke="#1A0D00"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />

                {/* Papercraft heart badge */}
                <path
                  d="M240 228 C238 225 234 225 234 227 C234 230 240 234 240 234 C240 234 246 230 246 227 C246 225 242 225 240 228 Z"
                  fill="#FF80AB"
                  filter={`url(#paper-shadow-${uid})`}
                />
              </g>
            </g>
          </g>

          {/* -------------------------------------------------------- */}
          {/* FLOATING PAPER CONFETTI & CUTOUT SPARKLES               */}
          {/* -------------------------------------------------------- */}
          <g className="paper-confetti">
            {/* Paper Diamond 1 */}
            <polygon
              className="confetti confetti--1"
              points="150,180 156,186 150,192 144,186"
              fill="#FFD54F"
              filter={`url(#paper-shadow-${uid})`}
            />
            {/* Paper Diamond 2 */}
            <polygon
              className="confetti confetti--2"
              points="335,175 342,182 335,189 328,182"
              fill="#E8CFCB"
              filter={`url(#paper-shadow-${uid})`}
            />
            {/* Paper Diamond 3 */}
            <polygon
              className="confetti confetti--3"
              points="175,135 180,140 175,145 170,140"
              fill="#A3B18A"
              filter={`url(#paper-shadow-${uid})`}
            />
            {/* Paper Diamond 4 */}
            <polygon
              className="confetti confetti--4"
              points="310,130 315,135 310,140 305,135"
              fill="#FF8A80"
              filter={`url(#paper-shadow-${uid})`}
            />
            {/* Paper Star Sparkle */}
            <path
              className="confetti confetti--star"
              d="M240 60 Q240 68 248 68 Q240 68 240 76 Q240 68 232 68 Q240 68 240 60 Z"
              fill="#FFE082"
              filter={`url(#paper-shadow-${uid})`}
            />
          </g>

          {/* -------------------------------------------------------- */}
          {/* CRAFT SCISSORS & CUTTING GUIDELINE (---✂---)             */}
          {/* -------------------------------------------------------- */}
          <g className="paper-scissors-layer">
            {/* Dotted cut line traced by the scissors */}
            <path
              className="scissor-cut-path"
              d="M75 190 Q120 150 170 170 Q220 190 240 160 Q260 130 310 150 Q360 170 405 130"
              fill="none"
              stroke="#8D6E63"
              strokeWidth="1.6"
              strokeDasharray="4 6"
              opacity="0.8"
            />

            {/* Vintage Golden Craft Scissors */}
            <g className="craft-scissors" filter={`url(#scissor-shadow-${uid})`}>
              {/* Top Blade */}
              <polygon points="0,0 26,-7 23,-2 0,0" fill="#E0E0E0" stroke="#9E9E9E" strokeWidth="0.8" />
              {/* Bottom Blade */}
              <polygon points="0,0 26,7 23,2 0,0" fill="#EEEEEE" stroke="#9E9E9E" strokeWidth="0.8" />
              {/* Center Pivot Screw */}
              <circle cx="2" cy="0" r="2.2" fill="#D4AF37" stroke="#876800" strokeWidth="0.8" />
              {/* Golden Brass Handles */}
              {/* Upper Loop */}
              <ellipse cx="-11" cy="-8" rx="8" ry="6" fill="none" stroke="#D4AF37" strokeWidth="3" />
              {/* Lower Loop */}
              <ellipse cx="-11" cy="8" rx="8" ry="6" fill="none" stroke="#D4AF37" strokeWidth="3" />
              {/* Cute little cutting snip indicator */}
              <text x="14" y="-12" fontSize="10" fill="#5D4037" fontWeight="bold" fontFamily="monospace">
                ✂
              </text>
            </g>
          </g>
        </g>

        {/* Outer Deckle / Perforated Paper Border */}
        <rect
          x="18"
          y="18"
          width="444"
          height="444"
          rx="22"
          fill="none"
          stroke="#FAF7F0"
          strokeWidth="3"
          strokeDasharray="8 6"
          opacity="0.4"
        />
      </svg>

      {/* ---------------- Interactive Craft Controls ---------------- */}
      <div className="papercraft-toolbar">
        <button
          type="button"
          className={`craft-mode-btn ${craftStage === "craft" ? "is-active" : ""}`}
          onClick={() => {
            setCraftStage("craft");
            if (onToggleMode) onToggleMode("craft");
          }}
          aria-pressed={craftStage === "craft"}
        >
          <span>✂</span> Cutout Craft
        </button>

        <button
          type="button"
          className={`craft-mode-btn ${craftStage === "bloom" ? "is-active" : ""}`}
          onClick={() => {
            setCraftStage("bloom");
            if (onToggleMode) onToggleMode("bloom");
          }}
          aria-pressed={craftStage === "bloom"}
        >
          <span>🌻</span> Blissful Bloom
        </button>

        <button
          type="button"
          className="craft-replay-btn"
          onClick={replay}
          title="Replay craft cutout animation"
          aria-label="Replay craft cutout animation"
        >
          ↺ Snip & Bloom
        </button>
      </div>
    </div>
  );
}
