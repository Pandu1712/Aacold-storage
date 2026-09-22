import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  Flower2,
  PackageCheck,
  Settings,
  ShieldCheck,
  Snowflake,
  ThermometerSnowflake,
  Warehouse,
  MessageCircle,
  ChevronRight,
  Play,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, ProductCard, SectionHeading, TrustStrip } from "@/components/sections";
import { HeroCoverflow } from "@/components/hero-coverflow";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  images,
  products,
  services,
  whyChooseReasons,
  company,
} from "@/lib/site-data";
import industryProduce from "@/assets/industry-cold-storage.jpg";
import frozenBerries from "@/assets/frozen-berries.jpg";
import cleanRoomPanels from "@/assets/clean-room-panels.jpg";
import dairyColdStorage from "@/assets/dairy-cold-storage.jpg";
import flowerColdStorage from "@/assets/flower-cold-storage.jpg";
import refrigerationEquipment from "@/assets/refrigeration-equipment.jpg";
import coldPlant from "@/assets/cold-storage-plant.jpg";
import coldRoomHero from "@/assets/cold-room-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "AA Cold Storages | Complete Cooling Solutions Bengaluru",
      },
      {
        name: "description",
        content:
          "AACS provides customized cold rooms, walk-in chillers, freezer rooms, ripening chambers, blast freezer rooms, insulated panels, HVAC and refrigeration services for commercial and industrial businesses.",
      },
      {
        property: "og:title",
        content: "AA Cold Storages — Complete Cooling Solutions",
      },
      {
        property: "og:description",
        content:
          "Customized industrial and commercial cold storage solutions, PUF panels, ripening chambers, blast freezers and AMC support in Bengaluru, Karnataka.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const industryCards = [
  {
    name: "Food & Agriculture",
    tag: "Produce & Grains",
    desc: "Fresh fruits, vegetables, seeds & agricultural perishables",
    image: industryProduce,
    Icon: Flower2,
  },
  {
    name: "Frozen Foods",
    tag: "-18°C to -25°C",
    desc: "Meats, sea-food, poultry & frozen processed packs",
    image: frozenBerries,
    Icon: Snowflake,
  },
  {
    name: "Pharmaceutical",
    tag: "+2°C to +8°C",
    desc: "Vaccines, APIs, bio-pharma & clinical sample storage",
    image: cleanRoomPanels,
    Icon: PackageCheck,
  },
  {
    name: "Dairy",
    tag: "Chilled & Frozen",
    desc: "Milk processing, cheese aging, butter & ice cream cold stores",
    image: dairyColdStorage,
    Icon: ThermometerSnowflake,
  },
  {
    name: "Flower Storage",
    tag: "+2°C to +4°C High RH",
    desc: "Cut roses, floriculture preservation & floral export cold chain",
    image: flowerColdStorage,
    Icon: Flower2,
  },
  {
    name: "Commercial Buildings",
    tag: "HVAC & Hotels",
    desc: "Hospitality cooling, supermarkets, malls & central HVAC",
    image: refrigerationEquipment,
    Icon: Building2,
  },
  {
    name: "Industrial Warehouses",
    tag: "Bulk Capacity",
    desc: "Large multi-commodity mega warehouses & logistics parks",
    image: coldPlant,
    Icon: Factory,
  },
  {
    name: "Multi Commodity Storage",
    tag: "Multi-Temp Rooms",
    desc: "Flexible partitioned chambers with independent temperature zones",
    image: coldRoomHero,
    Icon: Warehouse,
  },
];

function HomePage() {
  return (
    <>
      {/* 1. PREMIUM 3D COVERFLOW HERO SHOWCASE */}
      <HeroCoverflow />

      {/* 2. Company Trust Strip */}
      <TrustStrip />

      {/* 3. OUR SERVICES */}
      <section className="site-container py-6 lg:py-8" id="services">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-[#D8E7F5]">
          <div>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              <span className="whitespace-nowrap">Turnkey Services &amp; AMC</span>
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-black text-[#002E7D] tracking-tight leading-tight sm:whitespace-nowrap">
              Refrigeration Services &amp; <span className="text-[#0AA8F5]">AMC Maintenance</span>
            </h2>
            <p className="mt-1 max-w-xl text-xs sm:text-sm text-[#5C728A]">
              From precision panel installation to emergency troubleshooting and comprehensive AMC contracts.
            </p>
          </div>

          {/* Quick Jump Pill to Products */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#featured-products"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#0AA8F5]/40 bg-[#F0F9FF] px-4 py-2 font-display text-xs font-bold text-[#0050A7] shadow-sm hover:bg-[#0050A7] hover:text-white transition-all duration-300"
            >
              <span>📦 View Products Below</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Services Grid (3 Columns) with Dynamic Directional ScrollReveal Transitions */}
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const directions: ("left" | "up" | "right")[] = ["left", "up", "right"];
            const dir = directions[idx % 3];
            return (
              <ScrollReveal key={service.id} direction={dir} delay={(idx % 3) * 100} duration={650}>
                <article
                  className="interactive-card flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D8E7F5] bg-white p-5 shadow-card group active:scale-[0.985] cursor-pointer h-full"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0050A7] to-[#0AA8F5] text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-active:scale-105">
                        <Settings className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-[#F5F9FC] border border-[#D8E7F5] px-3 py-0.5 text-xs font-bold text-[#0050A7] transition-colors duration-300 group-hover:bg-[#0050A7] group-hover:text-white">
                        {service.price}
                      </span>
                    </div>

                    <h3 className="mt-3.5 font-display text-base sm:text-lg font-bold text-[#002E7D] group-hover:text-[#0AA8F5] transition-colors">
                      {service.name}
                    </h3>

                    <p className="mt-1.5 text-xs leading-relaxed text-[#5C728A]">
                      {service.description}
                    </p>

                    <ul className="mt-3.5 space-y-1.5 border-t border-[#D8E7F5]/80 pt-3 text-xs text-[#1A2B3C]">
                      {service.benefits.slice(0, 2).map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#0AA8F5] shrink-0 mt-0.5" />
                          <span className="text-[0.75rem] text-[#334155]">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-1">
                    <Button
                      asChild
                      size="sm"
                      className="w-full rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] text-xs font-bold text-white shadow-brand hover:opacity-95 active:scale-95 transition-all duration-200"
                    >
                      <Link to="/contact">Book Service / Get Quote</Link>
                    </Button>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-5 text-center">
          <ScrollReveal direction="up" delay={150}>
            <Button
              asChild
              size="default"
              variant="outline"
              className="rounded-xl border-[#D8E7F5] px-6 py-2.5 font-display text-xs font-semibold text-[#002E7D] hover:border-[#0AA8F5] hover:bg-[#F5F9FC] active:scale-95 transition-all duration-200"
            >
              <Link to="/services">
                View All Services &amp; Pricing <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. SIMULTANEOUS FEATURED PRODUCTS WITH EXACT PRICES */}
      <section className="bg-[#F5F9FC] border-y border-[#D8E7F5] py-6 lg:py-8" id="featured-products">
        <div className="site-container">
          <SectionHeading
            eyebrow="Engineered Products & Pricing"
            title={
              <>
                Cold Storage Rooms, <span className="text-[#0AA8F5]">Chillers &amp; Panels</span>
              </>
            }
            copy="Select any product to view exact starting prices, technical specifications, and custom configuration options."
            center
          />

          {/* Featured Product Cards Grid with Alternating Left / Up / Right Animations */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product, idx) => {
              const directions: ("left" | "up" | "right")[] = ["left", "up", "right"];
              const dir = directions[idx % 3];
              return (
                <ProductCard
                  key={product.slug}
                  product={product}
                  direction={dir}
                  delay={(idx % 3) * 80}
                />
              );
            })}
          </div>

          {/* Link to Full Catalogue */}
          <div className="mt-5 text-center">
            <ScrollReveal direction="up" delay={120}>
              <Button
                asChild
                size="default"
                className="rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-7 py-2.5 font-display text-xs font-bold text-white shadow-brand hover:opacity-95 active:scale-95 transition-all duration-200"
              >
                <Link to="/products">
                  Explore All {products.length} Products in Catalogue <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve (Compact Image Cards with Continuous Scrolling Effect) */}
      <section className="bg-gradient-to-b from-[#002E7D] via-[#002466] to-[#001B4B] py-7 lg:py-9 text-white overflow-hidden">
        <div className="site-container">
          <SectionHeading
            eyebrow="Industries We Serve"
            title={
              <>
                Cooling Solutions Across <span className="text-[#4FC7FF]">Critical Sectors</span>
              </>
            }
            copy="Custom-designed refrigeration systems engineered for precise temperature control and rigorous industrial demands."
            light
          />
        </div>

        {/* Continuous Marquee Scrolling Strip */}
        <div className="relative mt-6 overflow-hidden">
          {/* Left & Right gradient edge fades for smooth blending */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#002E7D] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#001B4B] to-transparent z-10" />

          {/* Scrolling Marquee Track - doubled array for continuous infinite glide */}
          <div className="animate-marquee-scroll flex gap-4 py-2 hover:[animation-play-state:paused]">
            {[...industryCards, ...industryCards].map((item, idx) => {
              const Icon = item.Icon;
              return (
                <div
                  key={`${item.name}-${idx}`}
                  className="group relative flex w-[215px] sm:w-[240px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] p-3 backdrop-blur-md transition-all duration-300 hover:border-[#4FC7FF]/60 hover:bg-white/[0.14] hover:shadow-xl hover:-translate-y-1 active:scale-95 active:border-[#4FC7FF] cursor-pointer"
                >
                  {/* Compact Image Header */}
                  <div className="relative h-24 sm:h-28 w-full overflow-hidden rounded-xl bg-[#001B4B]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-105"
                    />
                    {/* Dark gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001B4B]/80 via-transparent to-black/20" />

                    {/* Small Icon Badge */}
                    <span className="absolute top-2 left-2 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-[#002E7D]/80 backdrop-blur-md text-[#4FC7FF] border border-white/20 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#0AA8F5] group-hover:text-white">
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>

                    {/* Compact Tag Pill */}
                    <span className="absolute bottom-2 right-2 rounded-md bg-[#001B4B]/85 backdrop-blur-sm border border-white/20 px-2 py-0.5 text-[0.6rem] font-semibold text-[#E1EBF5]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Compact Content */}
                  <div className="mt-2.5 flex flex-1 flex-col justify-between">
                    <h3 className="font-display text-xs sm:text-sm font-bold text-white group-hover:text-[#4FC7FF] transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[0.7rem] leading-relaxed text-[#A3C2DE] text-justify line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtle interaction indicator */}
        <div className="site-container mt-3 flex items-center justify-center gap-2 text-[0.7rem] text-[#8CB7DE]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0AA8F5] animate-ping" />
          <span>Continuous scrolling • Hover or tap to pause</span>
        </div>
      </section>

      {/* 7. Why Choose AACS (6 Feature Cards) */}
      <section className="site-container py-6 lg:py-8 overflow-hidden">
        <div className="grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <ScrollReveal direction="left" duration={700}>
            <SectionHeading
              eyebrow="Why Choose AACS"
              title={
                <>
                  A Dependable Partner for <span className="text-[#0AA8F5]">Cold Storage &amp; Refrigeration</span>
                </>
              }
              copy="From site layout planning to commissioning and maintenance, we combine technical rigor with transparent service."
            />

            <div className="mt-4 space-y-2 text-xs sm:text-sm text-[#5C728A]">
              <p>
                Whether you need a specialized 2 Ton cold room for flowers, a multi-tier banana ripening chamber, or a 100 Ton cold storage warehouse, AACS delivers customized systems with genuine components.
              </p>
            </div>

            <Button
              asChild
              size="default"
              className="mt-4 rounded-xl bg-[#0050A7] px-6 py-2.5 font-display text-xs font-semibold text-white shadow-brand hover:bg-[#002E7D] active:scale-95 transition-all duration-200"
            >
              <Link to="/contact">
                Discuss Your Requirement <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </ScrollReveal>

          {/* 6 Feature Cards (Slide from Right with Staggered Delays) */}
          <div className="grid gap-3 sm:grid-cols-2">
            {whyChooseReasons.map((reason, idx) => (
              <ScrollReveal
                key={reason.title}
                direction="right"
                delay={idx * 60}
                duration={500}
              >
                <div className="interactive-card flex flex-col justify-between rounded-xl border border-[#D8E7F5] bg-[#F5F9FC] p-4 shadow-sm hover:bg-white hover:border-[#0AA8F5] hover:shadow-card active:scale-[0.985] active:border-[#0AA8F5] active:bg-white h-full cursor-pointer">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0050A7] text-xs font-bold text-white transition-transform duration-300 group-hover:scale-110">
                        0{idx + 1}
                      </span>
                      <h4 className="font-display text-xs font-bold text-[#002E7D]">
                        {reason.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-[0.72rem] leading-relaxed text-[#5C728A]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <CtaBand />
    </>
  );
}