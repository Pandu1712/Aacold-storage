import mainLogo from "@/assets/MainLogo.png";
import coldRoomHero from "@/assets/cold-room-hero.jpg";
import equipmentImage from "@/assets/refrigeration-equipment.jpg";
import installationImage from "@/assets/technician-installation.jpg";
import industryImage from "@/assets/industry-cold-storage.jpg";
import flowerColdStorage from "@/assets/flower-cold-storage.jpg";
import bananaRipening from "@/assets/banana-ripening.jpg";
import mushroomChamber from "@/assets/mushroom-chamber.jpg";
import meatColdStorage from "@/assets/meat-cold-storage.jpg";
import iceCreamFreezer from "@/assets/ice-cream-freezer.jpg";
import blastFreezer from "@/assets/blast-freezer.jpg";
import walkInFreezer from "@/assets/walk-in-freezer.jpg";
import walkInChiller from "@/assets/walk-in-chiller.jpg";
import coldStoragePlant from "@/assets/cold-storage-plant.jpg";
import pufPanels from "@/assets/puf-panels.jpg";
import cleanRoomPanels from "@/assets/clean-room-panels.jpg";
import frozenBerries from "@/assets/frozen-berries.jpg";
import dairyColdStorage from "@/assets/dairy-cold-storage.jpg";

export const company = {
  name: "AACS — AA Cold Storages",
  legalName: "AA Cold Storages",
  tagline: "Complete Cooling Solutions",
  industry: "Cold Storage • Refrigeration • HVAC • Industrial Cooling",
  phone: "8073946255",
  whatsapp: "8073946255",
  email: "info@aacoldstorages.in",
  address:
    "#15/1B, Vaddarapalya, Kothnur Royal County, 1st Phase, Uttarahalli Hobli, Bengaluru, Karnataka – 560076, India",
  gstin: "29CEVPN3784H1ZK",
  businessHours: "Monday–Saturday: 9 AM – 7 PM",
  locationName: "Bengaluru, Karnataka",
};

export const images = {
  mainLogo,
  coldRoomHero,
  equipmentImage,
  installationImage,
  industryImage,
  flowerColdStorage,
  bananaRipening,
  mushroomChamber,
  meatColdStorage,
  iceCreamFreezer,
  blastFreezer,
  walkInFreezer,
  walkInChiller,
  coldStoragePlant,
  pufPanels,
  cleanRoomPanels,
  frozenBerries,
  dairyColdStorage,
};

export const productCategories = [
  "All",
  "Cold Storage Rooms",
  "Walk-In Chillers",
  "Walk-In Freezers",
  "Ripening Chambers",
  "Blast Freezers",
  "Specialized Cold Storage",
  "Insulated Panels",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  category: Exclude<ProductCategory, "All">;
  priceFormatted: string;
  priceValue?: number;
  moq: string;
  description: string;
  applications: string[];
  features: string[];
  specs: ProductSpec[];
  image: string;
  temperatureRange?: string;
  capacity?: string;
  featuredOnHome?: boolean;
};

export const productPriceDisclaimer =
  "Final price depends on room dimensions, temperature requirement, insulation thickness, refrigeration system and site conditions.";

export const productWhatsIncluded = [
  "PUF insulated panels",
  "Refrigeration unit",
  "Evaporator unit",
  "Condenser unit",
  "Insulated door",
  "Temperature controller",
  "Standard installation",
  "Testing & commissioning",
] as const;

export const productWhatsNotIncluded = [
  "Civil foundation work",
  "Electrical wiring beyond agreed scope",
  "Main electrical panel",
  "Transportation, if applicable",
  "GST",
  "Additional copper/refrigerant piping",
  "Site modifications",
] as const;

export const products: Product[] = [
  {
    slug: "2-ton-cold-storage-room",
    name: "Cold Storage Room — 2 Ton",
    category: "Cold Storage Rooms",
    priceFormatted: "₹2,80,000 / Piece",
    priceValue: 280000,
    moq: "1 Piece",
    temperatureRange: "2°C to 8°C",
    capacity: "2 Ton",
    featuredOnHome: true,
    ctaText: "GET A QUOTE",
    description:
      "AACS 2 Ton Cold Storage Rooms are designed for temperature-controlled storage requirements. The cold room can be configured according to the customer's required dimensions, application and refrigeration requirements.",
    applications: [
      "Fresh Fruits & Vegetables",
      "Dairy Products & Milk",
      "Commercial Kitchens & Restaurants",
      "Florists & Flower Storage",
      "Pharmaceuticals & Diagnostics",
    ],
    features: [
      "Customized room dimensions & configuration",
      "High-density GI insulated sandwich panels",
      "Single phase energy-efficient refrigeration unit",
      "Single insulated swing door with safety latch",
      "Digital microprocessor temperature controller",
      "Turnkey on-site installation by AACS",
    ],
    specs: [
      { label: "Storage Capacity", value: "2 Ton" },
      { label: "Material", value: "GI" },
      { label: "Phase", value: "Single Phase" },
      { label: "Door", value: "Single Door" },
      { label: "Brand", value: "AACS" },
      { label: "Operating Temperature", value: "2°C to 8°C" },
      { label: "Insulation Panel", value: "High Density PUF 60mm / 80mm" },
      { label: "Power Supply", value: "230V, 50Hz" },
    ],
    image: coldRoomHero,
  },
  {
    slug: "cloud-kitchen-cold-room",
    name: "Cloud Kitchen Cold Room",
    category: "Cold Storage Rooms",
    priceFormatted: "₹3,00,000 / Piece",
    priceValue: 300000,
    moq: "1 Piece",
    temperatureRange: "0°C to 8°C",
    capacity: "3 Ton",
    featuredOnHome: true,
    ctaText: "GET A QUOTE",
    description:
      "AACS Cloud Kitchen Cold Rooms provide controlled-temperature storage designed specifically for cloud kitchens, commercial food prep, and quick-service restaurant operations. The room configuration and refrigeration system can be customized according to the customer's requirements.",
    applications: [
      "Cloud Kitchens & Ghost Kitchens",
      "Commercial Food Preparation & QSRs",
      "Central Bakery & Confectionery",
      "Multi-Brand Delivery Hubs",
      "Hospitality & Catering Units",
    ],
    features: [
      "Air cooled high COP condensing system",
      "Durable GI construction with anti-corrosion coating",
      "Single or three phase power compatibility",
      "Single insulated heavy-duty flush door",
      "Automated defrost cycle and digital readouts",
      "AACS comprehensive AMC support available",
    ],
    specs: [
      { label: "Storage Capacity", value: "3 Ton" },
      { label: "Material", value: "GI" },
      { label: "Phase", value: "Single / Three Phase" },
      { label: "Door", value: "Single Door" },
      { label: "Compressor Type", value: "Air Cooled" },
      { label: "Brand", value: "AACS" },
      { label: "Insulation Thickness", value: "80mm High Density PUF" },
      { label: "Temperature Range", value: "0°C to +8°C" },
    ],
    image: coldRoomHero,
  },
  {
    slug: "flower-cold-storage-room",
    name: "Flower Cold Storage Room",
    category: "Cold Storage Rooms",
    priceFormatted: "₹3,00,000 / Piece",
    priceValue: 300000,
    moq: "1 Piece",
    temperatureRange: "5°C (High Humidity)",
    capacity: "1.5 Ton (8 × 8 ft)",
    featuredOnHome: true,
    ctaText: "GET A QUOTE",
    description:
      "AACS Flower Cold Storage Rooms are designed to help maintain suitable temperatures for storing flowers and other temperature-sensitive horticultural products.",
    applications: [
      "Commercial Florists & Boutiques",
      "Flower Wholesale Mandis",
      "Wedding & Event Floral Suppliers",
      "Export Cut-Flower Facilities",
    ],
    features: [
      "Gentle draft-free laminar air cooling preventing petal drying",
      "High relative humidity preservation at 5°C",
      "Compact 8 × 8 ft footprint fitting commercial spaces",
      "Single phase plug-and-cool refrigeration system",
      "Durable GI body with food-grade internal finish",
    ],
    specs: [
      { label: "Storage Capacity", value: "1.5 Ton" },
      { label: "Size", value: "8 × 8 ft" },
      { label: "Body Material", value: "GI" },
      { label: "Temperature", value: "5°C" },
      { label: "Phase", value: "Single Phase" },
      { label: "Brand", value: "AACS" },
      { label: "Airflow Type", value: "Low-velocity dual discharge" },
      { label: "Insulation", value: "80mm High Density PUF" },
    ],
    image: flowerColdStorage,
  },
  {
    slug: "walk-in-chiller",
    name: "Walk-In Chiller",
    category: "Walk-In Chillers",
    priceFormatted: "₹2,60,000 / Piece",
    priceValue: 260000,
    moq: "1 Piece",
    temperatureRange: "2°C*",
    capacity: "5 MT (8 × 8 × 8 ft)",
    featuredOnHome: true,
    ctaText: "GET A QUOTE",
    description:
      "AACS Walk-In Chillers provide controlled-temperature storage for products requiring chilled conditions. Suitable for food, dairy, beverage, pharmaceutical and other temperature-sensitive applications.",
    applications: [
      "Pharma & Biological Holding",
      "Fruits & Vegetables",
      "Beverages & Bottled Drinks",
      "Dairy & Fresh Milk",
      "Commercial Kitchen Walk-Ins",
    ],
    features: [
      "Ergonomic walk-in access with emergency glow safety handle",
      "Consistent 2°C* holding temperature across all shelves",
      "Spacious 8 × 8 × 8 ft modular room dimensions",
      "Air cooled outdoor condensing unit with copper coils",
      "Hygienic easy-clean internal surfaces",
    ],
    specs: [
      { label: "Storage Capacity", value: "5 MT" },
      { label: "Temperature", value: "2°C*" },
      { label: "Room Dimensions", value: "8 × 8 × 8 ft" },
      { label: "Applications", value: "Pharma, Fruits & Vegetables, Beverages, Dairy" },
      { label: "Brand", value: "AACS" },
      { label: "Panel Thickness", value: "60mm / 80mm PUF" },
      { label: "Door Type", value: "Flush mounted swing door with viewport" },
    ],
    image: walkInChiller,
  },
  {
    slug: "walk-in-freezer",
    name: "Walk-In Freezer",
    category: "Walk-In Freezers",
    priceFormatted: "₹4,98,000 / Piece",
    priceValue: 498000,
    moq: "1 Piece",
    temperatureRange: "-18°C to -20°C",
    capacity: "3 Ton (10 × 10 × 8 ft)",
    featuredOnHome: true,
    ctaText: "GET A QUOTE",
    description:
      "AACS Walk-In Freezers are designed for frozen food and other applications requiring low-temperature storage. The system uses 100–120 mm insulated panels and operates at approximately -18°C to -20°C.",
    applications: [
      "Frozen Meat & Poultry",
      "Ice Cream & Frozen Desserts",
      "Packaged RTC / RTE Frozen Foods",
      "Seafood & Marine Cold Storage",
      "Central Commissary Vaults",
    ],
    features: [
      "100–120 mm thick heavy insulated PUF sandwich panels",
      "Sub-zero -18°C to -20°C deep freeze performance",
      "Ventilated heater perimeter to prevent gasket freezing",
      "100 mm insulated heavy-duty freezer door",
      "Three phase high reliability compressor system",
    ],
    specs: [
      { label: "Capacity", value: "3 Ton" },
      { label: "Temperature", value: "-18°C to -20°C" },
      { label: "Dimensions", value: "10 × 10 × 8 ft" },
      { label: "Panel Thickness", value: "100–120 mm" },
      { label: "Phase", value: "Three Phase" },
      { label: "Door", value: "100 mm Door" },
      { label: "Feature", value: "Ventilated Heater" },
      { label: "Brand", value: "AACS" },
    ],
    image: walkInFreezer,
  },
  {
    slug: "banana-ripening-chamber",
    name: "Banana Ripening Chamber",
    category: "Ripening Chambers",
    priceFormatted: "₹2,95,000 / Piece",
    priceValue: 295000,
    moq: "1 Piece",
    temperatureRange: "14°C to 18°C (Controlled RH)",
    capacity: "10 × 10 × 8 ft",
    featuredOnHome: true,
    ctaText: "GET A QUOTE",
    description:
      "AACS Banana Ripening Chambers are designed for controlled ripening of bananas using an insulated chamber and controlled environmental conditions.",
    applications: [
      "Banana Traders & Wholesalers",
      "Produce Distributors & Mandis",
      "Organized Retail Supply Hubs",
      "Agri Logistics Warehouses",
    ],
    features: [
      "Controlled ethylene gas injection compatibility",
      "Precision air circulation for uniform box ripening",
      "60 mm thermal insulated sandwich panel construction",
      "230 V single phase power operation",
      "CO2 dilution dampers and humidity control",
    ],
    specs: [
      { label: "Brand", value: "AACS" },
      { label: "Chamber Size", value: "10 × 10 × 8 ft" },
      { label: "Voltage", value: "230 V" },
      { label: "Panel Thickness", value: "60 mm" },
      { label: "Application", value: "Banana Ripening" },
      { label: "Temperature Range", value: "14°C to 18°C" },
      { label: "Humidity", value: "85% to 95% RH" },
    ],
    image: bananaRipening,
  },
  {
    slug: "ripening-chamber",
    name: "Ripening Chamber",
    category: "Ripening Chambers",
    priceFormatted: "₹3,00,000 / Piece",
    priceValue: 300000,
    moq: "1 Piece",
    temperatureRange: "14°C to 22°C",
    capacity: "1* (10 × 10 × 10 ft)",
    featuredOnHome: false,
    ctaText: "GET A QUOTE",
    description:
      "AACS Ripening Chambers are designed for controlled ripening of fruits such as mangoes and bananas. Automated controls help maintain the required chamber conditions for the ripening process.",
    applications: [
      "Mango Ripening Facilities",
      "Banana Ripening Units",
      "Papaya & Tropical Fruits",
      "Fruit Aggregators & Exporters",
    ],
    features: [
      "Automated multi-parameter PLC control system",
      "Spacious 10 × 10 × 10 ft chamber size",
      "60 mm high-efficiency PUF panels",
      "220 V 50 Hz power supply",
      "Uniform airflow preventing fruit skin damage",
    ],
    specs: [
      { label: "Capacity", value: "1*" },
      { label: "Automation", value: "Automatic" },
      { label: "Chamber Size", value: "10 × 10 × 10 ft" },
      { label: "Voltage", value: "220 V" },
      { label: "Suitable Fruits", value: "Mango & Banana" },
      { label: "Panel Thickness", value: "60 mm" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Brand", value: "AACS" },
    ],
    image: bananaRipening,
  },
  {
    slug: "mushroom-growing-chamber",
    name: "Mushroom Growing Chamber",
    category: "Ripening Chambers",
    priceFormatted: "₹3,00,000 / Piece",
    priceValue: 300000,
    moq: "1 Piece",
    temperatureRange: "+2°C to +20°C",
    capacity: "Customized layout",
    featuredOnHome: false,
    ctaText: "GET A QUOTE",
    description:
      "AACS Mushroom Growing Chambers are designed to provide a controlled environment for mushroom cultivation, with temperature management suitable for different growing requirements.",
    applications: [
      "Button Mushroom Cultivation",
      "Oyster & Specialty Mushroom Farms",
      "Spawning & Incubation Rooms",
      "Agri-Tech Commercial Growers",
    ],
    features: [
      "Wide temperature management from +2°C to +20°C",
      "Durable GI panel construction with antimicrobial skin",
      "High humidity retention with misting compatibility",
      "Fresh air intake with filtration and CO2 management",
      "Energy efficient climate control by AACS",
    ],
    specs: [
      { label: "Material", value: "GI" },
      { label: "Temperature Range", value: "+2°C to +20°C" },
      { label: "Brand", value: "AACS" },
      { label: "Humidity Control", value: "Up to 95% RH" },
      { label: "Air Filtration", value: "Integrated intake filtration" },
    ],
    image: mushroomChamber,
  },
  {
    slug: "blast-freezer-room",
    name: "Blast Freezer Room",
    category: "Blast Freezers",
    priceFormatted: "₹8,50,000 / Piece",
    priceValue: 850000,
    moq: "1 Piece",
    temperatureRange: "-30°C to -35°C",
    capacity: "Rapid batch freezing",
    featuredOnHome: true,
    ctaText: "GET A QUOTE",
    description:
      "AACS Blast Freezer Rooms are designed for rapid freezing applications where products need to be brought down to low temperatures quickly. The system uses 120 mm insulated panels and is designed for operating temperatures of approximately -30°C to -35°C.",
    applications: [
      "Meat & Poultry Abattoirs",
      "Seafood & Fish Fast-Freezing",
      "Ready-to-Cook (RTC) Processors",
      "Ice Cream Hardening Vaults",
      "Bakery Dough Freezing",
    ],
    features: [
      "Ultra-low temperature operation down to -35°C",
      "120 mm thick heavy insulated PUF panels",
      "Heavy duty swing door with heated frame",
      "Rapid core freezing prevents cellular degradation",
      "Industrial high-static blast evaporator fans",
    ],
    specs: [
      { label: "Panel Thickness", value: "120 mm" },
      { label: "Temperature", value: "-30°C to -35°C" },
      { label: "Doors", value: "1" },
      { label: "Door Type", value: "Swing Door" },
      { label: "Brand", value: "AACS" },
      { label: "Refrigerant", value: "R404A / R448A / Low Temp" },
      { label: "Power Supply", value: "415V 3-Phase" },
    ],
    image: blastFreezer,
  },
  {
    slug: "meat-cold-storage",
    name: "Meat Cold Storage",
    category: "Specialized Cold Storage",
    priceFormatted: "₹5,00,000 / Piece",
    priceValue: 500000,
    moq: "1 Piece",
    temperatureRange: "-18°C to -20°C",
    capacity: "3 Ton (10 × 10 × 8 ft)",
    featuredOnHome: false,
    ctaText: "GET A QUOTE",
    description:
      "AACS Meat Cold Storage Rooms are designed for frozen meat storage applications requiring controlled low temperatures. The insulated enclosure and refrigeration system are configured for maintaining approximately -18°C to -20°C.",
    applications: [
      "Meat Processing & Distribution",
      "Poultry Cold Storage",
      "Slaughterhouses & Cold Chain Centers",
      "Wholesale Frozen Meat Wholesalers",
    ],
    features: [
      "Deep sub-zero holding at -18°C to -20°C",
      "100–120 mm thick GI insulated panel construction",
      "Three phase industrial refrigeration unit",
      "Washdown safe interior with drainage integration",
      "Overhead hook and trolley compatibility",
    ],
    specs: [
      { label: "Storage Capacity", value: "3 Ton" },
      { label: "Size", value: "10 × 10 × 8 ft" },
      { label: "Body Material", value: "GI" },
      { label: "Phase", value: "Three Phase" },
      { label: "Panel Thickness", value: "100–120 mm" },
      { label: "Temperature", value: "-18°C to -20°C" },
      { label: "Brand", value: "AACS" },
    ],
    image: meatColdStorage,
  },
  {
    slug: "ice-cream-freezer-room",
    name: "Ice Cream Freezer Room",
    category: "Specialized Cold Storage",
    priceFormatted: "₹5,00,000 / Piece",
    priceValue: 500000,
    moq: "1 Piece",
    temperatureRange: "-18°C to -20°C",
    capacity: "1 Ton (10 × 10 × 8 ft)",
    featuredOnHome: false,
    ctaText: "GET A QUOTE",
    description:
      "AACS Ice Cream Freezer Rooms are designed for frozen-product storage, providing insulated storage conditions suitable for ice cream and similar products.",
    applications: [
      "Ice Cream Manufacturing Units",
      "Frozen Dessert Distributors",
      "Dairy Product Warehouses",
      "Catering Frozen Vaults",
    ],
    features: [
      "Sub-zero thermal stability preserving ice cream crystallization",
      "100–120 mm thick insulated PUF panels",
      "Three phase compressor with fast thermal recovery",
      "Heated door gasket prevents frost lock",
      "Digital temperature display with alert trigger",
    ],
    specs: [
      { label: "Storage Capacity", value: "1 Ton" },
      { label: "Size", value: "10 × 10 × 8 ft" },
      { label: "Phase", value: "Three Phase" },
      { label: "Panel Thickness", value: "100–120 mm" },
      { label: "Temperature", value: "-18°C to -20°C" },
      { label: "Brand", value: "AACS" },
    ],
    image: iceCreamFreezer,
  },
  {
    slug: "cold-storage-plant",
    name: "Cold Storage Plant",
    category: "Specialized Cold Storage",
    priceFormatted: "₹5,10,000 / Piece",
    priceValue: 510000,
    moq: "1 Piece",
    temperatureRange: "2°C to 4°C",
    capacity: "5 Ton (20 × 10 × 8 ft) • 7.5 Ton Cooling",
    featuredOnHome: true,
    ctaText: "GET A QUOTE",
    description:
      "AACS Cold Storage Plants are designed for multi-commodity temperature-controlled storage. These systems can be configured for applications including fruits, vegetables, dairy, potatoes, pharmaceuticals and other temperature-sensitive products.",
    applications: [
      "Pharma Products",
      "Potato & Onion Storage",
      "Dairy & Fresh Milk",
      "Fruits & Vegetables",
      "Multipurpose 3PL Cold Warehousing",
    ],
    features: [
      "Multi-commodity 20 × 10 × 8 ft room envelope",
      "7.5 Ton heavy cooling capacity with insulated floor",
      "Multi-door configuration for segmented access",
      "415 V 3-phase digital control panel",
      "Turnkey civil planning, erection, and commissioning",
    ],
    specs: [
      { label: "Storage Capacity", value: "5 Ton" },
      { label: "Plant Type", value: "Multi Commodity" },
      { label: "Temperature", value: "2°C to 4°C" },
      { label: "Application", value: "Pharma, Potato, Dairy, Fruits, Vegetables, Multipurpose" },
      { label: "Size", value: "20 × 10 × 8 ft" },
      { label: "Body Material", value: "GI" },
      { label: "Phase", value: "Single / Three Phase" },
      { label: "Doors", value: "Multi Door" },
      { label: "Cooling Capacity", value: "7.5 Ton" },
      { label: "Floor", value: "Insulated Floor" },
      { label: "Panel Thickness", value: "60 mm" },
      { label: "Control Details", value: "Digital Panel" },
      { label: "Voltage", value: "415 V" },
      { label: "Brand", value: "AACS" },
    ],
    image: coldStoragePlant,
  },
  {
    slug: "puf-insulated-panels",
    name: "PUF Insulated Panels",
    category: "Insulated Panels",
    priceFormatted: "₹250 / sq.ft.",
    moq: "100 sq.ft.",
    featuredOnHome: true,
    ctaText: "GET A QUOTE",
    description:
      "AACS PUF Insulated Panels are precision-engineered sandwich panels for building high thermal-efficiency cold rooms, warehouses, and clean environments. Use confirmed AACS panel specifications.",
    applications: [
      "Cold Storage Rooms & Freezer Enclosures",
      "Food Processing & Packhouses",
      "Industrial Warehouses & Distribution Sheds",
      "Controlled Environment Agriculture",
    ],
    features: [
      "Rigid high-density Polyurethane Foam (40 ± 2 kg/m³)",
      "Cam-lock system with tongue and groove airtight joints",
      "Pre-painted Galvanized Steel (PPGI) / SS304 skins",
      "Thermal conductivity 0.022 – 0.024 W/m·K",
      "Self-extinguishing fire-retardant grade",
    ],
    specs: [
      { label: "Core Material", value: "Rigid Polyurethane Foam (PUF)" },
      { label: "Density", value: "40 ± 2 kg/m³" },
      { label: "Thickness Range", value: "50mm, 60mm, 80mm, 100mm, 120mm, 150mm" },
      { label: "Skin Material", value: "0.5mm / 0.6mm PPGI / SS304 / Aluminium" },
      { label: "Joint System", value: "Cam-Lock with tongue & groove" },
      { label: "Thermal Conductivity", value: "0.022 – 0.024 W/m·K" },
      { label: "Brand", value: "AACS" },
    ],
    image: pufPanels,
  },
  {
    slug: "clean-room-panels",
    name: "Clean Room Panels",
    category: "Insulated Panels",
    priceFormatted: "₹1,800 / m²",
    moq: "100 m²",
    featuredOnHome: true,
    ctaText: "CONTACT US FOR MORE DETAILS",
    description:
      "AACS Clean Room Panels are designed for controlled environments where insulated, cleanable and suitable panel systems are required. Panel specifications and installation requirements can be customized according to the project.",
    applications: [
      "Pharmaceutical Formulations & Clean Suites",
      "Biotechnology & Vaccine Production",
      "Medical Device Assembly Rooms",
      "Electronic & Semiconductor Cleanrooms",
    ],
    features: [
      "Flush-fitting seamless joints with zero dust crevices",
      "Antibacterial, chemical & disinfectant resistant skins",
      "Compatible with flush double-glazed view panels and doors",
      "Walk-on ceiling panels for maintenance access",
      "Customized design per ISO 5 to ISO 8 cleanroom classes",
    ],
    specs: [
      { label: "Standard Rate", value: "₹1,800 / m²" },
      { label: "Core Material", value: "High Density PUF / PIR / Rockwool" },
      { label: "Panel Thickness", value: "50mm / 80mm Flush System" },
      { label: "Skin Finish", value: "Antibacterial Epoxy / PVDF / SS304" },
      { label: "Cleanroom Class", value: "ISO 5 to ISO 8 (Class 100 to 100,000)" },
      { label: "Joint", value: "Flush Coving & Silicone Seal" },
      { label: "Brand", value: "AACS" },
    ],
    image: cleanRoomPanels,
  },
];

export type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  benefits: string[];
  scope: string[];
};

export const services: Service[] = [
  {
    id: "puf-panel-installation",
    name: "PUF Panel Installation",
    description:
      "Professional installation of PUF insulated panels for cold rooms, freezer rooms, chiller rooms and other insulated structures.",
    price: "₹250 / sq. ft.",
    image: installationImage,
    benefits: [
      "Laser-straight wall and ceiling panel alignment",
      "Zero thermal bridging and maximum vapor barrier integrity",
      "Trained technicians adhering to industrial safety norms",
      "Clean silicone finishing with internal and external flashings",
    ],
    scope: [
      "Civil floor layout marking and base channel fixing",
      "Wall & ceiling panel cam-locking and structural anchoring",
      "Door frame, gasket, and heater wire installation",
      "PVC / Aluminium coving and joint sealing",
    ],
  },
  {
    id: "cold-room-uninstallation",
    name: "Cold Room Uninstallation",
    description:
      "AACS provides cold-room dismantling and uninstallation services for existing cold storage, freezer and chiller rooms.",
    price: "₹300 / sq. ft.",
    image: installationImage,
    benefits: [
      "Preserves panel tongue-and-groove edges for re-use",
      "Safe refrigerant recovery avoiding environmental venting",
      "Orderly labeling of parts and electrical wiring",
      "Fast site handover with zero collateral damage",
    ],
    scope: [
      "Controlled refrigerant pump-down and electrical disconnect",
      "Evaporator, condenser, and piping removal",
      "Systematic panel cam-unlocking and protective packing",
      "Door and accessory uninstallation",
    ],
  },
  {
    id: "amc-services",
    name: "AMC Annual Maintenance Contracts",
    description:
      "AACS provides AMC services for cold storage and refrigeration systems for companies and commercial establishments. Maintenance plans can be customized according to equipment and operating requirements.",
    price: "Customized Plan",
    image: equipmentImage,
    benefits: [
      "Scheduled monthly / quarterly preventive inspection visits",
      "Priority response within 4 hours for unexpected outages",
      "Detailed health reports and performance logbooks",
      "Extended lifespan for compressors and electrical components",
    ],
    scope: [
      "Comprehensive / Non-Comprehensive contract options",
      "24/7 technical hotline support",
      "Routine filter, belt, and sensor replacements",
      "Seasonal load optimization and tuning",
    ],
  },
  {
    id: "cold-storage-service",
    name: "Cold Storage Service",
    description:
      "AACS provides servicing and maintenance for cold storage rooms, freezer rooms, chiller rooms and refrigeration systems.",
    price: "Service enquiry",
    image: equipmentImage,
    benefits: [
      "Minimizes sudden equipment breakdown risks",
      "Optimizes compressor efficiency and reduces power bills",
      "Ensures exact temperature stability for perishable inventory",
      "Rapid on-site troubleshooting across Bengaluru & Karnataka",
    ],
    scope: [
      "Refrigerant leak detection & gas charging",
      "Condenser & evaporator coil chemical descaling",
      "Compressor oil inspection & electrical terminal check",
      "Thermostat calibration & defrost cycle tuning",
    ],
  },
  {
    id: "split-ac-service",
    name: "Split AC Service",
    description:
      "Split AC servicing and maintenance for residential and commercial requirements.",
    price: "Service enquiry",
    image: equipmentImage,
    benefits: [
      "High-pressure jet wash for indoor blower and outdoor condenser",
      "Improved cooling output and air purification",
      "Gas top-up and electrical health diagnostic",
      "Transparent pricing with genuine replacement parts",
    ],
    scope: [
      "Indoor filter, coil, and drain tray sanitization",
      "Outdoor fan motor lubrication and coil cleaning",
      "Operating pressure and ampere draw measurement",
      "Remote control and PCB functioning verification",
    ],
  },
  {
    id: "split-ac-installation",
    name: "Split AC Installation",
    description:
      "Professional split AC installation for residential and commercial applications.",
    price: "Installation enquiry",
    image: installationImage,
    benefits: [
      "Correct vacuuming and nitrogen pressure testing before commissioning",
      "Heavy-duty outdoor bracket mounting with anti-vibration pads",
      "Neat indoor aesthetic placement with concealed drainage routing",
      "Standard testing of cooling gradient across indoor vents",
    ],
    scope: [
      "Indoor unit mounting plate fixing and leveling",
      "Core cutting / sleeve placement for copper & drain line",
      "Flare making, torque tightening, and line insulation",
      "Vacuum evacuation and refrigerant charge verification",
    ],
  },
];

export type SolutionSector = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  temperature: string;
  items: string[];
  keyHighlights: string[];
};

export const solutionSectors: SolutionSector[] = [
  {
    id: "food-and-agriculture",
    title: "Food & Agriculture",
    subtitle: "Farm-to-Fork Freshness & Post-Harvest Preservation",
    description:
      "Engineered cooling systems created to minimize post-harvest spoilage, preserve weight, and extend commercial marketability of fresh produce, flowers, dairy, and fruits.",
    image: industryImage,
    temperature: "0°C to +15°C (Humidity Controlled)",
    items: [
      "Fruits & Vegetables",
      "Dairy",
      "Flowers",
      "Banana / Mango Ripening",
    ],
    keyHighlights: [
      "High-humidity preservation preventing produce desiccation",
      "Multi-chamber zoning for compatible ethylene groups",
      "Fast pull-down after farm harvesting",
      "Energy-optimized cooling reducing per-kilo operating cost",
    ],
  },
  {
    id: "frozen-foods",
    title: "Frozen Food",
    subtitle: "Sub-Zero Texture & Deep Freeze Protection",
    description:
      "Heavy industrial freezer systems designed for rapid core freezing, ice cream hard storage, and deep frozen storage down to -40°C.",
    image: frozenBerries,
    temperature: "-18°C to -35°C (Deep Freeze)",
    items: [
      "Meat",
      "Ice Cream",
      "Frozen Food",
      "Blast Freezing",
    ],
    keyHighlights: [
      "Rapid core freezing eliminating large crystal formation",
      "Underfloor ventilation and floor heater mat protection",
      "Thermal break insulation preventing external condensation",
      "Dual compressor redundancy for mission-critical stock",
    ],
  },
  {
    id: "pharmaceutical",
    title: "Pharmaceutical",
    subtitle: "Strict Temperature Controlled Storage & Cleanrooms",
    description:
      "High-precision temperature controlled storage, walk-in chambers, and clean room enclosures complying with strict regulatory temperature uniformity norms.",
    image: cleanRoomPanels,
    temperature: "+2°C to +8°C / -20°C (Controlled)",
    items: [
      "Temperature Controlled Storage",
      "Vaccine & Biological Storage",
      "Active Pharmaceutical Ingredients (API)",
      "Clean Room Modular Enclosures",
    ],
    keyHighlights: [
      "Precise temperature mapping with ±0.5°C uniformity",
      "Automatic failover with standby condensing units",
      "24/7 digital data logging with alert triggers",
      "Smooth, flush antimicrobial hygienic panel finish",
    ],
  },
  {
    id: "commercial-and-industrial",
    title: "Commercial & Industrial",
    subtitle: "Walk-In Cooling & Multi-Commodity Warehousing",
    description:
      "Turnkey multi-commodity cold storage warehouses, walk-in commercial chillers and freezers, and industrial refrigeration for high-throughput enterprises.",
    image: coldStoragePlant,
    temperature: "Multi-Zone (-25°C to +15°C)",
    items: [
      "Walk-In Chillers",
      "Walk-In Freezers",
      "Multi-Commodity Storage",
    ],
    keyHighlights: [
      "Modular scalable layout adapted to warehouse floor plans",
      "Air cooled high COP condensing machinery",
      "Heavy-duty insulated doors with airtight perimeter seals",
      "Turnkey civil planning, erection, and AMC support",
    ],
  },
];

export const industriesList = [
  { name: "Food & Agriculture", desc: "Fresh produce, grains & perishables" },
  { name: "Frozen Foods", desc: "Meats, sea-food & processed packs" },
  { name: "Pharmaceutical", desc: "Vaccines, APIs & medical storage" },
  { name: "Dairy", desc: "Milk, cheese, butter & ice cream" },
  { name: "Flower Storage", desc: "Cut flowers & floral export logistics" },
  { name: "Commercial Buildings", desc: "HVAC & hospitality cooling" },
  { name: "Industrial Warehouses", desc: "Large multi-commodity cold stores" },
  { name: "Multi Commodity Storage", desc: "Flexible multi-temperature rooms" },
] as const;

export const whyChooseReasons = [
  {
    title: "Customized Cold Storage Solutions",
    description:
      "Every system is designed around your specific inventory type, temperature requirements, volume, and facility dimensions.",
  },
  {
    title: "End-to-End Supply & Installation",
    description:
      "Turnkey execution from civil layout consultation, PUF panel fabrication, refrigeration machinery installation to final testing.",
  },
  {
    title: "Energy Efficient Refrigeration Systems",
    description:
      "High COP compressors, premium insulation, and smart controllers that minimize monthly electricity expenditure.",
  },
  {
    title: "AMC & Maintenance Support",
    description:
      "Comprehensive Annual Maintenance Contracts with rapid on-site troubleshooting to prevent costly downtime.",
  },
  {
    title: "Industrial & Commercial Expertise",
    description:
      "Years of hands-on refrigeration engineering across agriculture, food processing, hospitality, and pharmaceutical sectors.",
  },
  {
    title: "Customer-Focused Service",
    description:
      "Transparent quotations, reliable delivery timelines, dedicated engineer support, and authentic components.",
  },
] as const;

export const companyStory = {
  aboutStory:
    "AACS – AA Cold Storages provides comprehensive cold storage and refrigeration solutions for businesses across multiple industries. We specialize in design, supply, installation, servicing and maintenance of temperature-controlled storage systems tailored to customer requirements. Our solutions include cold rooms, freezer rooms, chillers, ripening chambers, blast freezer rooms, specialized storage systems, insulated panels and clean room panels. We provide complete lifecycle support including installation, servicing and Annual Maintenance Contracts.",
  vision:
    "To become a trusted provider of dependable cold storage and refrigeration solutions through professional service, reliable systems and customer-focused solutions.",
  missionPoints: [
    "Understand customer storage requirements thoroughly.",
    "Deliver customized refrigeration solutions engineered for reliability.",
    "Maintain professional installation and safety standards.",
    "Provide proactive AMC and preventive maintenance support.",
    "Deliver responsive after-sales assistance across Bengaluru & Karnataka.",
    "Improve technical capabilities and energy efficiency continuously.",
    "Build long-term, trust-based customer relationships.",
  ],
};

export const enquiryOptions = [
  ...products.map((item) => `${item.name} (${item.priceFormatted})`),
  ...services.map((item) => `${item.name} (${item.price})`),
  "Custom Cold Room Consultation",
  "Commercial HVAC Inquiry",
];