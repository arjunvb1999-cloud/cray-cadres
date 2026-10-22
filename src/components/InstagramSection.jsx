import { Instagram } from "lucide-react";
import { siteConfig } from "../data/siteConfig.js";
import Reveal from "./Reveal.jsx";

// Placeholder tiles. Replace these with photos of your own Instagram posts.
const tiles = [
  "/images/handmade-flowers.svg",
  "/images/clay-creations.svg",
  "/images/diy-craft-kits.svg",
  "/images/miniature-gifts.svg",
  "/images/personalised-gifts.svg",
  "/images/gifts-for-colleagues.svg",
];

export default function InstagramSection() {
  const ig = siteConfig.instagram;
  return (
    <section id="instagram" className="section section-white">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow">{siteConfig.instagramHandle}</p>
            <h2>{ig.heading}</h2>
            <p className="muted">{ig.description}</p>
          </div>
          <div className="insta-strip" aria-hidden="true">
            {tiles.map((src) => (
              <img key={src} src={src} alt="" loading="lazy" />
            ))}
          </div>
          <div className="center">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Instagram size={18} /> {ig.button}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
