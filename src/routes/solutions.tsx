import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
  ThermometerSnowflake,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, SectionHeading } from "@/components/sections";
import { ScrollReveal } from "@/components/scroll-reveal";
import { solutionSectors, company } from "@/lib/site-data";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      {
        title: "Cold Chain & Refrigeration Solutions — AACS AA Cold Storages",
      },
      {
        name: "description",
        content:
          "Explore specialized cold storage solutions for Food & Agriculture, Frozen Foods, Pharmaceuticals, and Commercial Warehouses from AACS.",
      },
      {
        property: "og:title",
        content: "Industry Cold Chain Solutions — AACS",
      },
      {
        property: "og:description",
        content:
          "Turnkey temperature-controlled engineering for agriculture, seafood, meat, vaccines, and central distribution centers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      {/* 1. Page Hero Banner */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-gradient-brand opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,168,245,0.3),transparent_65%)]" />

        <div className="site-container relative py-8 lg:py-10">
          <ScrollReveal direction="down" duration={600}>
            <span className="eyebrow-light">
              <Sparkles className="h-3 w-3 text-[#4FC7FF]" />
              Turnkey Industry Solutions
            </span>
            <h1 className="mt-2.5 w-full max-w-6xl font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[2.85rem] font-extrabold text-white tracking-tight sm:whitespace-nowrap">
              Tailored Cooling for Critical Industries
            </h1>
            <p className="mt-2 w-full max-w-5xl text-xs sm:text-sm md:text-base leading-relaxed text-[#D8E7F5]">
              From precision post-harvest fruit ripening to -40°C blast freezing and sterile cleanrooms, AACS delivers customized thermal systems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Industry Solutions Sections */}
      <section className="site-container py-6 lg:py-8 overflow-hidden">
        <div className="space-y-8 lg:space-y-10">
          {solutionSectors.map((sector, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={sector.id}
                id={sector.id}
                className={`grid items-center gap-6 lg:grid-cols-2 ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Sector Image Banner */}
                <ScrollReveal
                  direction={isReversed ? "right" : "left"}
                  duration={700}
                  className={`group relative overflow-hidden rounded-2xl border border-[#D8E7F5] bg-[#F5F9FC] shadow-card-hover transition-all duration-300 active:scale-[0.985] cursor-pointer ${
                    isReversed ? "lg:col-start-2" : ""
                  }`}
                >
                  <img
                    src={sector.image}
                    alt={sector.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-active:scale-105"
                  />
                  <div className="absolute left-4 bottom-4 rounded-xl border border-white/20 bg-[#002E7D]/90 p-3 text-white backdrop-blur shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <span className="block text-[0.62rem] font-bold uppercase tracking-wider text-[#4FC7FF]">
                      Operating Temperature
                    </span>
                    <strong className="mt-0.5 block font-display text-xs sm:text-sm font-bold">
                      {sector.temperature}
                    </strong>
                  </div>
                </ScrollReveal>

                {/* Sector Content */}
                <ScrollReveal
                  direction={isReversed ? "left" : "right"}
                  duration={700}
                  className={isReversed ? "lg:col-start-1" : ""}
                >
                  <span className="eyebrow">{sector.title}</span>
                  <h2 className="mt-2 font-display text-xl font-extrabold text-[#002E7D] sm:text-2xl lg:text-3xl">
                    {sector.subtitle}
                  </h2>

                  <p className="section-copy mt-2 text-xs sm:text-sm">
                    {sector.description}
                  </p>

                  {/* Stored Commodities / Items */}
                  <div className="mt-3.5">
                    <h3 className="font-display text-[0.68rem] font-bold uppercase tracking-wider text-[#0050A7]">
                      Covered Commodities &amp; Applications:
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {sector.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#D8E7F5] bg-white px-3 py-1 font-display text-xs font-semibold text-[#1A2B3C] shadow-sm transition-all duration-200 hover:border-[#0AA8F5] hover:text-[#0050A7] active:scale-95"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <ul className="mt-3.5 space-y-1.5 border-t border-[#D8E7F5] pt-3 text-xs text-[#1A2B3C]">
                    {sector.keyHighlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0AA8F5]" />
                        <span className="leading-snug font-medium">{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Consultation CTA */}
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <Button
                      asChild
                      size="default"
                      className="rounded-xl bg-[#0050A7] px-5 py-2 font-display text-xs font-semibold text-white shadow-brand hover:bg-[#002E7D] active:scale-95 transition-all duration-200"
                    >
                      <Link to="/contact" hash="quote-form">
                        Request Solution Blueprint <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="default"
                      variant="outline"
                      className="rounded-xl border-[#D8E7F5] bg-[#F5F9FC] px-5 py-3 font-display text-xs font-semibold text-[#002E7D] hover:bg-white active:scale-95 transition-all duration-200"
                    >
                      <a href={`tel:+91${company.phone}`}>
                        <Phone className="mr-1.5 h-3.5 w-3.5 text-[#0AA8F5]" /> Speak to Engineer
                      </a>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Global CTA Band */}
      <CtaBand />
    </>
  );
}
