import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Settings,
  Sparkles,
  Wrench,
  ShieldCheck,
  Clock,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, SectionHeading } from "@/components/sections";
import { ScrollReveal } from "@/components/scroll-reveal";
import { services, company } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Cold Storage & HVAC Services — AACS AA Cold Storages Bengaluru",
      },
      {
        name: "description",
        content:
          "Professional cold storage servicing, PUF panel installation (₹250/sq.ft), uninstallation (₹300/sq.ft), AMC contracts and Split AC services by AACS.",
      },
      {
        property: "og:title",
        content: "Refrigeration & HVAC Maintenance Services — AACS",
      },
      {
        property: "og:description",
        content:
          "Reliable cold room maintenance, PUF panel assembly, leak checks, and customized AMC packages in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
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
              AACS Engineering Services
            </span>
            <h1 className="mt-2.5 w-full max-w-6xl font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[2.85rem] font-extrabold text-white tracking-tight sm:whitespace-nowrap">
              Comprehensive Installation, Servicing &amp; AMC
            </h1>
            <p className="mt-2 w-full max-w-5xl text-xs sm:text-sm md:text-base leading-relaxed text-[#D8E7F5] md:whitespace-nowrap">
              Ensure maximum refrigeration uptime, energy efficiency, and extended machinery life with certified technicians.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Service Cards Grid */}
      <section className="site-container py-6 lg:py-8">
        <SectionHeading
          eyebrow="Our Service Offerings"
          title="Field-Tested Refrigeration &amp; HVAC Expertise"
          copy="Transparent pricing, prompt on-site diagnostics, and genuine replacement parts across Bengaluru."
          center
        />

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const directions: ("left" | "up" | "right")[] = ["left", "up", "right"];
            const dir = directions[idx % 3];
            return (
              <ScrollReveal
                key={service.id}
                direction={dir}
                delay={(idx % 3) * 80}
                duration={650}
              >
              <article className="interactive-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D8E7F5] bg-white p-5 shadow-card h-full cursor-pointer">
                <div>
                  {/* Header Badge */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0050A7] to-[#0AA8F5] text-white shadow-brand transition-transform duration-300 group-hover:scale-110 group-active:scale-105">
                      <Wrench className="h-5 w-5" />
                    </span>
                    <div className="text-right">
                      <span className="block text-[0.62rem] font-bold uppercase tracking-wider text-[#5C728A]">
                        Standard Rate
                      </span>
                      <strong className="mt-0.5 block font-display text-xs sm:text-sm font-bold text-[#002E7D]">
                        {service.price}
                      </strong>
                    </div>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold text-[#002E7D] transition-colors duration-300 group-hover:text-[#0AA8F5]">
                    {service.name}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-[#5C728A]">
                    {service.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="mt-3.5 border-t border-[#D8E7F5] pt-3">
                    <h4 className="font-display text-[0.68rem] font-bold uppercase tracking-wider text-[#0050A7]">
                      Key Advantages
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-xs text-[#1A2B3C]">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0AA8F5]" />
                          <span className="leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scope of Work */}
                  <div className="mt-3.5 border-t border-[#D8E7F5] pt-3">
                    <h4 className="font-display text-[0.68rem] font-bold uppercase tracking-wider text-[#5C728A]">
                      Scope of Work
                    </h4>
                    <ul className="mt-2 space-y-1 text-xs text-[#5C728A]">
                      {service.scope.map((s) => (
                        <li key={s} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0050A7]" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 pt-1">
                  <Button
                    asChild
                    size="sm"
                    className="w-full rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] py-2.5 text-xs font-bold text-white shadow-brand hover:opacity-95 active:scale-95 transition-all duration-200"
                  >
                    <Link to="/contact">
                      GET IN TOUCH <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
        </div>

        {/* Emergency Service Strip */}
        <ScrollReveal direction="zoom" duration={700} className="mt-6">
          <div className="rounded-2xl border border-[#D8E7F5] bg-[#F5F9FC] p-5 md:p-6">
            <div className="grid items-center gap-4 lg:grid-cols-[1.3fr_auto]">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#002E7D] text-white">
                  <Clock className="h-5 w-5 text-[#4FC7FF]" />
                </span>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#002E7D]">
                    Need Emergency Cold Room Repair or Gas Leak Inspection?
                  </h3>
                  <p className="mt-1 text-xs text-[#5C728A]">
                    Our mobile service team operates across Bengaluru for quick breakdown diagnosis, temperature recovery, and compressor troubleshooting.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <Button
                  asChild
                  size="default"
                  className="rounded-xl bg-[#002E7D] px-5 py-2 font-display text-xs font-semibold text-white shadow-brand hover:bg-[#0050A7]"
                >
                  <a href={`tel:+91${company.phone}`}>
                    <Phone className="mr-1.5 h-4 w-4 text-[#4FC7FF]" /> Call Hotline: +91 {company.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. Global CTA Band */}
      <CtaBand />
    </>
  );
}
