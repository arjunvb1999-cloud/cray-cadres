import useInView from "../hooks/useInView.js";

// Splits a heading into words that slide up out of a mask.
//  - hero:   plays once the intro has finished (CSS waits for html.is-ready)
//  - active: pass true/false to control it from a parent, otherwise it plays on scroll
export default function Words({ text, hero = false, active }) {
  const [ref, inView] = useInView();
  const on = active ?? inView;
  const words = text.split(" ");

  return (
    <span ref={ref} className={`words ${hero ? "words--hero" : ""} ${on ? "is-in" : ""}`}>
      {words.map((word, i) => (
        <span key={i}>
          {i > 0 && " "}
          <span className="word">
            <span style={{ "--w": i }}>{word}</span>
          </span>
        </span>
      ))}
    </span>
  );
}
