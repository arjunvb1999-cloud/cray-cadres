// ============================================================
//  PRODUCTS - edit this file to add, change or remove products
// ============================================================
//
//  SAMPLE DATA: the names, prices and descriptions below are placeholders.
//  Replace them with your real products before launching.
//
//  Fields:
//   id          unique, lowercase, no spaces (used in the page address)
//   name        product name
//   category    must match an "id" in categories.js
//   price       indicative price in INR (number, no symbol)
//   image       path to a photo in public/images/
//   short       one-line description for product cards
//   description longer description for the product page
//   occasions   list of occasion ids from occasions.js (can be empty)
//   featured    true = shown in "Featured Products" on the homepage
//   details     optional - leave a field as "" to show the placeholder text
//     customisation, prepTime, materials, care

export const detailPlaceholders = {
  customisation: "Customisation options to be confirmed - message us on WhatsApp.",
  prepTime: "Preparation time varies - please enquire on WhatsApp.",
  materials: "Material details to be added.",
  care: "Care instructions to be added.",
};

export const products = [
  {
    id: "handmade-flower-bouquet",
    name: "Handmade Flower Bouquet",
    category: "handmade-flowers",
    price: 799,
    image: "/images/bouquet.jpg",
    short: "A handmade bouquet that stays fresh forever.",
    description:
      "A hand-crafted bouquet made to brighten someone's day and stay beautiful long after the occasion.",
    occasions: ["birthdays", "thank-you", "just-because"],
    featured: true,
    details: { customisation: "", prepTime: "", materials: "", care: "" },
  },
  {
    id: "single-stem-flower",
    name: "Single Stem Flower",
    category: "handmade-flowers",
    price: 199,
    image: "/images/bouquet.jpg",
    short: "One handmade bloom, simple and sweet.",
    description: "A single handmade flower, a small gesture with a lot of charm.",
    occasions: ["friendship", "just-because"],
    featured: false,
    details: { customisation: "", prepTime: "", materials: "", care: "" },
  },
  {
    id: "clay-charm-set",
    name: "Tiny Clay Charm Set",
    category: "clay-creations",
    price: 349,
    image: "/images/clay-creations.svg",
    short: "Little sculpted charms made from clay.",
    description:
      "A set of tiny clay charms, each shaped by hand with its own small details.",
    occasions: ["friendship", "birthdays"],
    featured: true,
    details: { customisation: "", prepTime: "", materials: "", care: "" },
  },
  {
    id: "clay-desk-buddy",
    name: "Clay Desk Buddy",
    category: "clay-creations",
    price: 449,
    image: "/images/clay-creations.svg",
    short: "A little clay companion for your desk.",
    description: "A small sculpted clay figure that adds some personality to a workspace.",
    occasions: ["colleague", "farewell"],
    featured: false,
    details: { customisation: "", prepTime: "", materials: "", care: "" },
  },
  {
    id: "diy-craft-kit",
    name: "DIY Craft Kit",
    category: "diy-craft-kits",
    price: 599,
    image: "/images/diy-craft-kits.svg",
    short: "Everything you need to make something lovely.",
    description:
      "A do-it-yourself craft kit for a relaxed, creative afternoon with friends or on your own.",
    occasions: ["friendship", "just-because"],
    featured: true,
    details: { customisation: "", prepTime: "", materials: "", care: "" },
  },
  {
    id: "miniature-keepsake",
    name: "Miniature Keepsake",
    category: "miniature-gifts",
    price: 299,
    image: "/images/miniature-gifts.svg",
    short: "A tiny gift with big personality.",
    description: "A miniature keepsake, small enough to carry and thoughtful enough to treasure.",
    occasions: ["thank-you", "just-because"],
    featured: true,
    details: { customisation: "", prepTime: "", materials: "", care: "" },
  },
  {
    id: "personalised-gift",
    name: "Personalised Gift",
    category: "personalised-gifts",
    price: 899,
    image: "/images/personalised-gifts.svg",
    short: "A gift made around someone's story.",
    description:
      "A gift personalised for someone special. Share your idea with us and we'll explore what's possible.",
    occasions: ["birthdays", "farewell"],
    featured: false,
    details: {
      customisation: "Names, colours and small details can be discussed on WhatsApp.",
      prepTime: "",
      materials: "",
      care: "",
    },
  },
  {
    id: "colleague-gift-set",
    name: "Colleague Gift Set",
    category: "gifts-for-colleagues",
    price: 499,
    image: "/images/gifts-for-colleagues.svg",
    short: "A thoughtful keepsake for a coworker.",
    description:
      "A small, thoughtful gift to mark a farewell, a thank-you, or a good working day.",
    occasions: ["colleague", "farewell", "thank-you"],
    featured: true,
    details: { customisation: "", prepTime: "", materials: "", care: "" },
  },
];

export function getCategoryName(categories, id) {
  return categories.find((c) => c.id === id)?.name ?? "";
}

export function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}
