import { useEffect, useRef } from "react";

// A thin line at the top of the page that fills as you scroll.
export default function ScrollProgress() {
  const bar = useRef(null);

  useEffect(() => {
    let raf = null;
    const update = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const p = max > 0 ? root.scrollTop / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      raf = null;
    };
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={bar} />
    </div>
  );
}
