import { createFileRoute, useSearch } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useState, useEffect, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/sections";
import { ScrollReveal } from "@/components/scroll-reveal";
import { company, products } from "@/lib/site-data";
import { WhatsAppBrandIcon } from "@/components/whatsapp-icon";

const enquiryOptions = [
  ...products.map((p) => p.name),
  "PUF Panel Installation (₹250/sq.ft)",
  "PUF Panel Uninstallation (₹300/sq.ft)",
  "Refrigeration AMC Package",
  "Cold Storage Repair & Gas Charging",
  "Split AC Installation & Servicing",
  "Custom Cold Room Engineering / Other Application",
];

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { item?: string } => {
    const item = search["item"];
    return {
      ...(typeof item === "string" ? { item } : {}),
    };
  },
  head: () => ({
    meta: [
      {
        title: "Contact AACS — Request a Quote | AA Cold Storages Bengaluru",
      },
      {
        name: "description",
        content:
          "Contact AA Cold Storages in Bengaluru for customized cold room price estimates, site visit requests, PUF panels, and AMC support. Call +91 8073946255.",
      },
      {
        property: "og:title",
        content: "Contact AACS — Cold Storage Quotations",
      },
      {
        property: "og:description",
        content:
          "Request instant refrigeration quotes, site dimension planning, and consultation with AACS engineers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const search = useSearch({ from: "/contact" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Bengaluru",
    productApplication: search?.item ?? enquiryOptions[0],
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Scroll to the quote form if requested via hash, query item, or on mobile
    const scrollToForm = () => {
      const el = document.getElementById("quote-form-section") || document.getElementById("contact-quote-form");
      if (el) {
        const isMobile = window.innerWidth < 1024;
        const hasQuoteIntent = window.location.hash.includes("quote") || Boolean(search?.item);
        if (hasQuoteIntent || (isMobile && window.location.hash === "#quote-form")) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    const timer = setTimeout(scrollToForm, 180);
    return () => clearTimeout(timer);
  }, [search]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppQuote = () => {
    const text =
      `*New AACS Technical Quote Request*\n\n` +
      `*Name:* ${formData.name || "Not specified"}\n` +
      `*Phone:* ${formData.phone || "Not specified"}\n` +
      `*Location:* ${formData.location || "Bengaluru"}\n` +
      `*Product/Application:* ${formData.productApplication}`;

    const url = `https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* 1. Page Hero Banner */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-gradient-brand opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,168,245,0.3),transparent_65%)]" />

        <div className="site-container relative py-8 lg:py-10">
          <ScrollReveal direction="down" duration={600}>
            <span className="eyebrow-light">
              <Sparkles className="h-3.5 w-3.5 text-[#4FC7FF]" />
              Direct Consultation &amp; Quotes
            </span>
            <h1 className="mt-2.5 w-full max-w-6xl font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[2.85rem] font-extrabold text-white tracking-tight sm:whitespace-nowrap">
              Contact AACS — Request a Quote
            </h1>
            <p className="mt-3 w-full max-w-5xl text-sm leading-relaxed text-[#D8E7F5] md:text-base">
              Share your product or application requirements and site location. Our engineers will prepare a detailed commercial and technical quotation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Split Layout: Details & Request Form */}
      <section className="site-container py-6 lg:py-8 overflow-hidden">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Speak With Our Refrigeration Specialists"
          copy="We respond promptly to commercial inquiries and emergency maintenance requests."
          center
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] min-w-0 items-stretch">
          {/* Left: Contact Information Cards (Slide from Left) */}
          <ScrollReveal direction="left" duration={700} className="w-full min-w-0 flex flex-col justify-between">
            {/* Contact Detail Cards */}
            <div className="space-y-3 w-full min-w-0 flex-1 flex flex-col justify-between">
              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-[#D8E7F5] bg-white p-4 sm:p-5 shadow-card w-full min-w-0">
                <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0050A7] to-[#0AA8F5] text-white shadow-brand">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-sm sm:text-base font-bold text-[#002E7D]">
                    Direct Phone &amp; WhatsApp
                  </h3>
                  <a
                    href={`tel:+91${company.phone}`}
                    className="mt-1 block font-display text-base sm:text-lg font-extrabold text-[#0050A7] hover:text-[#0AA8F5]"
                  >
                    +91 {company.phone}
                  </a>
                  <span className="text-xs text-[#5C728A] block break-words">
                    Available for phone consultations &amp; WhatsApp drawings
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-[#D8E7F5] bg-white p-4 sm:p-5 shadow-card w-full min-w-0">
                <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#002E7D] to-[#0050A7] text-white shadow-brand">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-sm sm:text-base font-bold text-[#002E7D]">
                    Official Email
                  </h3>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block font-medium text-[#0050A7] hover:underline text-xs sm:text-sm break-all"
                  >
                    {company.email}
                  </a>
                  <span className="text-xs text-[#5C728A] block break-words">
                    Send RFQs, blueprints, and tender documentation
                  </span>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-[#D8E7F5] bg-white p-4 sm:p-5 shadow-card w-full min-w-0">
                <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0050A7] to-[#0AA8F5] text-white shadow-brand">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-sm sm:text-base font-bold text-[#002E7D]">
                    Registered Office Address
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#1A2B3C] break-words">
                    {company.address}
                  </p>
                </div>
              </div>

              {/* Business Hours & GSTIN */}
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 w-full min-w-0">
                <div className="rounded-2xl border border-[#D8E7F5] bg-[#F5F9FC] p-4 sm:p-5 min-w-0">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0050A7]">
                    <Clock className="h-4 w-4 shrink-0" /> Business Hours
                  </div>
                  <strong className="mt-1.5 block font-display text-xs font-bold text-[#002E7D] break-words">
                    {company.businessHours}
                  </strong>
                </div>

                <div className="rounded-2xl border border-[#D8E7F5] bg-[#F5F9FC] p-4 sm:p-5 min-w-0">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0050A7]">
                    <ShieldCheck className="h-4 w-4 shrink-0" /> GSTIN Verified
                  </div>
                  <strong className="mt-1.5 block font-display text-xs font-bold text-[#002E7D] break-all">
                    {company.gstin}
                  </strong>
                </div>
              </div>

              {/* Action Buttons in Left Space */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full min-w-0">
                <Button
                  type="submit"
                  form="contact-quote-form"
                  size="lg"
                  className="flex-1 rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-5 py-3.5 font-display text-xs sm:text-sm font-bold text-white shadow-brand hover:opacity-95 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <Send className="mr-2 h-4 w-4" /> Request Technical Quote
                </Button>

                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={handleWhatsAppQuote}
                  className="flex-1 rounded-xl border border-[#D8E7F5] bg-[#F5F9FC] px-5 py-3.5 font-display text-xs sm:text-sm font-bold text-[#008938] hover:bg-white active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <WhatsAppBrandIcon className="mr-2 h-4 w-4" /> Send via WhatsApp
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Request Quote Form (Slide from Right) */}
          <ScrollReveal direction="right" duration={700} className="w-full min-w-0 flex flex-col justify-between">
            <div id="quote-form-section" className="scroll-mt-24 rounded-2xl sm:rounded-3xl border border-[#D8E7F5] bg-white p-5 sm:p-7 shadow-card-hover w-full min-w-0 h-full flex flex-col justify-between">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#002E7D]">
                  Request Technical Quote
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5C728A]">
                  Enter your contact details and storage requirements below for a customized quotation.
                </p>
              </div>

              {submitted ? (
                <div className="my-auto rounded-2xl border border-[#00B7FF]/30 bg-[#F5F9FC] p-6 text-center animate-fade-up">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[#008938]" />
                  <h3 className="mt-3 font-display text-lg font-bold text-[#002E7D]">
                    Thank You! Quotation Request Received
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C728A]">
                    Our refrigeration engineering team has received your request. We will contact you at <strong>{formData.phone}</strong> with a detailed technical quote within 4 business hours.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", location: "Bengaluru", productApplication: enquiryOptions[0] });
                    }}
                    variant="outline"
                    className="mt-5 rounded-xl border-[#D8E7F5] text-xs font-semibold text-[#0050A7]"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form id="contact-quote-form" onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="mt-2 h-12 rounded-xl border-[#D8E7F5] text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="10-digit phone / mobile number"
                      className="mt-2 h-12 rounded-xl border-[#D8E7F5] text-sm"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="City / Area (e.g. Bengaluru, Karnataka)"
                      className="mt-2 h-12 rounded-xl border-[#D8E7F5] text-sm"
                    />
                  </div>

                  {/* Product/Application */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                      Product / Application <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.productApplication}
                      onChange={(e) =>
                        setFormData({ ...formData, productApplication: e.target.value })
                      }
                      className="mt-2 w-full h-12 rounded-xl border border-[#D8E7F5] bg-white px-4 text-xs sm:text-sm font-semibold text-[#002E7D] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0AA8F5]"
                    >
                      {enquiryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Form Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] py-3.5 font-display text-sm font-bold text-white shadow-brand hover:opacity-95 active:scale-[0.99] transition-all duration-200 cursor-pointer"
                    >
                      <Send className="mr-2 h-4 w-4" /> Request Technical Quote
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

    </>
  );
}
