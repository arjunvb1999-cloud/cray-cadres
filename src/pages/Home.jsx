import Hero from "../components/Hero.jsx";
import Marquee from "../components/Marquee.jsx";
import CategoryCards from "../components/CategoryCards.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import Occasions from "../components/Occasions.jsx";
import CustomGifts from "../components/CustomGifts.jsx";
import About from "../components/About.jsx";
import InstagramSection from "../components/InstagramSection.jsx";
import { categories } from "../data/categories.js";

const tickerWords = categories.map((c) => c.name);

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={tickerWords} />
      <CategoryCards />
      <FeaturedProducts />
      <Occasions />
      <CustomGifts />
      <About />
      <InstagramSection />
    </>
  );
}
