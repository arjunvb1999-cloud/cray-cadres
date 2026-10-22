import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "../data/siteConfig.js";
import Reveal from "./Reveal.jsx";

export default function CustomGifts() {
  const { custom } = siteConfig;
  return (
    <section id="custom" className="section custom-section">
      <Reveal>
        <div className="container center custom-inner">
          <h2>{custom.heading}</h2>
          <p className="lead">{custom.description}</p>
          <a
            href={whatsappLink(custom.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle size={18} /> {custom.button}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
