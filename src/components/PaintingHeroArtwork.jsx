import { useState, useRef, useEffect } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";

/**
 * PaintingHeroArtwork
 * 
 * Embeds the user's original watercolor and pencil butterfly painting.
 * Implements the HTML5 video element with:
 *   autoplay loop muted playsinline
 * 
 * Features:
 * - Continuous smooth muted loop for background video playback on Netlify/Cloudflare.
 * - Auto-detects /videos/hero-painting.mp4 or /videos/hero-painting.webm.
 * - Interactive artist canvas framing with warm paper matting and studio lighting.
 * - Gentle watercolor aura breathing effect while the video is playing or on fallback.
 * - Accessible: honors prefers-reduced-motion with still poster fallback.
 */
export default function PaintingHeroArtwork() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      setVideoError(false);
      video.play().catch(() => {
        // Autoplay policy fallback: muted ensures playback
        video.muted = true;
        video.play().catch(() => {});
      });
    };

    const handleError = () => {
      setVideoError(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div className={`painting-hero-frame ${reduced ? "is-reduced" : ""}`}>
      {/* Ambient Watercolor Aura Glow */}
      <div className="watercolor-aura-glow" aria-hidden="true" />

      {/* The Canvas Matting / Frame */}
      <div className="painting-canvas-wrapper">
        {/* HTML5 Video with autoplay loop muted playsinline */}
        <video
          ref={videoRef}
          className={`painting-video ${videoLoaded ? "is-playing" : "is-loading"}`}
          style={{ display: videoLoaded ? "block" : "none" }}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/painting-butterfly.jpg"
          preload="auto"
          aria-label="Cray Cadres original painting: watercolor floral bloom and butterfly wing animation"
        >
          <source src="/videos/hero-painting.webm" type="video/webm" />
          <source src="/videos/hero-painting.mp4" type="video/mp4" />
        </video>

        {/* Artistic Canvas Overlay (when video is loading or fallback) */}
        {!videoLoaded && (
          <div className="painting-artwork-canvas">
            <img
              src="/images/painting-butterfly.jpg"
              alt="Cray Cadres original mixed-media painting with watercolor flowers and butterfly wing"
              className="painting-fallback-img"
              onError={(e) => {
                // If the user hasn't moved the image yet, show aesthetic painting placeholder
                e.currentTarget.style.display = "none";
              }}
            />
            {/* Animated Watercolor & Butterfly Wing Breathing Overlay */}
            <div className="artwork-motion-overlay" aria-hidden="true">
              <span className="flutter-aura flutter-aura--wing" />
              <span className="bloom-aura bloom-aura--flowers" />
              <span className="splatter-aura splatter-aura--top" />
            </div>
          </div>
        )}

        {/* Glass Glare Sheen across the frame */}
        <div className="canvas-specular-glare" aria-hidden="true" />
      </div>

      {/* Artist Provenance Badge */}
      <div className="artwork-provenance-badge">
        <span className="provenance-dot" />
        <span className="provenance-title">Original Mixed-Media Art</span>
        <span className="provenance-sub">Watercolor &amp; Pencil · Cray Cadres</span>
      </div>
    </div>
  );
}
