import { siteConfig } from "../data/siteConfig.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  const { about } = siteConfig;
  return (
    <section id="about" className="section container">
      <Reveal>
        <div className="about-inner">
          <SectionHeading eyebrow="Our story" title={about.heading} />
          <p className="lead center">{about.story}</p>
        </div>
      </Reveal>
    </section>
  );
}
