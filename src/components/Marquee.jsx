// A slowly scrolling ticker of words. Purely decorative, so it is hidden from screen readers.
export default function Marquee({ items }) {
  const loop = [...items, ...items];
  const row = (key) => (
    <ul className="marquee-row" key={key}>
      {loop.map((text, i) => (
        <li key={`${key}-${i}`}>
          {text}
          <span className="marquee-dot" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
