/**
 * ————————————————————————————————————————————————
 *  WHISPERING DOVE — content model
 *
 *  VERIFIED FACTS (from the brief):
 *   · Name: Whispering Dove Garden
 *   · Location: Mihang'o, Nairobi, Kenya — near Kibiku Police Post
 *   · A garden, a swimming pool, dining, gatherings & leisure
 *   · Google Maps link below
 *
 *  Everything marked [PLACEHOLDER] is intentionally unverified and
 *  must be replaced with confirmed business information before launch.
 *  All photography is directional placeholder imagery (Pexels) to be
 *  swapped for real Whispering Dove photography when available.
 * ————————————————————————————————————————————————
 */

export const MAPS_URL = "https://maps.app.goo.gl/grhEcdYwS8FFPry97";

/** Pexels CDN helper — builds sized, cropped image URLs */
const px = (id: number, w: number, h?: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}${
    h ? `&h=${h}&fit=crop` : ""
  }`;

/* ——— Placeholder contact details (unverified — do not invent) ——— */
export const PLACEHOLDERS = {
  phone: "[PHONE NUMBER]",
  whatsapp: "[WHATSAPP NUMBER]",
  hours: "[OPENING HOURS]",
  menu: "[MENU LINK]",
  eventEmail: "[EVENT ENQUIRY EMAIL]",
  instagram: "[VERIFIED INSTAGRAM]",
  swimDetails: "[SWIM TIMES & PASSES]",
} as const;

/* ——— Navigation ——— */
export const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Dining", href: "#dining" },
  { label: "Swimming", href: "#swimming" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
] as const;

/* ——— Imagery ——— */
export const IMAGES = {
  hero: {
    src: px(30370492, 2400),
    alt: "Sunlit swimming pool with loungers set in dense green garden (placeholder image for Whispering Dove)",
  },
  storyMain: {
    src: px(37727532, 1300, 1690),
    alt: "Quiet garden pathway lined with palms and lush greenery (placeholder image)",
  },
  storySecondary: {
    src: px(34843592, 760, 990),
    alt: "A shaded path through a banana grove in full sun (placeholder image)",
  },
  swim: {
    src: px(5008003, 1100, 1380),
    alt: "Overhead view of a swimmer floating on her back in clear water (placeholder image)",
  },
  dine: {
    src: px(38298587, 1300, 990),
    alt: "Outdoor dining table set among tropical plants (placeholder image)",
  },
  gather: {
    src: px(9576754, 1300, 990),
    alt: "Friends sharing a picnic under a tree, laughing together (placeholder image)",
  },
  poolWide: {
    src: px(36527877, 2400),
    alt: "Aerial view of a swimmer floating in a pool ringed by greenery (placeholder image)",
  },
  diningMain: {
    src: px(34087214, 1050, 1440),
    alt: "Wood-fired pizzas and salads on a sunlit outdoor table (placeholder image)",
  },
  diningSecondary: {
    src: px(29573732, 760, 980),
    alt: "Cold drinks and sandwiches on a rustic outdoor table (placeholder image)",
  },
  events: {
    src: px(5638620, 1200, 1560),
    alt: "Friends sharing food around an outdoor table in a garden (placeholder image)",
  },
} as const;

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export const GALLERY: GalleryImage[] = [
  {
    src: px(6872320, 1400),
    alt: "Aerial view of a swimming pool surrounded by palms (placeholder image)",
    caption: "The pool at midday",
  },
  {
    src: px(18205138, 960, 1280),
    alt: "Hands skimming the surface of bright blue pool water (placeholder image)",
    caption: "First one in",
  },
  {
    src: px(8531282, 1300),
    alt: "Friends laughing together outdoors on a sunny afternoon (placeholder image)",
    caption: "Saturday people",
  },
  {
    src: px(35635294, 980, 1300),
    alt: "A calm pathway enclosed by dense green foliage (placeholder image)",
    caption: "The green way in",
  },
  {
    src: px(5008036, 1300),
    alt: "A swimmer floating peacefully in clear water (placeholder image)",
    caption: "Floating, uninterrupted",
  },
  {
    src: px(19271470, 980, 1300),
    alt: "Outdoor café tables and wooden chairs among plants (placeholder image)",
    caption: "A table outside",
  },
  {
    src: px(6202474, 1300),
    alt: "A guest standing by a pool wrapped in greenery (placeholder image)",
    caption: "Poolside, unhurried",
  },
];
