import useInView from "../hooks/useInView.js";

// Fades content in softly when it scrolls into view.
// Use className="reveal--bare" when the children animate themselves (see .stagger in styles.css).
// CSS disables the motion for people who prefer reduced motion.
export default function Reveal({ children, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`reveal ${inView ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
