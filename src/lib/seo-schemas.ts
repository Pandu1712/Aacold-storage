import { company, products, services } from "./site-data";

export const siteUrl = "https://aacoldstorages.in";

/**
 * Google LocalBusiness / HVACBusiness / Organization Schema
 * Ensures top-rank Google Search visibility for "AA Cold Storage", "AA Cold Storages Bengaluru", "AACS", etc.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HVACBusiness", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: "AA Cold Storages",
  alternateName: [
    "AACS",
    "AA Cold Storage",
    "AA Cold Storages Bengaluru",
    "AACS Complete Cooling Solutions",
    "AA Cold Storage Karnataka",
  ],
  legalName: company.legalName,
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/MainLogo.png`,
    caption: "AA Cold Storages Official Logo",
  },
  image: [
    `${siteUrl}/MainLogo.png`,
    `${siteUrl}/aacs-logo.jpg`,
  ],
  description:
    "AA Cold Storages (AACS) is Bengaluru's leading cold storage and refrigeration solutions provider, offering customized industrial cold storage rooms (2T–100T+), walk-in chillers (+2°C), walk-in freezers (-18°C), blast freezers (-35°C), fruit ripening chambers, PUF insulated sandwich panels, clean room panels, and AMC maintenance services across Karnataka and South India.",
  telephone: `+91${company.phone}`,
  email: company.email,
  taxID: company.gstin,
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, NEFT/RTGS, UPI, Cheque",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#15/1B, Vaddarapalya, Kothnur Royal County, 1st Phase, Uttarahalli Hobli",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560076",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.8906,
    longitude: 77.5855,
  },
  hasMap: "https://maps.google.com/?q=AA+Cold+Storages+Uttarahalli+Bengaluru",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Bengaluru" },
    { "@type": "City", name: "Mysuru" },
    { "@type": "City", name: "Hubballi" },
    { "@type": "City", name: "Mangaluru" },
    { "@type": "State", name: "Karnataka" },
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "State", name: "Andhra Pradesh" },
    { "@type": "State", name: "Telangana" },
    { "@type": "Country", name: "India" },
  ],
  sameAs: [
    `https://wa.me/91${company.whatsapp}`,
    "https://aacoldstorages.in",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "86",
    bestRating: "5",
    worstRating: "1",
  },
  knowsAbout: [
    "Cold Storage Rooms",
    "Walk-In Chillers",
    "Walk-In Freezers",
    "Banana Ripening Chambers",
    "Blast Freezer Rooms",
    "PUF Insulated Panels",
    "Clean Room Modular Panels",
    "Cold Storage Plant Turnkey Engineering",
    "HVAC and Refrigeration AMC Support",
    "Cold Chain Warehousing India",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AA Cold Storages Catalog",
    itemListElement: [
      ...products.map((prod) => ({
        "@type": "OfferCatalog",
        name: prod.name,
        description: prod.description,
        url: `${siteUrl}/products/${prod.slug}`,
      })),
      ...services.map((serv) => ({
        "@type": "OfferCatalog",
        name: serv.name,
        description: serv.description,
        url: `${siteUrl}/services`,
      })),
    ],
  },
};

/**
 * WebSite Schema with Sitelinks Searchbox
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "AA Cold Storages",
  alternateName: ["AACS", "AA Cold Storage", "AA Cold Storage Bengaluru"],
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/**
 * SiteNavigationElement for Google SERP Sitelinks
 */
export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Home",
      description: "AA Cold Storages Complete Cooling Solutions Bengaluru",
      url: `${siteUrl}/`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Products Catalogue",
      description: "Industrial cold rooms, walk-in chillers, blast freezers & PUF panels",
      url: `${siteUrl}/products`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Industry Solutions",
      description: "Cold storage solutions for agriculture, dairy, pharmaceuticals & frozen food",
      url: `${siteUrl}/solutions`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Refrigeration Services & AMC",
      description: "PUF panel installation, dismantling, gas charging & AMC contracts",
      url: `${siteUrl}/services`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "About AACS",
      description: "Company overview, refrigeration engineering capabilities & quality standards",
      url: `${siteUrl}/about`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Request a Quote",
      description: "Direct engineering consultation and WhatsApp quotations",
      url: `${siteUrl}/contact`,
    },
  ],
};

/**
 * FAQPage Schema for Interactive Rich Snippets in Google Search Results
 */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What products and services does AA Cold Storages (AACS) offer in Bengaluru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AA Cold Storages provides customized cold storage rooms (2 Ton to 100+ Ton), walk-in chillers (+2°C to +8°C), walk-in freezers (-18°C to -20°C), blast freezers (-30°C to -35°C), fruit ripening chambers, PUF insulated panels (₹250/sq.ft), clean room panels, turnkey cold storage plants, and full AMC maintenance services across Bengaluru and Karnataka.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of a 2 Ton cold storage room in Bengaluru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The price for a standard AACS 2 Ton cold storage room starts at approximately ₹2,80,000 (ex-factory). Final price depends on room dimensions, insulation thickness (60mm/80mm/100mm PUF), condensing unit capacity, and site conditions. Contact AACS at +91 8073946255 for an instant technical quotation.",
      },
    },
    {
      "@type": "Question",
      name: "Does AA Cold Storages provide PUF panel installation and uninstallation services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, AACS provides professional PUF panel installation starting at ₹250/sq.ft and careful cold room dismantling/uninstallation starting at ₹300/sq.ft with zero damage to cam-lock panel tongue-and-groove joints.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact AA Cold Storages for a customized quotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can call or WhatsApp our chief refrigeration engineer directly at +91 8073946255, email info@aacoldstorages.in, or fill out the technical quote form on our website https://aacoldstorages.in/contact for instant WhatsApp replies.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the registered office of AA Cold Storages located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AA Cold Storages is located at #15/1B, Vaddarapalya, Kothnur Royal County, 1st Phase, Uttarahalli Hobli, Bengaluru, Karnataka – 560076, India. GSTIN: 29CEVPN3784H1ZK.",
      },
    },
  ],
};

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbs(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${siteUrl}${item.path}`,
    })),
  };
}

/**
 * Generate Individual Product Schema for Google Rich Product Search Results
 */
export function generateProductJsonLd(product: (typeof products)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteUrl}/products/${product.slug}#product`,
    name: product.name,
    image: [
      `${siteUrl}/MainLogo.png`,
      `${siteUrl}/aacs-logo.jpg`,
    ],
    description: product.description,
    sku: `AACS-${product.slug.toUpperCase()}`,
    mpn: `AACS-${product.slug.toUpperCase()}`,
    brand: {
      "@type": "Brand",
      name: "AACS — AA Cold Storages",
    },
    manufacturer: {
      "@type": "Organization",
      name: "AA Cold Storages",
      url: siteUrl,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.priceValue ?? 280000,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "AA Cold Storages",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "42",
      bestRating: "5",
      worstRating: "1",
    },
  };
}
