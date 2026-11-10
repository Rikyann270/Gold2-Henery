/**
 * Single place to edit all business content.
 * NOTE: names, premiums, offices, contact details and news items below are
 * SAMPLE content - replace them with your real information before launch.
 */

export const SITE = {
  name: "Kibali Gold Market",
  legalName: "Kibali Gold Enterprise",
  domain: "kibaligoldenterprise.com",
  url: "https://kibaligoldenterprise.com",
  tagline: "Certified gold bars from 1 kg to 10 tn. Delivered or vaulted.",
  email: "info@kibaligoldenterprise.com",
  phone: "+243 864 556 858",
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
  "Allocated Title",
  "Dedicated Advisors",
];

export const STATS = [
  { label: "Standard", value: "Certified" },
  { label: "Bar sizes", value: "1 kg – 10 tn" },
  { label: "Global hubs", value: "4" },
  { label: "Advisor support", value: "24/7" },
];

export type Product = {
  id: string;
  name: string;
  weight: string;
  kg: number;
  purity: string;
  premium: string;
  tag?: string;
  category: "kilogram" | "multikilo" | "institutional";
  description: string;
  service: string;
  price: string;
  size: { w: number; h: number };
};

export const SWATCH_CATEGORIES = [
  { id: "all", label: "All Formats", count: 6, weight: "1 kg – 10 tn" },
  { id: "kilogram", label: "Kilogram Bars", count: 2, weight: "1 kg – 5 kg" },
  { id: "multikilo", label: "Multi-Kilo Ingot", count: 2, weight: "12.5 kg – 100 kg" },
  { id: "institutional", label: "Institutional & Reserve", count: 2, weight: "1 tn – 10 tn" },
];

export const PRODUCTS: Product[] = [
  {
    id: "bar-1kg",
    name: "KIBALI 1 KG INVESTMENT BAR",
    weight: "1 kg",
    kg: 1,
    purity: "Investment Grade",
    premium: "Spot + 1.2%",
    tag: "BEST SELLER",
    category: "kilogram",
    description: "LBMA accredited investment-grade cast gold bar with serial assay",
    service: "Armored Transit · Insured Courier · Vault Storage",
    price: "$85,200",
    size: { w: 76, h: 118 },
  },
  {
    id: "bar-5kg",
    name: "KIBALI 5 KG CAST BAR",
    weight: "5 kg",
    kg: 5,
    purity: "Investment Grade",
    premium: "Spot + 1.0%",
    tag: "POPULAR",
    category: "kilogram",
    description: "Precision-poured multi-kilogram bar with serialized refinery certificate",
    service: "Armored Transit · Vault Storage Eligible",
    price: "$425,000",
    size: { w: 84, h: 130 },
  },
  {
    id: "bar-12-5kg",
    name: "KIBALI 12.5 KG GOOD DELIVERY BAR",
    weight: "12.5 kg (400 oz)",
    kg: 12.5,
    purity: "Investment Grade",
    premium: "Spot + 0.8%",
    tag: "STANDARD",
    category: "multikilo",
    description: "Standard London Good Delivery institutional central banking ingot",
    service: "Tier-IV Vault Custody · Armored Direct Delivery",
    price: "$1,062,500",
    size: { w: 94, h: 144 },
  },
  {
    id: "bar-100kg",
    name: "KIBALI 100 KG TREASURY ALLOCATION",
    weight: "100 kg",
    kg: 100,
    purity: "Investment Grade",
    premium: "Spot + 0.6%",
    category: "multikilo",
    description: "Direct sovereign-class reserve allocation in serialized security ingots",
    service: "Segregated Vault Custody · Global Armored Transit",
    price: "$8,500,000",
    size: { w: 102, h: 154 },
  },
  {
    id: "bar-1tn",
    name: "KIBALI 1 TN SOVEREIGN RESERVE",
    weight: "1 tn (1,000 kg)",
    kg: 1000,
    purity: "Investment Grade",
    premium: "Institutional Spot + 0.4%",
    category: "institutional",
    description: "Central bank & sovereign fund institutional tranche with audited ledger",
    service: "Allocated Sovereign Vault · Private Transport Charter",
    price: "Institutional Pricing",
    size: { w: 110, h: 165 },
  },
  {
    id: "bar-10tn",
    name: "KIBALI 10 TN STRATEGIC RESERVE",
    weight: "10 tn (10,000 kg)",
    kg: 10000,
    purity: "Investment Grade",
    premium: "Direct Spot Allocation",
    tag: "SOVEREIGN",
    category: "institutional",
    description: "Comprehensive national reserve and strategic wealth allocation tranche",
    service: "Bespoke Central Bank Custody · Global Armored Logistics",
    price: "Institutional Pricing",
    size: { w: 118, h: 175 },
  },
];

export const STEPS = [
  { n: "01", p: "25%", title: "Choose your allocation", text: "Pick sizes from 1 kg to 10 tn and lock your price against the live gold spot." },
  { n: "02", p: "50%", title: "Verify & pay", text: "Complete institutional identity check and settle by bank transfer or sovereign treasury lines." },
  { n: "03", p: "75%", title: "Insured dispatch", text: "Bars ship sealed with their assay certificate via armored transport or private charter." },
  { n: "04", p: "100%", title: "Hold or vault", text: "Take direct delivery, or allocate in Tier-IV insured high-security vault facilities." },
];

export const FEATURES = [
  { icon: "shield", title: "Certified purity", text: "Every bar is authenticated, serial numbered and delivered with its assay certificate." },
  { icon: "truck", title: "Insured delivery", text: "Discreet, fully insured and tracked shipping to your door in supported countries." },
  { icon: "vault", title: "Secure vaulting", text: "Prefer not to hold it? Store bars in a high-security, insured vault and inspect them any time." },
  { icon: "lock", title: "Direct allocated title", text: "Unencumbered segregated ownership directly registered in your entity name." },
  { icon: "chat", title: "Personal advisors", text: "Talk to a real precious-metals advisor for bulk orders and portfolio planning." },
  { icon: "globe", title: "Global presence", text: "Serving clients across Istanbul, Dubai, London and Nairobi." },
];

export const NEWS = [
  { icon: "chart", title: "Why investors are moving into physical gold", text: "How inflation, currency swings and global uncertainty are pushing demand for physical gold.", day: "05", month: "Oct" },
  { icon: "scale", title: "Gold bars vs gold coins: which should you buy?", text: "A practical comparison of premiums, specifications and storage for institutional buyers.", day: "28", month: "Sep" },
];

export const FAQ = [
  { q: "Are your gold bars genuine?", a: "Yes. Every bar is certified investment-grade gold and ships with its serial number and assay certificate." },
  { q: "Do you deliver internationally?", a: "We ship insured and tracked to supported countries. Contact us to confirm availability for your location." },
  { q: "How is the price calculated?", a: "Price = live gold spot price + a small, transparent premium that depends on the bar size." },
  { q: "Can I store my gold with you?", a: "Yes. Insured vault storage is available if you prefer not to take physical delivery." },
  { q: "Which payment methods do you accept?", a: "Bank transfer and approved treasury lines. Our team will confirm the options for your order." },
];

export const OFFICES = [
  { city: "Istanbul", note: "Turkey" },
  { city: "Dubai", note: "United Arab Emirates" },
  { city: "London", note: "United Kingdom" },
  { city: "Nairobi", note: "Kenya" },
];
