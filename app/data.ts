/**
 * Single place to edit all business content.
 * NOTE: names, premiums, offices, contact details and news items below are
 * SAMPLE content - replace them with your real information before launch.
 */

export const SITE = {
  name: "Kibali Gold Market",
  tagline: "Certified gold bars. Delivered or vaulted.",
  email: "sales@kibaligoldmarket.com",
  phone: "+000 000 000 000",
};

export const NAV = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/process", label: "How it works" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const MARQUEE = [
  "Investment Grade Gold",
  "Assay Certified",
  "Insured Worldwide Delivery",
  "Secure Vault Storage",
  "Buy-Back Guarantee",
  "Dedicated Advisors",
];

export const STATS = [
  { label: "Standard", value: "Certified" },
  { label: "Bar sizes", value: "1g-1kg" },
  { label: "Global hubs", value: "4" },
  { label: "Advisor support", value: "24/7" },
];

export type Product = {
  id: string;
  name: string;
  weight: string;
  grams: number;
  purity: string;
  premium: string;
  tag?: string;
  category: "minted" | "cast" | "institutional";
  description: string;
  service: string;
  price: string;
  size: { w: number; h: number };
};

export const SWATCH_CATEGORIES = [
  { id: "all", label: "All Bars", count: 6, weight: "1g – 1kg" },
  { id: "minted", label: "Minted Bars", count: 4, weight: "1g – 100g" },
  { id: "cast", label: "Cast Bars", count: 1, weight: "250g" },
  { id: "institutional", label: "Institutional 1kg", count: 1, weight: "1000g" },
];

export const PRODUCTS: Product[] = [
  {
    id: "bar-100g",
    name: "KIBALI 100 G INVESTMENT BAR",
    weight: "100 g",
    grams: 100,
    purity: "Investment Grade",
    premium: "Spot + 2.5%",
    tag: "BEST SELLER",
    category: "minted",
    description: "Investment gold with sealed serial assay",
    service: "Click & Collect · Insured Courier",
    price: "$8,580",
    size: { w: 88, h: 135 },
  },
  {
    id: "bar-50g",
    name: "KIBALI 50 G INVESTMENT BAR",
    weight: "50 g",
    grams: 50,
    purity: "Investment Grade",
    premium: "Spot + 3.5%",
    tag: "POPULAR",
    category: "minted",
    description: "Tamper-evident certicard with serialized assayer signature",
    service: "Click & Collect · Insured Courier",
    price: "$4,320",
    size: { w: 78, h: 120 },
  },
  {
    id: "bar-1kg",
    name: "KIBALI 1 KG SOVEREIGN BAR",
    weight: "1 kg",
    grams: 1000,
    purity: "Investment Grade",
    premium: "Spot + 1.2%",
    tag: "NEW",
    category: "institutional",
    description: "Cast institutional gold bar with LBMA hallmark & audit log",
    service: "Armored Transit · Vault Storage Eligible",
    price: "$85,200",
    size: { w: 105, h: 160 },
  },
  {
    id: "bar-250g",
    name: "KIBALI 250 G CAST GOLD BAR",
    weight: "250 g",
    grams: 250,
    purity: "Investment Grade",
    premium: "Spot + 1.8%",
    category: "cast",
    description: "Poured investment-grade gold for strategic wealth reserves",
    service: "Click & Collect · Insured Courier",
    price: "$21,350",
    size: { w: 92, h: 142 },
  },
  {
    id: "bar-10g",
    name: "KIBALI 10 G MINTED GOLD BAR",
    weight: "10 g",
    grams: 10,
    purity: "Investment Grade",
    premium: "Spot + 5%",
    category: "minted",
    description: "Serialized blister packaging with micro-engraved security seal",
    service: "Click & Collect · Insured Courier",
    price: "$875",
    size: { w: 70, h: 108 },
  },
  {
    id: "bar-1g",
    name: "KIBALI 1 G FRACTIONAL BAR",
    weight: "1 g",
    grams: 1,
    purity: "Investment Grade",
    premium: "Spot + 9%",
    tag: "STARTER",
    category: "minted",
    description: "Fractional investment gold starter bar in accredited security assay",
    service: "Click & Collect · Insured Courier",
    price: "$98",
    size: { w: 58, h: 88 },
  },
];

export const STEPS = [
  { n: "01", p: "25%", title: "Choose your bars", text: "Pick sizes from 1g to 1kg and lock your price against the live gold spot." },
  { n: "02", p: "50%", title: "Verify & pay", text: "Complete a quick identity check and pay by bank transfer or approved methods." },
  { n: "03", p: "75%", title: "Insured dispatch", text: "Bars ship sealed with their assay certificate via insured, tracked courier." },
  { n: "04", p: "100%", title: "Hold or vault", text: "Keep gold at home, store it in our insured vault, or sell back any time." },
];

export const FEATURES = [
  { icon: "shield", title: "Certified purity", text: "Every bar is authenticated, serial numbered and delivered with its assay certificate." },
  { icon: "truck", title: "Insured delivery", text: "Discreet, fully insured and tracked shipping to your door in supported countries." },
  { icon: "vault", title: "Secure vaulting", text: "Prefer not to hold it? Store bars in a high-security, insured vault and check them any time." },
  { icon: "refresh", title: "Buy-back guarantee", text: "Liquidity on your terms. We buy back your bars at a transparent rate linked to spot." },
  { icon: "chat", title: "Personal advisors", text: "Talk to a real precious-metals advisor for bulk orders and portfolio planning." },
  { icon: "globe", title: "Global presence", text: "Serving clients across Istanbul, Dubai, London and Nairobi." },
];

export const NEWS = [
  { icon: "chart", title: "Why investors are moving into physical gold", text: "How inflation, currency swings and global uncertainty are pushing demand for physical gold.", day: "05", month: "Oct" },
  { icon: "scale", title: "Gold bars vs gold coins: which should you buy?", text: "A practical comparison of premiums, liquidity and storage for new buyers.", day: "28", month: "Sep" },
];

export const FAQ = [
  { q: "Are your gold bars genuine?", a: "Yes. Every bar is certified investment-grade gold and ships with its serial number and assay certificate." },
  { q: "Do you deliver internationally?", a: "We ship insured and tracked to supported countries. Contact us to confirm availability for your location." },
  { q: "How is the price calculated?", a: "Price = live gold spot price + a small, transparent premium that depends on the bar size." },
  { q: "Can I store my gold with you?", a: "Yes. Insured vault storage is available if you prefer not to take physical delivery." },
  { q: "Can I sell my gold back?", a: "Yes. Our buy-back guarantee lets you sell your bars back at a rate linked to the live spot price." },
  { q: "Which payment methods do you accept?", a: "Bank transfer and other approved methods. Our team will confirm the options for your order." },
];

export const OFFICES = [
  { city: "Istanbul", note: "Turkey" },
  { city: "Dubai", note: "United Arab Emirates" },
  { city: "London", note: "United Kingdom" },
  { city: "Nairobi", note: "Kenya" },
];
