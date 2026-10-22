import { useEffect, useState } from "react";

const KEY = "cc-intro-seen";

// The intro plays once per browser tab, and never for people who prefer reduced motion.
export function shouldSkipIntro() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

// A short percentage loader that lifts away to reveal the page.
export default function Intro({ onReveal }) {
  const [pct, setPct] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  // Keep the page from scrolling while the intro is showing.
  useEffect(() => {
    document.body.style.overflow = gone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [gone]);

  useEffect(() => {
    const DURATION = 1500;
    const start = performance.now();
    let raf;
    const timers = [];

    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      setPct(Math.round(100 * (1 - Math.pow(1 - t, 3))));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timers.push(
          setTimeout(() => {
            setLeaving(true);
            onReveal();
            timers.push(
              setTimeout(() => {
                setGone(true);
                try {
                  sessionStorage.setItem(KEY, "1");
                } catch {
                  /* ignore */
                }
              }, 900)
            );
          }, 250)
        );
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [onReveal]);

  if (gone) return null;

  return (
    <div className={`intro ${leaving ? "is-leaving" : ""}`} aria-hidden="true">
      <div className="intro-inner">
        <p className="intro-mark">Cray Cadres</p>
        <div className="intro-bar">
          <span style={{ transform: `scaleX(${pct / 100})` }} />
        </div>
        <p className="intro-count">{pct}%</p>
      </div>
    </div>
  );
}
