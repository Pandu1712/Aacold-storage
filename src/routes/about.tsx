import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Target,
  Eye,
  Award,
  Users,
  Wrench,
  Building,
  Sparkles,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, SectionHeading } from "@/components/sections";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AACSLogo } from "@/components/logo";
import {
  companyStory,
  whyChooseReasons,
  images,
  company,
} from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us — AACS AA Cold Storages Bengaluru",
      },
      {
        name: "description",
        content:
          "Learn about AACS — AA Cold Storages, our company story, vision, mission, and industrial refrigeration capabilities.",
      },
      {
        property: "og:title",
        content: "About AACS — Complete Cooling Solutions",
      },
      {
        property: "og:description",
        content:
          "Turnkey cold rooms, ripening chambers, blast freezers, PUF panels and AMC refrigeration services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
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
              About AACS
            </span>
            <h1 className="mt-2.5 w-full max-w-6xl font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[2.85rem] font-extrabold text-white tracking-tight sm:whitespace-nowrap">
              Pioneering Complete Cooling &amp; Cold Storage Solutions
            </h1>
            <p className="mt-2 w-full max-w-5xl text-xs sm:text-sm md:text-base leading-relaxed text-[#D8E7F5]">
              A trusted engineering partner specializing in customized thermal enclosures, industrial refrigeration plants, ripening chambers, and proactive AMC maintenance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Company Story Section */}
      <section className="site-container py-6 lg:py-8 overflow-hidden">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <ScrollReveal direction="left" duration={700}>
            <SectionHeading
              eyebrow="Company Profile"
              title="AACS — AA Cold Storages"
            />

            <div className="mt-3 space-y-2 text-xs sm:text-sm leading-relaxed text-[#5C728A]">
              <p className="text-[#1A2B3C] font-semibold text-sm sm:text-base leading-relaxed">
                AACS provides cold storage, refrigeration and temperature-controlled storage solutions for commercial and industrial applications. Core capabilities include Cold Storage, Refrigeration, Installation, Service and AMC.
              </p>
              <p>
                Our solutions include cold rooms, freezer rooms, walk-in chillers, ripening chambers, blast freezer rooms, specialized storage systems, PUF insulated panels, and clean room panels.
              </p>
              <p>
                We provide complete lifecycle support including precision engineering, turnkey installation, preventive servicing, and comprehensive Annual Maintenance Contracts (AMC).
              </p>
            </div>

            {/* Core Capabilities Badges */}
            <div className="mt-3.5 flex flex-wrap gap-2">
              {["Cold Storage", "Refrigeration", "Installation", "Service", "AMC"].map((cap) => (
                <span
                  key={cap}
                  className="rounded-lg border border-[#D8E7F5] bg-[#F5F9FC] px-3 py-1 font-display text-xs font-bold text-[#0050A7] shadow-sm"
                >
                  {cap}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Button
                asChild
                size="default"
                className="rounded-xl bg-[#0050A7] px-6 py-2.5 font-display text-xs font-semibold text-white shadow-brand hover:bg-[#002E7D]"
              >
                <Link to="/contact">
                  Consult With Our Team <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Visual Collage */}
          <ScrollReveal direction="right" duration={700} className="relative">
            <div className="overflow-hidden rounded-2xl border border-[#D8E7F5] bg-white p-2.5 shadow-card-hover">
              <img
                src={images.industryImage}
                alt="AACS Industrial Facility"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </div>

            {/* Official Logo Brand Card */}
            <div className="mt-4 flex items-center gap-4 rounded-xl border border-[#D8E7F5] bg-[#F5F9FC] p-3.5 shadow-sm">
              <AACSLogo variant="full" size="sm" />
              <div>
                <span className="text-[0.62rem] font-bold uppercase tracking-wider text-[#5C728A]">
                  Registered Brand
                </span>
                <strong className="block font-display text-sm font-bold text-[#002E7D]">
                  AACS — AA Cold Storages
                </strong>
                <p className="mt-0.5 text-[0.7rem] text-[#5C728A]">
                  Complete Cooling Solutions • Bengaluru, Karnataka
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="bg-[#F5F9FC] border-y border-[#D8E7F5] py-6 lg:py-8 overflow-hidden">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Vision Card */}
            <ScrollReveal direction="left" duration={700}>
              <div className="interactive-card group rounded-2xl border border-[#D8E7F5] bg-white p-5 md:p-6 shadow-card h-full cursor-pointer">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0050A7] to-[#0AA8F5] text-white shadow-brand transition-transform duration-300 group-hover:scale-110 group-active:scale-105">
                  <Eye className="h-5 w-5" />
                </span>

                <h2 className="mt-3 font-display text-lg sm:text-xl font-bold text-[#002E7D] transition-colors duration-300 group-hover:text-[#0AA8F5]">
                  Our Vision
                </h2>

                <blockquote className="mt-3 border-l-4 border-[#0AA8F5] pl-3.5 font-display text-xs sm:text-sm font-semibold leading-relaxed text-[#002E7D] italic">
                  "{companyStory.vision}"
                </blockquote>

                <p className="mt-2.5 text-xs leading-relaxed text-[#5C728A]">
                  We envision setting the benchmark in commercial refrigeration across India through engineering precision, energy conservation, and round-the-clock client support.
                </p>
              </div>
            </ScrollReveal>

            {/* Mission Card (Checklist) */}
            <ScrollReveal direction="right" duration={700}>
              <div className="interactive-card group rounded-2xl border border-[#D8E7F5] bg-white p-5 md:p-6 shadow-card h-full cursor-pointer">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#002E7D] to-[#0050A7] text-white shadow-brand transition-transform duration-300 group-hover:scale-110 group-active:scale-105">
                  <Target className="h-5 w-5" />
                </span>

                <h2 className="mt-3 font-display text-lg sm:text-xl font-bold text-[#002E7D] transition-colors duration-300 group-hover:text-[#0AA8F5]">
                  Our Mission
                </h2>

                <ul className="mt-3 space-y-2 text-xs font-medium text-[#1A2B3C]">
                  {companyStory.missionPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0AA8F5]" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Why Businesses Choose AACS */}
      <section className="site-container py-6 lg:py-8 overflow-hidden">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Businesses Rely on AACS"
          copy="Our client engagements are built on deep engineering competency and long-term service contracts."
          center
        />

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseReasons.map((reason, idx) => (
            <ScrollReveal
              key={reason.title}
              direction="up"
              delay={idx * 60}
              duration={500}
            >
              <div className="interactive-card group flex flex-col justify-between rounded-2xl border border-[#D8E7F5] bg-white p-5 shadow-card h-full cursor-pointer">
                <div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5F9FC] border border-[#D8E7F5] text-xs font-bold text-[#0050A7] transition-transform duration-300 group-hover:scale-110">
                    0{idx + 1}
                  </span>

                  <h3 className="mt-3 font-display text-base font-bold text-[#002E7D] transition-colors duration-300 group-hover:text-[#0AA8F5]">
                    {reason.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-[#5C728A]">
                    {reason.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. Global CTA Band */}
      <CtaBand />
    </>
  );
}
