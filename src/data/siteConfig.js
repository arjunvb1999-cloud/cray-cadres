// ============================================================
//  SITE SETTINGS - edit this file to change text and contact info
// ============================================================

export const siteConfig = {
  brandName: "Cray Cadres",

  // Text shown in the slim bar at the very top of the site.
  announcement: "Thoughtful gifts, handmade with love.",

  // WhatsApp number: country code + number, digits only, no "+" or spaces.
  whatsappNumber: "919207082899",

  instagramUrl: "https://www.instagram.com/_.cray_cadres._/",
  instagramHandle: "@_.cray_cadres._",

  hero: {
    heading: "Little Things, Made with Love.",
    description:
      "Thoughtfully crafted gifts and creative treasures that make every moment special.",
    // Text that travels around the blooming flower in the hero.
    ringText: "Handmade with love · Little things, thoughtfully made · ",
    primaryButton: "Explore Our Creations",
    secondaryButton: "Find Your Perfect Gift",
    customGiftMessage:
      "Hi Cray Cadres! I'd like to ask about finding the perfect handmade gift.",
  },

  custom: {
    heading: "Have Something Special in Mind?",
    description:
      "Tell us your idea, and let's explore a handmade gift created especially for someone you care about.",
    button: "Discuss Your Idea on WhatsApp",
    message:
      "Hi Cray Cadres! I have an idea for a custom gift and would like to discuss it.",
  },

  about: {
    heading: "About Cray Cadres",
    story:
      "At Cray Cadres, we believe the smallest gifts can carry the most thoughtful messages. Our collection celebrates creativity, handmade details, and little surprises that make ordinary moments feel special.",
  },

  instagram: {
    heading: "Follow Along on Instagram",
    description:
      "See new creations, little details, and behind-the-scenes moments on our Instagram page.",
    button: "Visit Our Instagram",
  },
};

// Builds a WhatsApp link with a pre-filled message.
export function whatsappLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
