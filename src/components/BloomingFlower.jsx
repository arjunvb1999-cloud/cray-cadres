// A small flower that grows, blooms, holds, then folds closed and starts again.
// Pure SVG + CSS (see the "BLOOM" section in styles.css), so it adds no extra libraries.
// Decorative only, so it is hidden from screen readers.

const BACK = "#D9A9A3";
const MID = "#E8CFCB";
const FRONT = "#F4E3D7";
const PETAL = "M100 106 C84 86 86 56 100 42 C114 56 116 86 100 106Z";

export default function BloomingFlower() {
  return (
    <svg className="bloom" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="96" fill="#FAF7F0" />
      <g className="bloom-all">
        <path className="bloom-stem" d="M100 172 L100 104" fill="none" stroke="#A3B18A" strokeWidth="5" strokeLinecap="round" />
        <path className="bloom-leaf" style={{ "--x": "-1" }} d="M100 160 C74 158 58 140 54 118 C78 122 96 138 100 160Z" fill="#A3B18A" />
        <path className="bloom-leaf" style={{ "--x": "1" }} d="M100 160 C126 158 142 140 146 118 C122 122 104 138 100 160Z" fill="#8FA075" />
        <g className="bloom-head">
          <path className="bloom-petal" style={{ "--a": "-60deg", "--d": 0 }} d={PETAL} fill={BACK} />
          <path className="bloom-petal" style={{ "--a": "60deg", "--d": 0 }} d={PETAL} fill={BACK} />
          <path className="bloom-petal" style={{ "--a": "-30deg", "--d": 1 }} d={PETAL} fill={MID} />
          <path className="bloom-petal" style={{ "--a": "30deg", "--d": 1 }} d={PETAL} fill={MID} />
          <path className="bloom-petal" style={{ "--a": "0deg", "--d": 2 }} d={PETAL} fill={FRONT} stroke="rgba(74,59,50,0.1)" strokeWidth="1" />
          <circle className="bloom-dot" cx="100" cy="92" r="3.5" fill="#4A3B32" />
        </g>
      </g>
    </svg>
  );
}
