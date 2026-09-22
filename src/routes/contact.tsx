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
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CtaBand, SectionHeading } from "@/components/sections";
import { ScrollReveal } from "@/components/scroll-reveal";
import { company, products } from "@/lib/site-data";
import { WhatsAppBrandIcon } from "@/components/whatsapp-icon";

const enquiryOptions = [
  "General Inquiry",
  ...products.map((p) => p.name),
  "PUF Panel Installation (₹250/sq.ft)",
  "Refrigeration AMC Package",
  "Custom Cold Room Engineering",
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
    mobile: "",
    email: "",
    companyName: "",
    item: search?.item ?? enquiryOptions[0],
    temperature: "",
    capacity: "",
    dimensions: "",
    location: "Bengaluru",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert("Please enter your name and mobile number.");
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppQuote = () => {
    const text = `*New AACS Quote Request*\n\n` +
      `*Name:* ${formData.name || "Not specified"}\n` +
      `*Mobile:* ${formData.mobile || "Not specified"}\n` +
      `*Email:* ${formData.email || "Not specified"}\n` +
      `*Company:* ${formData.companyName || "Not specified"}\n` +
      `*Product/Service:* ${formData.item}\n` +
      `*Target Temperature:* ${formData.temperature || "To be discussed"}\n` +
      `*Capacity:* ${formData.capacity || "To be discussed"}\n` +
      `*Dimensions:* ${formData.dimensions || "To be discussed"}\n` +
      `*Location:* ${formData.location || "Bengaluru"}\n` +
      `*Message:* ${formData.message || "Please provide quotation."}`;

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
              Share your storage capacity, product category, and site location. Our engineers will prepare a detailed commercial and technical quotation.
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

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: Contact Information Cards (Slide from Left) */}
          <ScrollReveal direction="left" duration={700}>
            {/* Contact Detail Cards */}
            <div className="space-y-3">
              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4 rounded-3xl border border-[#D8E7F5] bg-white p-5 shadow-card">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0050A7] to-[#0AA8F5] text-white shadow-brand">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-[#002E7D]">
                    Direct Phone &amp; WhatsApp
                  </h3>
                  <a
                    href={`tel:+91${company.phone}`}
                    className="mt-1 block font-display text-lg font-extrabold text-[#0050A7] hover:text-[#0AA8F5]"
                  >
                    +91 {company.phone}
                  </a>
                  <span className="text-xs text-[#5C728A]">
                    Available for phone consultations &amp; WhatsApp drawings
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 rounded-3xl border border-[#D8E7F5] bg-white p-6 shadow-card">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#002E7D] to-[#0050A7] text-white shadow-brand">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-[#002E7D]">
                    Official Email
                  </h3>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block font-medium text-[#0050A7] hover:underline text-sm"
                  >
                    {company.email}
                  </a>
                  <span className="text-xs text-[#5C728A]">
                    Send RFQs, blueprints, and tender documentation
                  </span>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4 rounded-3xl border border-[#D8E7F5] bg-white p-6 shadow-card">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0050A7] to-[#0AA8F5] text-white shadow-brand">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-[#002E7D]">
                    Registered Office Address
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#1A2B3C]">
                    {company.address}
                  </p>
                </div>
              </div>

              {/* Business Hours & GSTIN */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#D8E7F5] bg-[#F5F9FC] p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0050A7]">
                    <Clock className="h-4 w-4" /> Business Hours
                  </div>
                  <strong className="mt-1.5 block font-display text-xs font-bold text-[#002E7D]">
                    {company.businessHours}
                  </strong>
                </div>

                <div className="rounded-2xl border border-[#D8E7F5] bg-[#F5F9FC] p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0050A7]">
                    <ShieldCheck className="h-4 w-4" /> GSTIN Verified
                  </div>
                  <strong className="mt-1.5 block font-display text-xs font-bold text-[#002E7D]">
                    {company.gstin}
                  </strong>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Request Quote Form (Slide from Right) */}
          <ScrollReveal direction="right" duration={700}>
            <div className="rounded-3xl border border-[#D8E7F5] bg-white p-6 md:p-7 shadow-card-hover">
              <h2 className="font-display text-xl font-bold text-[#002E7D]">
                Request a Customized Quotation
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-[#5C728A]">
                Fill out the specifications below or send directly via WhatsApp.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-2xl border border-[#00B7FF]/30 bg-[#F5F9FC] p-6 text-center animate-fade-up">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[#008938]" />
                  <h3 className="mt-3 font-display text-lg font-bold text-[#002E7D]">
                    Thank You! Quotation Request Received
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5C728A]">
                    Our refrigeration team has logged your specifications. An engineer will review your project parameters and contact you at <strong>{formData.mobile}</strong> within 4 business hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-5 rounded-xl border-[#D8E7F5] text-xs font-semibold text-[#0050A7]"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
                  {/* Name & Mobile Number */}
                  <div className="grid gap-5 sm:grid-cols-2">
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
                        className="mt-2 h-12 rounded-xl border-[#D8E7F5]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        required
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                        placeholder="10-digit mobile number"
                        className="mt-2 h-12 rounded-xl border-[#D8E7F5]"
                      />
                    </div>
                  </div>

                  {/* Email & Company Name */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        className="mt-2 h-12 rounded-xl border-[#D8E7F5]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                        Company Name
                      </label>
                      <Input
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyName: e.target.value,
                          })
                        }
                        placeholder="Your organization / firm name"
                        className="mt-2 h-12 rounded-xl border-[#D8E7F5]"
                      />
                    </div>
                  </div>

                  {/* Product / Service */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                      Product / Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.item}
                      onChange={(e) =>
                        setFormData({ ...formData, item: e.target.value })
                      }
                      className="mt-2 w-full h-12 rounded-xl border border-[#D8E7F5] bg-white px-4 text-xs font-semibold text-[#002E7D] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0AA8F5]"
                    >
                      {enquiryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Required Temperature, Required Capacity, Approximate Dimensions */}
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#1A2B3C]">
                        Required Temperature
                      </label>
                      <Input
                        value={formData.temperature}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            temperature: e.target.value,
                          })
                        }
                        placeholder="e.g. 2°C to 8°C / -18°C"
                        className="mt-1.5 h-11 rounded-xl border-[#D8E7F5] text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#1A2B3C]">
                        Required Capacity
                      </label>
                      <Input
                        value={formData.capacity}
                        onChange={(e) =>
                          setFormData({ ...formData, capacity: e.target.value })
                        }
                        placeholder="e.g. 2 Ton / 5 Ton"
                        className="mt-1.5 h-11 rounded-xl border-[#D8E7F5] text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#1A2B3C]">
                        Approximate Dimensions
                      </label>
                      <Input
                        value={formData.dimensions}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            dimensions: e.target.value,
                          })
                        }
                        placeholder="e.g. 10 × 10 × 8 ft"
                        className="mt-1.5 h-11 rounded-xl border-[#D8E7F5] text-xs"
                      />
                    </div>
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
                      className="mt-2 h-12 rounded-xl border-[#D8E7F5]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                      Message
                    </label>
                    <Textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Provide additional details regarding commodity, door type, civil foundation, or required timeline..."
                      className="mt-2 rounded-xl border-[#D8E7F5] text-xs"
                    />
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="flex flex-wrap items-center justify-start gap-3 pt-3">
                    <Button
                      type="submit"
                      size="lg"
                      className="rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-6 font-display text-xs font-bold text-white shadow-brand hover:opacity-95 active:scale-95 transition-all duration-200"
                    >
                      <Send className="mr-2 h-4 w-4" /> Submit Quote Request
                    </Button>

                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      onClick={handleWhatsAppQuote}
                      className="rounded-xl border-[#D8E7F5] bg-[#F5F9FC] px-6 font-display text-xs font-bold text-[#008938] hover:bg-white active:scale-95 transition-all duration-200"
                    >
                      <WhatsAppBrandIcon className="mr-2 h-4 w-4" /> Send via WhatsApp
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Global CTA Band */}
      <CtaBand />
    </>
  );
}
