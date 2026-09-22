import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  MessageCircle,
  Snowflake,
  Cog,
  Factory,
  Wind,
  ThermometerSnowflake,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

// Backgrounds & All Fixed Product Showcase Images
import alpineBg from "@/assets/alpine-frost-bg.jpg";
import coldRoomHero from "@/assets/cold-room-hero.jpg";
import industryProduce from "@/assets/industry-cold-storage.jpg";
import refrigerationEquipment from "@/assets/refrigeration-equipment.jpg";
import installationImage from "@/assets/technician-installation.jpg";
import frozenBerries from "@/assets/frozen-berries.jpg";
import bananaRipening from "@/assets/banana-ripening.jpg";
import cleanRoomPanels from "@/assets/clean-room-panels.jpg";
import coldPlant from "@/assets/cold-storage-plant.jpg";
import walkInChiller from "@/assets/walk-in-chiller.jpg";
import blastFreezer from "@/assets/blast-freezer.jpg";
import walkInFreezer from "@/assets/walk-in-freezer.jpg";
import pufPanels from "@/assets/puf-panels.jpg";

interface CoverflowProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
}

// 8 Complete Products previously featured in hero
const coverflowProducts: CoverflowProduct[] = [
  {
    id: "cold-room-hero",
    slug: "2-ton-cold-storage-room",
    name: "Cold Storage Room — 2 Ton",
    category: "Cold Storage Rooms",
    image: coldRoomHero,
  },
  {
    id: "walk-in-chiller",
    slug: "walk-in-chiller",
    name: "Commercial Walk-In Chiller",
    category: "Walk-In Chillers",
    image: walkInChiller,
  },
  {
    id: "blast-freezer",
    slug: "blast-freezer-room",
    name: "Blast Freezer Room (-40°C)",
    category: "Blast Freezers",
    image: blastFreezer,
  },
  {
    id: "banana-ripening",
    slug: "banana-ripening-chamber",
    name: "Banana Ripening Chamber",
    category: "Ripening Chambers",
    image: bananaRipening,
  },
  {
    id: "puf-panels",
    slug: "puf-insulated-panels",
    name: "PUF Insulated Cold Room Panels",
    category: "Insulated Panels",
    image: pufPanels,
  },
  {
    id: "refrigeration-equipment",
    slug: "walk-in-freezer",
    name: "Heavy Duty Refrigeration Systems",
    category: "Refrigeration Systems",
    image: walkInFreezer,
  },
  {
    id: "clean-room-panels",
    slug: "clean-room-panels",
    name: "Clean Room Panels & Modular Walls",
    category: "Insulated Panels",
    image: cleanRoomPanels,
  },
  {
    id: "cold-plant",
    slug: "cold-storage-plant",
    name: "Turnkey Cold Storage Plant",
    category: "Specialized Cold Storage",
    image: coldPlant,
  },
];

// Rich carousel slides: each contains the blended centerpiece and synchronized floating cards
const heroSlides = [
  {
    id: "cold-room",
    slug: "2-ton-cold-storage-room",
    name: "Cold Storage Room — 2 Ton",
    category: "Cold Storage Rooms",
    mainImage: coldRoomHero,
    floatingTopImage: industryProduce,
    floatingTopBadge: { temp: "-18°C", label: "TEMPERATURE CONTROLLED" },
    floatingBottomImage: frozenBerries,
    tagline: "Preserve Today For a Better Tomorrow",
  },
  {
    id: "walk-in-chiller",
    slug: "walk-in-chiller",
    name: "Commercial Walk-In Chiller",
    category: "Walk-In Chillers",
    mainImage: walkInChiller,
    floatingTopImage: bananaRipening,
    floatingTopBadge: { temp: "+2°C to +8°C", label: "CHILLED STORAGE" },
    floatingBottomImage: coldRoomHero,
    tagline: "Uniform Cooling & High Humidity",
  },
  {
    id: "blast-freezer",
    slug: "blast-freezer-room",
    name: "Blast Freezer Room (-40°C)",
    category: "Blast Freezers",
    mainImage: blastFreezer,
    floatingTopImage: refrigerationEquipment,
    floatingTopBadge: { temp: "-40°C", label: "RAPID PULL-DOWN" },
    floatingBottomImage: coldPlant,
    tagline: "Rapid Freezing Without Ice Damage",
  },
  {
    id: "banana-ripening",
    slug: "banana-ripening-chamber",
    name: "Banana Ripening Chamber",
    category: "Ripening Chambers",
    mainImage: bananaRipening,
    floatingTopImage: industryProduce,
    floatingTopBadge: { temp: "+14°C to +18°C", label: "ETHYLENE CONTROL" },
    floatingBottomImage: coldRoomHero,
    tagline: "Uniform Color & Sweetness Ripening",
  },
  {
    id: "puf-panels",
    slug: "puf-insulated-panels",
    name: "PUF Insulated Cold Room Panels",
    category: "Insulated Panels",
    mainImage: pufPanels,
    floatingTopImage: cleanRoomPanels,
    floatingTopBadge: { temp: "0.022 W/mK", label: "AIRTIGHT CAM-LOCK" },
    floatingBottomImage: coldRoomHero,
    tagline: "High Density 40-42 kg/m³ Insulation",
  },
  {
    id: "refrigeration-systems",
    slug: "walk-in-freezer",
    name: "Heavy Duty Refrigeration Systems",
    category: "Refrigeration Systems",
    mainImage: walkInFreezer,
    floatingTopImage: coldPlant,
    floatingTopBadge: { temp: "COP 3.8+", label: "HIGH EFFICIENCY" },
    floatingBottomImage: frozenBerries,
    tagline: "Continuous Duty Industrial Compressors",
  },
  {
    id: "clean-room",
    slug: "clean-room-panels",
    name: "Clean Room Panels & Modular Walls",
    category: "Insulated Panels",
    mainImage: cleanRoomPanels,
    floatingTopImage: installationImage,
    floatingTopBadge: { temp: "ISO Class 5-8", label: "PHARMA GRADE" },
    floatingBottomImage: refrigerationEquipment,
    tagline: "Smooth Flush Dust-Free Surfaces",
  },
  {
    id: "cold-plant",
    slug: "cold-storage-plant",
    name: "Turnkey Cold Storage Plant",
    category: "Specialized Cold Storage",
    mainImage: coldPlant,
    floatingTopImage: coldRoomHero,
    floatingTopBadge: { temp: "100+ TONS", label: "TURNKEY FACILITY" },
    floatingBottomImage: bananaRipening,
    tagline: "Complete End-to-End Cold Chain",
  },
];

// EXACTLY 6 DOMAIN ICONS WITH CONCISE LABELS BELOW
const domainIcons = [
  { label: "Cold Storage", to: "/products", Icon: Snowflake },
  { label: "Refrigeration", to: "/products", Icon: Cog },
  { label: "Industrial Cooling", to: "/solutions", Icon: Factory },
  { label: "HVAC Services", to: "/solutions", Icon: Wind },
  { label: "Cold Rooms", to: "/products", Icon: ThermometerSnowflake },
  { label: "Service & AMC", to: "/services", Icon: Wrench },
] as const;

export function HeroCoverflow() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = heroSlides.length;
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Continuous auto-advance every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((curr) => (curr + 1) % total);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  const currentSlide = heroSlides[activeIdx] ?? heroSlides[0]!;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-[#EBF5FC] via-[#F4F9FE] to-[#FFFFFF] pt-6 pb-6 lg:pt-8 lg:pb-0 text-[#1E293B]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Left Alpine Mountain Misty Frost Layer */}
      <img
        src={alpineBg}
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[55%] object-cover object-left opacity-35 pointer-events-none mix-blend-multiply select-none"
        style={{
          maskImage: "linear-gradient(to right, black 30%, rgba(0,0,0,0.5) 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 30%, rgba(0,0,0,0.5) 65%, transparent 100%)",
        }}
      />

      {/* 2. Soft Ambient Watermark: Giant Snowflake (Positioned further down as requested) */}
      <Snowflake
        className="absolute left-[34%] sm:left-[38%] lg:left-[42%] top-[54%] sm:top-[58%] lg:top-[62%] h-48 w-48 sm:h-56 sm:w-56 text-[#0AA8F5]/20 pointer-events-none -rotate-6 select-none"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="grid items-center gap-5 lg:grid-cols-12 lg:gap-4">
          {/* ================= LEFT COLUMN: HERO HEADLINE & BUTTONS (DESKTOP GETS ICONS AS WELL) ================= */}
          <div className="lg:col-span-5 xl:col-span-5 pb-1 lg:pb-8">
            <div className="animate-fade-up">
              {/* Eyebrow Line */}
              <div className="flex items-center gap-2.5">
                <span className="font-display text-[0.72rem] sm:text-xs font-black uppercase tracking-[0.22em] text-[#0050A7]">
                  KEEPING YOUR BUSINESS FRESH
                </span>
                <span className="h-[2px] w-10 bg-[#0AA8F5]" />
              </div>

              {/* Main Headline */}
              <h1 className="mt-2.5 font-display text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] xl:text-[2.35rem] font-black leading-[1.2] text-[#002E7D] tracking-tight">
                Complete <span className="text-[#0AA8F5]">Cold Storage</span> &amp; Refrigeration Solutions
              </h1>

              {/* Action Buttons: GET A QUOTE & WHATSAPP US (Side by Side, 100% Balanced on Mobile) */}
              <div className="mt-3.5 sm:mt-4 flex flex-row items-center gap-2 sm:gap-3 flex-nowrap w-full">
                <Button
                  asChild
                  size="sm"
                  className="flex-1 sm:flex-initial h-9 sm:h-11 rounded-full bg-gradient-to-r from-[#0050A7] via-[#0066CC] to-[#0AA8F5] px-2.5 sm:pl-4.5 sm:pr-2 font-display text-[0.65rem] xs:text-xs md:text-sm font-bold tracking-wider text-white shadow-[0_4px_18px_rgba(0,80,167,0.3)] hover:shadow-[0_6px_24px_rgba(0,80,167,0.45)] hover:scale-[1.02] active:scale-95 transition-all duration-300 whitespace-nowrap justify-center"
                >
                  <Link to="/contact" className="flex items-center justify-center">
                    <span>GET A QUOTE</span>
                    <span className="ml-1 sm:ml-2.5 flex h-5 w-5 sm:h-7.5 sm:w-7.5 items-center justify-center rounded-full bg-white text-[#0050A7] shadow-sm transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 shrink-0">
                      <ArrowRight className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                    </span>
                  </Link>
                </Button>

                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="flex-1 sm:flex-initial h-9 sm:h-11 rounded-full border border-[#D8E7F5] bg-white px-2.5 sm:px-4.5 font-display text-[0.65rem] xs:text-xs md:text-sm font-bold text-[#1E293B] shadow-sm hover:border-[#25D366] hover:bg-white hover:text-[#008938] hover:shadow-md active:scale-95 transition-all duration-300 whitespace-nowrap justify-center"
                >
                  <a
                    href={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(
                      "Hi AACS, I would like to inquire about your cold storage and refrigeration solutions."
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1 sm:gap-2"
                  >
                    <span className="flex h-4.5 w-4.5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-active:scale-95 shrink-0">
                      <WhatsAppIcon className="h-2.5 sm:h-3.5 w-2.5 sm:w-3.5 fill-white text-white" />
                    </span>
                    <span className="tracking-wide">WHATSAPP US</span>
                  </a>
                </Button>
              </div>

              {/* DESKTOP-ONLY DOMAIN ICONS (Hidden on mobile, shown on lg+) */}
              <div className="hidden lg:grid mt-6 pt-4 border-t border-[#D8E7F5]/80 grid-cols-6 gap-2">
                {domainIcons.map((item, idx) => {
                  const { Icon } = item;
                  return (
                    <Link
                      key={idx}
                      to={item.to}
                      style={{ animationDelay: `${idx * 0.15}s` }}
                      className="group flex flex-col items-center text-center p-1.5 rounded-xl transition-all duration-300 hover:bg-[#F0F9FF]/80 hover:-translate-y-1 active:scale-95 active:bg-[#EBF5FC]"
                    >
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white border border-[#D8E7F5] text-[#0050A7] shadow-[0_4px_12px_rgba(0,80,167,0.1)] group-hover:border-[#0AA8F5] group-hover:text-[#0AA8F5] group-hover:bg-white group-hover:shadow-[0_8px_20px_rgba(10,168,245,0.25)] group-hover:scale-105 group-active:scale-95 transition-all duration-300">
                        <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5 transition-transform duration-300 group-hover:rotate-12 group-active:rotate-12" />
                      </div>
                      <span className="mt-1.5 block font-display text-[0.62rem] sm:text-[0.68rem] font-bold leading-snug text-[#1A2B3C] group-hover:text-[#0050A7] transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: ALL IMAGES IN BLENDED CAROUSEL SHOWCASE ================= */}
          <div className="lg:col-span-7 xl:col-span-7 relative max-w-full overflow-hidden">
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="relative mx-auto w-full max-w-full min-h-[260px] xs:min-h-[300px] sm:min-h-[380px] lg:min-h-[480px] flex items-center justify-end overflow-hidden rounded-2xl lg:rounded-l-3xl select-none">
                {/* 1. Centerpiece Main Carousel Image with Left Feathered Mask Blending */}
                <div
                  onClick={() => navigate({ to: "/products/$slug", params: { slug: currentSlide.slug } })}
                  className="relative w-full h-[250px] xs:h-[290px] sm:h-[370px] lg:h-[460px] rounded-2xl lg:rounded-l-3xl overflow-hidden shadow-[0_22px_55px_rgba(0,46,125,0.2)] cursor-pointer bg-[#001B4B]"
                  style={{
                    maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 3%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,0.85) 18%, black 28%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 3%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,0.85) 18%, black 28%)",
                  }}
                >
                  {heroSlides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className={cn(
                        "absolute inset-0 transition-all duration-700 ease-in-out",
                        idx === activeIdx
                          ? "opacity-100 scale-100 z-10 pointer-events-auto"
                          : "opacity-0 scale-105 z-0 pointer-events-none"
                      )}
                    >
                      <img
                        src={slide.mainImage}
                        alt={slide.name}
                        loading={idx === 0 ? "eager" : "lazy"}
                        fetchPriority={idx === 0 ? "high" : "auto"}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ))}

                  {/* Top Edge Soft Mist Overlay */}
                  <div className="absolute inset-x-0 top-0 h-14 sm:h-24 bg-gradient-to-b from-[#F4F9FE] via-[#F4F9FE]/60 to-transparent pointer-events-none z-20" />

                  {/* Left Edge Soft Mist Overlay */}
                  <div className="absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#F4F9FE] via-[#F4F9FE]/50 to-transparent pointer-events-none z-20" />

                  {/* Rolling cold mist spreading across floor */}
                  <div className="absolute -bottom-6 -left-8 w-44 sm:w-80 h-20 sm:h-36 bg-gradient-to-tr from-[#EBF5FC] via-[#F4F9FE]/85 to-transparent blur-xl pointer-events-none z-20" />

                  {/* Active Product Title & Counter Pill */}
                  <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-16 z-30 pointer-events-none bg-white/90 backdrop-blur-md px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#D8E7F5] shadow-sm flex items-center gap-1.5 sm:gap-2.5">
                    <span className="flex h-2 w-2 rounded-full bg-[#0AA8F5] animate-pulse" />
                    <span className="font-display text-[0.62rem] xs:text-[0.68rem] sm:text-xs font-bold text-[#002E7D] truncate max-w-[140px] xs:max-w-[190px] sm:max-w-[260px]">
                      {currentSlide.name}
                    </span>
                    <span className="text-[0.55rem] sm:text-[0.62rem] font-black text-[#0050A7]/70 border-l border-[#D8E7F5] pl-1.5 sm:pl-2">
                      0{activeIdx + 1}/0{total}
                    </span>
                  </div>
                </div>

                {/* 2. Top Right Layered Floating Inset */}
                <div
                  onClick={() => navigate({ to: "/products/$slug", params: { slug: currentSlide.slug } })}
                  className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 lg:top-4 lg:right-4 w-[90px] xs:w-[110px] sm:w-[150px] lg:w-[180px] aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(0,46,125,0.32)] border-2 border-white/90 z-30 transition-all duration-500 hover:scale-105 cursor-pointer bg-[#001B4B]"
                >
                  <div className="absolute inset-x-0 top-0 h-4 sm:h-6 bg-gradient-to-b from-white/30 to-transparent pointer-events-none z-10" />
                  {heroSlides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className={cn(
                        "absolute inset-0 transition-all duration-700 ease-in-out",
                        idx === activeIdx ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
                      )}
                    >
                      <img
                        src={slide.floatingTopImage}
                        alt="Facility Preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Floating Temperature Badge */}
                  <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 flex items-center gap-1 sm:gap-1.5 rounded-lg bg-[#001B4B]/92 px-1.5 py-0.5 sm:px-2 sm:py-1 text-white shadow-xl backdrop-blur-md border border-white/20 z-20">
                    <Snowflake className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-[#38BDF8] shrink-0" />
                    <div className="leading-tight">
                      <span className="block font-display text-[0.52rem] xs:text-[0.58rem] sm:text-xs font-black text-white leading-none">
                        {currentSlide.floatingTopBadge.temp}
                      </span>
                      <span className="hidden xs:block text-[0.4rem] sm:text-[0.45rem] font-bold uppercase tracking-wider text-[#7DD3FC]">
                        {currentSlide.floatingTopBadge.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Bottom Right Layered Floating Inset */}
                <div
                  onClick={() => navigate({ to: "/products/$slug", params: { slug: currentSlide.slug } })}
                  className="absolute bottom-2.5 right-1 sm:bottom-4 sm:right-2 w-[75px] xs:w-[95px] sm:w-[130px] lg:w-[155px] aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(0,46,125,0.38)] border-2 border-white/90 z-30 transition-all duration-500 hover:scale-105 cursor-pointer bg-[#001B4B]"
                >
                  {heroSlides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className={cn(
                        "absolute inset-0 transition-all duration-700 ease-in-out",
                        idx === activeIdx ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
                      )}
                    >
                      <img
                        src={slide.floatingBottomImage}
                        alt="Detail Preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* 4. Bottom Swooshing Wave with Dynamic Cursive Tagline */}
                <div className="absolute -bottom-1 -right-1 w-[180px] xs:w-[220px] sm:w-[300px] lg:w-[350px] h-[55px] xs:h-[65px] sm:h-[85px] z-40 pointer-events-none flex items-end justify-end pb-1.5 sm:pb-2 pr-2 sm:pr-3 overflow-hidden select-none">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 380 95"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 0 95 C 100 40, 210 12, 380 32 L 380 95 Z"
                      fill="url(#heroWaveGrad)"
                      opacity="0.95"
                    />
                    <defs>
                      <linearGradient id="heroWaveGrad" x1="0" y1="0" x2="380" y2="95" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#0AA8F5" stopOpacity="0.85" />
                        <stop offset="45%" stopColor="#0050A7" stopOpacity="0.96" />
                        <stop offset="100%" stopColor="#002E7D" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Frosted Snowflake on the wave */}
                  <Snowflake className="absolute left-4 sm:left-14 bottom-2 h-8 w-8 sm:h-16 sm:w-16 text-white/20 pointer-events-none -rotate-12 select-none" />

                  <div className="relative z-10 text-right pr-1 sm:pr-2 max-w-[140px] xs:max-w-[180px] sm:max-w-none">
                    <span className="font-cursive text-xs xs:text-sm sm:text-lg lg:text-xl text-white font-bold tracking-wide drop-shadow-md block truncate sm:overflow-visible transition-all duration-500">
                      {currentSlide.tagline}
                    </span>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE-ONLY DOMAIN ICONS (Rendered directly after Images on mobile) ================= */}
        <div className="block lg:hidden mt-4 pt-3.5 border-t border-[#D8E7F5]/80 pb-1">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5">
            {domainIcons.map((item, idx) => {
              const { Icon } = item;
              return (
                <Link
                  key={idx}
                  to={item.to}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                  className="group flex flex-col items-center text-center p-1.5 rounded-xl transition-all duration-300 hover:bg-[#F0F9FF]/80 hover:-translate-y-1 active:scale-95 active:bg-[#EBF5FC]"
                >
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white border border-[#D8E7F5] text-[#0050A7] shadow-[0_4px_12px_rgba(0,80,167,0.1)] group-hover:border-[#0AA8F5] group-hover:text-[#0AA8F5] group-hover:bg-white group-hover:shadow-[0_8px_20px_rgba(10,168,245,0.25)] group-hover:scale-105 group-active:scale-95 transition-all duration-300">
                    <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5 transition-transform duration-300 group-hover:rotate-12 group-active:rotate-12" />
                  </div>
                  <span className="mt-1.5 block font-display text-[0.62rem] sm:text-[0.68rem] font-bold leading-snug text-[#1A2B3C] group-hover:text-[#0AA8F5] transition-colors">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
