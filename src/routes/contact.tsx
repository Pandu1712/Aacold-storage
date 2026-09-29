import { createFileRoute, useSearch } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { useState, useEffect, type FormEvent } from "react";
import { toast } from "sonner";
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

import { generateBreadcrumbs, siteUrl } from "@/lib/seo-schemas";

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
        title: "Contact AA Cold Storages Bengaluru — Request Technical Quotation (+91 8073946255)",
      },
      {
        name: "description",
        content:
          "Contact AA Cold Storages (AACS) in Bengaluru for customized cold room price estimates, site visits, PUF panels (₹250/sq.ft), blast freezers, and AMC contracts. Direct Phone & WhatsApp: +91 8073946255, Email: info@aacoldstorages.in.",
      },
      {
        name: "keywords",
        content:
          "contact AA Cold Storages, cold room quote Bengaluru, cold storage phone number, AACS WhatsApp, refrigeration estimate Karnataka, PUF panel quotation",
      },
      {
        property: "og:title",
        content: "Contact AA Cold Storages Bengaluru — Request Technical Quotation",
      },
      {
        property: "og:description",
        content:
          "Request instant refrigeration quotes, site dimension planning, and direct consultation with AACS engineers on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/contact` },
      { property: "og:image", content: `${siteUrl}/MainLogo.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact AA Cold Storages Bengaluru" },
      { name: "twitter:description", content: "Instant technical quotes & consultation with chief refrigeration engineers." },
      { name: "twitter:image", content: `${siteUrl}/MainLogo.png` },
    ],
    links: [
      { rel: "canonical", href: `${siteUrl}/contact` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Contact & Quotations", path: "/contact" },
          ])
        ),
      },
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

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    location?: string;
  }>({});

  const [touched, setTouched] = useState<{
    name?: boolean;
    phone?: boolean;
    location?: boolean;
  }>({});

  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<typeof formData | null>(null);

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

  // Validation logic
  const validateField = (field: "name" | "phone" | "location", value: string) => {
    let error = "";
    if (field === "name") {
      if (!value.trim()) {
        error = "Full name is required";
      } else if (value.trim().length < 2) {
        error = "Name must be at least 2 characters";
      }
    } else if (field === "phone") {
      const cleanPhone = value.replace(/\D/g, "");
      if (!cleanPhone) {
        error = "10-digit mobile number is required";
      } else if (cleanPhone.length < 10) {
        error = `Please enter all 10 digits (${cleanPhone.length}/10 entered)`;
      } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        error = "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9";
      }
    } else if (field === "location") {
      if (!value.trim()) {
        error = "Site location / city is required";
      }
    }
    return error;
  };

  const validateAll = (data = formData) => {
    const newErrors: { name?: string; phone?: string; location?: string } = {};
    const nameErr = validateField("name", data.name);
    if (nameErr) newErrors.name = nameErr;

    const phoneErr = validateField("phone", data.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const locationErr = validateField("location", data.location);
    if (locationErr) newErrors.location = locationErr;

    return newErrors;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strictly allow only numbers and restrict to 10 digits
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: cleaned }));
    if (touched.phone) {
      const err = validateField("phone", cleaned);
      setErrors((prev) => ({ ...prev, phone: err || undefined }));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, name: val }));
    if (touched.name) {
      const err = validateField("name", val);
      setErrors((prev) => ({ ...prev, name: err || undefined }));
    }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, location: val }));
    if (touched.location) {
      const err = validateField("location", val);
      setErrors((prev) => ({ ...prev, location: err || undefined }));
    }
  };

  const handleBlur = (field: "name" | "phone" | "location") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: err || undefined }));
  };

  const buildWhatsAppUrl = (data = formData) => {
    const text =
      `*❄️ NEW TECHNICAL QUOTE REQUEST — AA COLD STORAGES ❄️*\n\n` +
      `👤 *Customer Name:* ${data.name.trim()}\n` +
      `📱 *Mobile Number:* +91 ${data.phone.trim()}\n` +
      `📍 *Site Location:* ${data.location.trim()}\n` +
      `📦 *Product / Application:* ${data.productApplication}\n\n` +
      `_Requested from: https://aacoldstorages.in_`;

    return `https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault();
    setTouched({ name: true, phone: true, location: true });

    const currentErrors = validateAll(formData);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      const firstKey = Object.keys(currentErrors)[0] as keyof typeof currentErrors;
      toast.error(currentErrors[firstKey] || "Please fill all required fields correctly.");
      const inputEl = document.getElementById(`contact-field-${firstKey}`);
      inputEl?.focus();
      return;
    }

    // Success! Open WhatsApp directly
    const url = buildWhatsAppUrl(formData);
    window.open(url, "_blank");

    setLastSubmittedData({ ...formData });
    setSubmitted(true);
    toast.success("Opening WhatsApp with your quotation request...");
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
                  type="button"
                  onClick={() => handleSubmit()}
                  size="lg"
                  className="flex-1 rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-5 py-3.5 font-display text-xs sm:text-sm font-bold text-white shadow-brand hover:opacity-95 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <Send className="mr-2 h-4 w-4" /> Request Technical Quote
                </Button>

                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={() => handleSubmit()}
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
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#002E7D]">
                    Request Technical Quote
                  </h2>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#008938]/10 px-3 py-1 text-xs font-bold text-[#008938]">
                    <WhatsAppBrandIcon className="h-3.5 w-3.5" /> Direct WhatsApp Reply
                  </span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5C728A]">
                  Enter your contact details and storage requirements below. Upon submission, your quotation request will automatically open on WhatsApp for instant engineer response.
                </p>
              </div>

              {submitted && lastSubmittedData ? (
                <div className="my-auto rounded-2xl border border-[#008938]/30 bg-[#F5F9FC] p-6 text-center animate-fade-up">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#008938]/10 text-[#008938]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-[#002E7D]">
                    Quotation Request Prepared!
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#5C728A]">
                    WhatsApp has opened with your pre-filled inquiry details. If WhatsApp did not open automatically, click the button below.
                  </p>

                  {/* Summary of submitted data */}
                  <div className="mt-4 rounded-xl border border-[#D8E7F5] bg-white p-4 text-left text-xs space-y-2">
                    <div className="flex justify-between border-b border-[#F0F4F8] pb-1.5">
                      <span className="text-[#5C728A] font-medium">Customer Name:</span>
                      <strong className="text-[#002E7D]">{lastSubmittedData.name}</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#F0F4F8] pb-1.5">
                      <span className="text-[#5C728A] font-medium">Mobile Number:</span>
                      <strong className="text-[#002E7D]">+91 {lastSubmittedData.phone}</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#F0F4F8] pb-1.5">
                      <span className="text-[#5C728A] font-medium">Site Location:</span>
                      <strong className="text-[#002E7D]">{lastSubmittedData.location}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5C728A] font-medium">Product / Application:</span>
                      <strong className="text-[#0050A7] text-right ml-2">{lastSubmittedData.productApplication}</strong>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <Button
                      type="button"
                      onClick={() => {
                        const url = buildWhatsAppUrl(lastSubmittedData);
                        window.open(url, "_blank");
                      }}
                      className="flex-1 rounded-xl bg-[#008938] hover:bg-[#00742f] text-white py-3 text-xs sm:text-sm font-bold shadow-md cursor-pointer"
                    >
                      <WhatsAppBrandIcon className="mr-2 h-4 w-4" /> Open WhatsApp Again
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", phone: "", location: "Bengaluru", productApplication: enquiryOptions[0] });
                        setTouched({});
                        setErrors({});
                      }}
                      variant="outline"
                      className="rounded-xl border-[#D8E7F5] text-xs font-semibold text-[#0050A7]"
                    >
                      <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Submit Another Request
                    </Button>
                  </div>
                </div>
              ) : (
                <form id="contact-quote-form" onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  {/* Name */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="contact-field-name" className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                        Name <span className="text-red-500">*</span>
                      </label>
                      {touched.name && !errors.name && formData.name.trim().length >= 2 && (
                        <span className="text-[0.68rem] text-[#008938] font-semibold flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" /> Valid
                        </span>
                      )}
                    </div>
                    <Input
                      id="contact-field-name"
                      required
                      value={formData.name}
                      onChange={handleNameChange}
                      onBlur={() => handleBlur("name")}
                      placeholder="Your full name"
                      className={`mt-2 h-12 rounded-xl text-sm transition-all ${
                        touched.name && errors.name
                          ? "border-red-400 bg-red-50/40 focus-visible:ring-red-400"
                          : "border-[#D8E7F5]"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1 animate-fade-in">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="contact-field-phone" className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                        Phone / Mobile <span className="text-red-500">*</span>
                      </label>
                      <span
                        className={`text-[0.68rem] font-bold px-2 py-0.5 rounded-full ${
                          formData.phone.length === 10
                            ? "bg-[#008938]/10 text-[#008938]"
                            : formData.phone.length > 0
                            ? "bg-amber-100 text-amber-700"
                            : "bg-slate-100 text-[#5C728A]"
                        }`}
                      >
                        {formData.phone.length}/10 digits
                      </span>
                    </div>

                    <div className="relative mt-2 flex rounded-xl border shadow-sm">
                      <span className="inline-flex items-center px-3.5 rounded-l-xl border-r border-[#D8E7F5] bg-[#F5F9FC] text-xs font-bold text-[#002E7D] select-none">
                        🇮🇳 +91
                      </span>
                      <Input
                        id="contact-field-phone"
                        required
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        onBlur={() => handleBlur("phone")}
                        placeholder="10-digit mobile number (e.g. 9876543210)"
                        className={`h-12 rounded-l-none rounded-r-xl border-0 text-sm focus-visible:ring-0 ${
                          touched.phone && errors.phone
                            ? "bg-red-50/40"
                            : ""
                        }`}
                      />
                    </div>

                    {touched.phone && errors.phone ? (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1 animate-fade-in">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.phone}
                      </p>
                    ) : (
                      <p className="mt-1 text-[0.7rem] text-[#5C728A]">
                        Enter 10-digit mobile number (strictly numbers only)
                      </p>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="contact-field-location" className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                        Location <span className="text-red-500">*</span>
                      </label>
                      {touched.location && !errors.location && formData.location.trim().length > 0 && (
                        <span className="text-[0.68rem] text-[#008938] font-semibold flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" /> Valid
                        </span>
                      )}
                    </div>
                    <Input
                      id="contact-field-location"
                      required
                      value={formData.location}
                      onChange={handleLocationChange}
                      onBlur={() => handleBlur("location")}
                      placeholder="City / Area (e.g. Bengaluru, Karnataka)"
                      className={`mt-2 h-12 rounded-xl text-sm transition-all ${
                        touched.location && errors.location
                          ? "border-red-400 bg-red-50/40 focus-visible:ring-red-400"
                          : "border-[#D8E7F5]"
                      }`}
                    />
                    {touched.location && errors.location && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1 animate-fade-in">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.location}
                      </p>
                    )}
                  </div>

                  {/* Product/Application */}
                  <div>
                    <label htmlFor="contact-field-product" className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                      Product / Application <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="contact-field-product"
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
                      className="w-full rounded-xl bg-gradient-to-r from-[#0050A7] via-[#006ec7] to-[#0AA8F5] py-3.5 font-display text-sm font-bold text-white shadow-brand hover:opacity-95 active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <WhatsAppBrandIcon className="h-5 w-5" />
                      <span>Submit &amp; Open on WhatsApp</span>
                      <ExternalLink className="h-4 w-4 opacity-80" />
                    </Button>
                    <p className="mt-2 text-center text-[0.7rem] text-[#5C728A]">
                      🔒 Validated request connects directly to our chief refrigeration engineer on WhatsApp (+91 {company.phone})
                    </p>
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
