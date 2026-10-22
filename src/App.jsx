import { useCallback, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Intro, { shouldSkipIntro } from "./components/Intro.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import AnnouncementBar from "./components/AnnouncementBar.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

// Scrolls to the top on page change, or to a section when the link has a #hash.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const [showIntro] = useState(() => !shouldSkipIntro());
  const [ready, setReady] = useState(() => shouldSkipIntro());
  const reveal = useCallback(() => setReady(true), []);

  // html.is-ready tells the CSS that the intro is done, so the hero can animate in.
  useEffect(() => {
    document.documentElement.classList.toggle("is-ready", ready);
  }, [ready]);

  // Safety net: never leave the page hidden if the intro is interrupted.
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {showIntro && <Intro onReveal={reveal} />}
      <ScrollProgress />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <AnnouncementBar />
      <Navbar />
      <main id="main" key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="*"
            element={
              <section className="section container center">
                <h1>Page not found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
