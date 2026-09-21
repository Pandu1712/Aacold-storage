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

      {/* 3. MAIN FEATURED PRODUCTS WITH EXACT PRICES ON HOME PAGE */}
      <section className="site-container py-6 lg:py-8" id="featured-products">
        <SectionHeading
          eyebrow="Main Products &amp; Transparent Pricing"
          title="Engineered Cold Storage &amp; Refrigeration Systems"
          copy="Select any main product below to view full specifications, applications, and custom dimension options."
          center
        />

        {/* Featured Product Cards Grid with Direct Links */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Link to Full Catalogue */}
        <div className="mt-5 text-center">
          <Button
            asChild
            size="default"
            className="rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-7 py-2.5 font-display text-xs font-bold text-white shadow-brand hover:opacity-95"
          >
            <Link to="/products">
              Explore All {products.length} Products in Catalogue <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 4. About AACS Preview Section */}
      <section className="bg-[#F5F9FC] border-y border-[#D8E7F5] py-6 lg:py-8 overflow-hidden">
        <div className="site-container grid items-center gap-6 lg:grid-cols-2">
          {/* Left Facility Image (Slide from Left) */}
          <ScrollReveal direction="left" duration={700} className="relative">
            <img
              src={images.installationImage}
              alt="AACS Cold Storage Engineering & Installation"
              loading="lazy"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl border border-[#D8E7F5]"
            />
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 -right-4 rounded-xl border border-[#D8E7F5] bg-white p-3.5 shadow-lg hidden sm:flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0050A7] text-white">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <strong className="block font-display text-xs font-bold text-[#002E7D]">
                  Turnkey Cold Chain
                </strong>
                <span className="text-[0.68rem] text-[#5C728A]">Supply • Install • AMC</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Content (Slide from Right) */}
          <ScrollReveal direction="right" duration={700}>
            <SectionHeading
              eyebrow="About AACS"
              title="Design. Supply. Installation. Maintenance."
            />

            <p className="section-copy mt-3 text-xs sm:text-sm">
              AACS provides comprehensive cold storage and refrigeration
              solutions for commercial and industrial applications.
            </p>

            <p className="section-copy mt-2 text-xs sm:text-sm">
              We specialize in design, supply, installation, servicing and
              maintenance of temperature-controlled storage systems tailored to
              customer requirements.
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <div className="flex items-center gap-2.5 rounded-lg bg-white p-2.5 border border-[#D8E7F5]">
                <CheckCircle2 className="h-4 w-4 text-[#0AA8F5] shrink-0" />
                <span className="text-xs font-semibold text-[#002E7D]">Custom Sizing & Specs</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg bg-white p-2.5 border border-[#D8E7F5]">
                <CheckCircle2 className="h-4 w-4 text-[#0AA8F5] shrink-0" />
                <span className="text-xs font-semibold text-[#002E7D]">Energy Efficient Compressors</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg bg-white p-2.5 border border-[#D8E7F5]">
                <CheckCircle2 className="h-4 w-4 text-[#0AA8F5] shrink-0" />
                <span className="text-xs font-semibold text-[#002E7D]">Airtight PUF Cam-Lock</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg bg-white p-2.5 border border-[#D8E7F5]">
                <CheckCircle2 className="h-4 w-4 text-[#0AA8F5] shrink-0" />
                <span className="text-xs font-semibold text-[#002E7D]">Proactive AMC Contracts</span>
              </div>
            </div>

            <Button
              asChild
              size="default"
              className="mt-4 rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-6 py-2.5 font-display text-xs font-semibold text-white shadow-brand hover:opacity-95"
            >
              <Link to="/about">
                Learn More <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Our Services Preview */}
      <section className="site-container py-6 lg:py-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Professional Lifecycle Support & Maintenance"
          copy="From precision panel installation to emergency troubleshooting and AMC, AACS ensures zero downtime."
          center
        />

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D8E7F5] bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#0AA8F5] hover:shadow-card-hover"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0050A7] to-[#0AA8F5] text-white shadow-sm">
                    <Settings className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-[#F5F9FC] border border-[#D8E7F5] px-3 py-0.5 text-xs font-bold text-[#0050A7]">
                    {service.price}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-base sm:text-lg font-bold text-[#002E7D]">
                  {service.name}
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-[#5C728A]">
                  {service.description}
                </p>

                <ul className="mt-3 space-y-1.5 border-t border-[#D8E7F5] pt-3 text-xs text-[#1A2B3C]">
                  {service.benefits.slice(0, 2).map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0AA8F5] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-1">
                <Button
                  asChild
                  size="sm"
                  className="w-full rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] text-xs font-bold text-white shadow-brand hover:opacity-95"
                >
                  <Link to="/contact">GET IN TOUCH</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 text-center">
          <Button
            asChild
            size="default"
            variant="outline"
            className="rounded-xl border-[#D8E7F5] px-6 py-2.5 font-display text-xs font-semibold text-[#002E7D] hover:border-[#0AA8F5] hover:bg-[#F5F9FC]"
          >
            <Link to="/services">
              View All Services &amp; Pricing <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 6. Industries We Serve (Compact Image Cards with Continuous Scrolling Effect) */}
      <section className="bg-gradient-to-b from-[#002E7D] via-[#002466] to-[#001B4B] py-7 lg:py-9 text-white overflow-hidden">
        <div className="site-container">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Cooling Solutions Across Critical Sectors"
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
                  className="group relative flex w-[215px] sm:w-[240px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] p-3 backdrop-blur-md transition-all duration-300 hover:border-[#4FC7FF]/60 hover:bg-white/[0.14] hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Compact Image Header */}
                  <div className="relative h-24 sm:h-28 w-full overflow-hidden rounded-xl bg-[#001B4B]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
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
          <span>Continuous scrolling • Hover over any card to pause</span>
        </div>
      </section>

      {/* 7. Why Choose AACS (6 Feature Cards) */}
      <section className="site-container py-6 lg:py-8 overflow-hidden">
        <div className="grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <ScrollReveal direction="left" duration={700}>
            <SectionHeading
              eyebrow="Why Choose AACS"
              title="A Dependable Partner for Cold Storage & Refrigeration"
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
              className="mt-4 rounded-xl bg-[#0050A7] px-6 py-2.5 font-display text-xs font-semibold text-white shadow-brand hover:bg-[#002E7D]"
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
                <div className="flex flex-col justify-between rounded-xl border border-[#D8E7F5] bg-[#F5F9FC] p-4 shadow-sm transition hover:bg-white hover:border-[#0AA8F5] hover:shadow-card h-full">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0050A7] text-xs font-bold text-white">
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