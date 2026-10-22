import { useId } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";

// The hero artwork: an embroidery hoop with a needle that stitches a heart
// sprig onto fabric, over and over.
//
// Pure SVG + CSS/SMIL (see the "STITCH LOOP" section in styles.css), so it adds
// no extra libraries. Decorative only - the heading already says the same
// thing - so it is hidden from screen readers.
//
// How it works:
//  - A mask holds a fat white stroke along the shape; animating its dash
//    offset pulls the thread through the fabric bit by bit.
//  - The visible layer on top is dashed, so it reads as real stitches.
//  - The needle rides the heart path via SMIL <animateMotion>, timed with
//    keyTimes so it always sits exactly at the end of the thread.
//  - The whole design fades out at the end of the loop, so it can start again.
//
// Timing (one loop = 9s):
//  0% - 52%  the heart is stitched
//  56% - 70%  the leaf is stitched
//  76% - 100% the design fades out to start over

const HEART =
  "M200 262.6 C142.4 223 122.2 183.4 148.2 157.5 C168.3 137.4 191.4 148.9 200 170.5 " +
  "C208.6 148.9 231.7 137.4 251.8 157.5 C277.8 183.4 257.6 223 200 262.6 Z";

const LEAF = "M247 236 C266 224 278 206 280 186 C262 196 249 214 247 236 Z";

export default function EmbroideryHoop() {
  const uid = useId().replace(/:/g, "");
  const heartId = `cc-heart-${uid}`;
  const leafId = `cc-leaf-${uid}`;
  const reduced = usePrefersReducedMotion();

  return (
    <svg
      className="hoop"
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* pathLength="100" makes the dash values the same on both shapes */}
        <path id={heartId} d={HEART} pathLength="100" />
        <path id={leafId} d={LEAF} pathLength="100" />

        {/* Masks that reveal the shapes as the thread is pulled through */}
        <mask id={`${heartId}-m`} maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="400">
          <use className="stitch-reveal stitch-reveal--heart" href={`#${heartId}`} />
        </mask>
        <mask id={`${leafId}-m`} maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="400">
          <use className="stitch-reveal stitch-reveal--leaf" href={`#${leafId}`} />
        </mask>
      </defs>

      {/* Fabric stretched across the hoop */}
      <circle cx="200" cy="200" r="150" fill="#FAF7F0" />

      {/* A soft blush glow behind the design */}
      <circle className="hoop-glow" cx="200" cy="200" r="132" />

      {/* The heart and leaf, stitched over and over */}
      <g className="stitch-fade">
        <g mask={`url(#${heartId}-m)`}>
          <path className="stitch stitch--heart" d={HEART} />
        </g>
        <g mask={`url(#${leafId}-m)`}>
          <path className="stitch stitch--leaf" d={LEAF} />
        </g>
      </g>

      {/* Wooden hoop drawn over the fabric */}
      <circle className="hoop-ring" cx="200" cy="200" r="162" />
      <circle className="hoop-ring hoop-ring--inner" cx="200" cy="200" r="146" />

      {/* The needles, riding along the stitched lines.
          Their SMIL timing is linear and matches the CSS reveal exactly. */}
      {!reduced && (
        <g className="needle needle--heart">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;0.52"
            rotate="auto"
          >
            <mpath href={`#${heartId}`} />
          </animateMotion>
          <path className="needle-thread" d="M-10 0 C-22 -4 -28 -14 -24 -24" fill="none" />
          <path d="M-9 0 L14 0" stroke="#4A3B32" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="-11" cy="0" r="3.2" fill="#E8CFCB" stroke="#4A3B32" strokeWidth="1.2" />
        </g>
      )}

      {!reduced && (
        <g className="needle needle--leaf">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0.56;0.70"
            rotate="auto"
          >
            <mpath href={`#${leafId}`} />
          </animateMotion>
          <path className="needle-thread" d="M-10 0 C-22 -4 -28 -14 -24 -24" fill="none" />
          <path d="M-9 0 L14 0" stroke="#4A3B32" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="-11" cy="0" r="3.2" fill="#E8CFCB" stroke="#4A3B32" strokeWidth="1.2" />
        </g>
      )}
    </svg>
  );
}
