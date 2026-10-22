import useInView from "../hooks/useInView.js";
import Words from "./Words.jsx";

export default function SectionHeading({ eyebrow, title, text }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`section-heading ${inView ? "is-in" : ""}`}>
      {eyebrow && <p className="eyebrow fade-item">{eyebrow}</p>}
      <h2>
        <Words text={title} active={inView} />
      </h2>
      {text && <p className="muted fade-item">{text}</p>}
    </div>
  );
}
