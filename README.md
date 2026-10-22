# Cray Cadres - Website

A static React + Vite website for Cray Cadres (handmade gifts and creative crafts).
No backend, database, login or payments. Customers enquire and "Buy Now" through WhatsApp.

## 1. Run it on your computer

1. Install Node.js (the LTS version) from https://nodejs.org
2. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

3. Open the address shown (usually http://localhost:5173).

## 2. Things you must edit before launching

| What | File |
| --- | --- |
| **Your WhatsApp number** | `src/data/siteConfig.js` -> `whatsappNumber` |
| Announcement bar text | `src/data/siteConfig.js` -> `announcement` |
| Hero text and buttons | `src/data/siteConfig.js` -> `hero` |
| Custom gifts text | `src/data/siteConfig.js` -> `custom` |
| About / brand story | `src/data/siteConfig.js` -> `about` |
| Products, prices, descriptions | `src/data/products.js` |
| Categories | `src/data/categories.js` |
| Gifting occasions | `src/data/occasions.js` |
| Colours and fonts | top of `src/styles.css` |

The WhatsApp number is stored as digits only with the country code (currently 919207082899, which is +91 92070 82899).

## 3. Replace the placeholder images

The pictures in `public/images/` are simple placeholder illustrations. Replace them with your own photos:

- **Hero:** the hero no longer uses a photo. It shows an animated blooming flower inside a ring of travelling text (edit the text in `siteConfig.js` -> `hero.ringText`). Your bouquet photo (`public/images/bouquet.jpg`) is used only for the Handmade Flowers category and its two products.
- **Category and product images:** put photos in `public/images/` and update the `image` path in `categories.js` / `products.js`.
- For the neatest look, use portrait photos with a 4:5 ratio (for example 1200 x 1500 px). They are cropped, never stretched.
- Keep photo files reasonably small (under about 300 KB each) so the site loads fast.

## 4. Add or remove a product

Open `src/data/products.js` and copy one product block. Give it a unique `id`, then set the name, category, price, image and description. Set `featured: true` to show it on the homepage.

Details you don't know yet (materials, care, preparation time, customisation) can be left as `""`; the product page then shows an editable placeholder instead of inventing information.

**Occasions:** an occasion only appears on the site if at least one product lists it in its `occasions` field.

## 5. Animations

The site includes subtle motion, all built with plain CSS and small React helpers (no extra libraries):

- A short percentage intro when the site first opens (once per browser tab)
- Headlines that slide up word by word
- A slowly scrolling ticker of your category names under the hero
- Cards that rise in one after another as you scroll
- A header that hides when you scroll down and returns when you scroll up
- A hero artwork: a flower that grows, blooms and folds closed in an 8-second loop (`src/components/BloomingFlower.jsx`), inside a ring of text that travels slowly around a circular path (`src/components/HeroArt.jsx`)
- A thin progress line at the top, button fill-sweeps, and underline hovers

Everything is switched off automatically for visitors who have "reduce motion" turned on in their device settings.

To change them, look at the "MOTION" section at the bottom of `src/styles.css`. To remove the intro, delete the `{showIntro && <Intro ... />}` line in `src/App.jsx`. To remove the ticker, delete `<Marquee ... />` in `src/pages/Home.jsx`.

## 6. Deploy free on Cloudflare Pages

1. Put this folder on GitHub (create a repository and upload the files, without `node_modules`).
2. In Cloudflare, go to **Workers & Pages -> Create -> Pages -> Connect to Git** and choose your repository.
3. Use these settings:
   - Framework preset: **Vite** (or None)
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Click **Save and Deploy**. Every time you push changes to GitHub, the site updates automatically.

The file `public/_redirects` makes page links such as `/shop` work when someone opens or refreshes them directly.

To test the production build locally: `npm run build` then `npm run preview`.

## 7. Notes

- Product names, prices and descriptions in this starter are **sample placeholders**.
- Prices are labelled "indicative" on the site.
- The design takes general inspiration from handmade-gift shops but uses its own original look; no code or assets were copied from any other site.
- The Instagram section links to your profile (https://www.instagram.com/_.cray_cadres._/). It does not embed a live feed, because that needs a backend or a third-party service. You can later swap the placeholder tiles for your own post photos.

## Project structure

```
src/
  data/         <- the files you edit (settings, products, categories, occasions)
  components/   <- reusable page pieces (navbar, hero, product card ...)
  pages/        <- Home, Shop, ProductDetail
  styles.css    <- all styling
public/
  images/       <- your photos
  _redirects    <- makes routing work on Cloudflare Pages
```
