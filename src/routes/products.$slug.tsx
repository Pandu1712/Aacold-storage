import { useState, useEffect, type FormEvent } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Snowflake,
  Layers,
  FileSpreadsheet,
  ArrowRight,
  XCircle,
  Info,
  Send,
  AlertCircle,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CtaBand, RelatedProducts, SectionHeading } from "@/components/sections";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  products,
  company,
  productPriceDisclaimer,
  productWhatsIncluded,
  productWhatsNotIncluded,
} from "@/lib/site-data";
import { WhatsAppBrandIcon } from "@/components/whatsapp-icon";
import { generateBreadcrumbs, generateProductJsonLd, siteUrl } from "@/lib/seo-schemas";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => {
    const product = loaderData;
    const name = product?.name ?? "Product Details";
    const canonicalUrl = `${siteUrl}/products/${product?.slug ?? ""}`;
    return {
      meta: [
        { title: `${name} — Price, Specs & Quotation | AA Cold Storages Bengaluru` },
        {
          name: "description",
          content: `${name} by AA Cold Storages Bengaluru (${product?.priceFormatted}): ${product?.description} Capacity: ${product?.capacity ?? "Custom"}. Temperature: ${product?.temperatureRange ?? "Controlled"}. Contact +91 8073946255 for technical quotation.`,
        },
        {
          name: "keywords",
          content: `${name}, ${name} price Bengaluru, ${product?.category} Karnataka, AA Cold Storages ${name}, industrial cold storage room, cold chain engineering`,
        },
        { property: "og:title", content: `${name} | AA Cold Storages Bengaluru` },
        {
          property: "og:description",
          content: `${product?.description} Price: ${product?.priceFormatted}. Customized engineering by AA Cold Storages.`,
        },
        { property: "og:type", content: "product" },
        { property: "og:url", content: canonicalUrl },
        { property: "og:image", content: `${siteUrl}/MainLogo.png` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${name} | AA Cold Storages` },
        { name: "twitter:description", content: `${name}: ${product?.priceFormatted}. Turnkey cold storage engineering in Bengaluru.` },
        { name: "twitter:image", content: `${siteUrl}/MainLogo.png` },
      ],
      links: [
        { rel: "canonical", href: canonicalUrl },
      ],
      scripts: product
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(generateProductJsonLd(product)),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify(
                generateBreadcrumbs([
                  { name: "Home", path: "/" },
                  { name: "Products", path: "/products" },
                  { name: product.name, path: `/products/${product.slug}` },
                ])
              ),
            },
          ]
        : [],
    };
  },
  component: ProductDetailPage,
  notFoundComponent: () => (
    <div className="site-container py-32 text-center">
      <Snowflake className="mx-auto h-16 w-16 text-[#0AA8F5]" />
      <h1 className="mt-4 font-display text-3xl font-extrabold text-[#002E7D]">
        Product Not Found
      </h1>
      <p className="mt-2 text-sm text-[#5C728A]">
        The requested product configuration could not be located in our catalogue.
      </p>
      <Button asChild className="mt-6 rounded-xl bg-[#0050A7] text-white">
        <Link to="/products">Back to Catalogue</Link>
      </Button>
    </div>
  ),
});

function ProductDetailPage() {
  const product = Route.useLoaderData();

  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    location: "Bengaluru",
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; location?: string }>({});
  const [touched, setTouched] = useState<{ name?: boolean; phone?: boolean; location?: boolean }>({});
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<typeof quoteForm | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product.slug]);

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

  const validateAll = (data = quoteForm) => {
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
    // Restrict strictly to numbers and 10 digits maximum
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
    setQuoteForm((prev) => ({ ...prev, phone: cleaned }));
    if (touched.phone) {
      const err = validateField("phone", cleaned);
      setErrors((prev) => ({ ...prev, phone: err || undefined }));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuoteForm((prev) => ({ ...prev, name: val }));
    if (touched.name) {
      const err = validateField("name", val);
      setErrors((prev) => ({ ...prev, name: err || undefined }));
    }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuoteForm((prev) => ({ ...prev, location: val }));
    if (touched.location) {
      const err = validateField("location", val);
      setErrors((prev) => ({ ...prev, location: err || undefined }));
    }
  };

  const handleBlur = (field: "name" | "phone" | "location") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, quoteForm[field]);
    setErrors((prev) => ({ ...prev, [field]: err || undefined }));
  };

  const buildWhatsAppUrl = (data = quoteForm) => {
    const text =
      `*❄️ NEW PRODUCT QUOTE REQUEST — AA COLD STORAGES ❄️*\n\n` +
      `📦 *Product:* ${product.name} (${product.priceFormatted})\n` +
      `🏷️ *Category:* ${product.category}\n` +
      `👤 *Customer Name:* ${data.name.trim()}\n` +
      `📱 *Mobile Number:* +91 ${data.phone.trim()}\n` +
      `📍 *Site Location:* ${data.location.trim()}\n\n` +
      `_Requested from: https://aacoldstorages.in/products/${product.slug}_`;

    return `https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const handleQuoteSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault();
    setTouched({ name: true, phone: true, location: true });

    const currentErrors = validateAll(quoteForm);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      const firstKey = Object.keys(currentErrors)[0] as keyof typeof currentErrors;
      toast.error(currentErrors[firstKey] || "Please fill all required fields correctly.");
      const inputEl = document.getElementById(`prod-field-${firstKey}`);
      inputEl?.focus();
      return;
    }

    // Success! Open WhatsApp directly
    const url = buildWhatsAppUrl(quoteForm);
    window.open(url, "_blank");

    setLastSubmittedData({ ...quoteForm });
    setQuoteSubmitted(true);
    toast.success("Opening WhatsApp with your product quote request...");
  };

  return (
    <>
      {/* 1. Breadcrumbs & Top Product Hero */}
      <section className="bg-gradient-to-b from-[#F5F9FC] to-white py-5 lg:py-6 border-b border-[#D8E7F5]">
        <div className="site-container">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-[#0050A7] transition hover:text-[#0AA8F5]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Products Catalogue
          </Link>

          <div className="mt-4 grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
            {/* Product Image & Pricing Badges (Slide from Left) */}
            <ScrollReveal direction="left" duration={700}>
              <div>
                <div className="relative overflow-hidden rounded-2xl border border-[#D8E7F5] bg-white p-2.5 shadow-card-hover">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-[#002E7D]/95 px-3 py-1 font-display text-[0.7rem] font-bold text-white backdrop-blur shadow-md">
                    {product.category}
                  </span>
                </div>

                {/* Price & Badges (Side by Side under Image) */}
                <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="rounded-xl border-2 border-[#0AA8F5]/30 bg-[#F5F9FC] p-3 shadow-sm flex flex-col justify-center">
                    <span className="block text-[0.62rem] uppercase tracking-wider font-bold text-[#5C728A]">
                      Price (Ex-Factory)
                    </span>
                    <strong className="mt-0.5 block font-display text-base sm:text-lg font-extrabold text-[#0050A7]">
                      {product.priceFormatted}
                    </strong>
                  </div>

                  <div className="rounded-xl border border-[#D8E7F5] bg-white p-3 shadow-sm flex flex-col justify-center">
                    <span className="block text-[0.62rem] uppercase tracking-wider font-bold text-[#5C728A]">
                      Min. Order (MOQ)
                    </span>
                    <strong className="mt-0.5 block font-display text-xs sm:text-sm font-bold text-[#002E7D]">
                      {product.moq}
                    </strong>
                  </div>

                  {product.capacity && (
                    <div className="rounded-xl border border-[#D8E7F5] bg-white p-3 shadow-sm flex flex-col justify-center">
                      <span className="block text-[0.62rem] uppercase tracking-wider font-bold text-[#5C728A]">
                        Capacity / Sizing
                      </span>
                      <strong className="mt-0.5 block font-display text-xs sm:text-sm font-bold text-[#0AA8F5]">
                        {product.capacity}
                      </strong>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Product Summary & Enquiry Form Header (Slide from Right) */}
            <ScrollReveal direction="right" duration={700}>
              <div>
                <span className="eyebrow">{product.category}</span>
                <h1 className="mt-2.5 font-display text-2xl font-extrabold leading-tight text-[#002E7D] sm:text-3xl lg:text-4xl">
                  {product.name}
                </h1>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C728A]">
                  {product.description}
                </p>

                {/* Pricing Disclaimer Note */}
                <div className="mt-3 rounded-xl border border-[#0AA8F5]/30 bg-[#F0F7FD] p-3 text-xs leading-relaxed text-[#002E7D] shadow-xs">
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-[#0050A7] shrink-0 mt-0.5" />
                    <p className="font-medium text-[#002E7D] text-[0.78rem] leading-snug">
                      <strong className="font-bold text-[#0050A7]">Pricing Note: </strong>
                      {productPriceDisclaimer}
                    </p>
                  </div>
                </div>

                {/* Quick Enquiry / Custom Quote Form */}
                <div className="mt-4 rounded-2xl border-2 border-[#0AA8F5]/30 bg-white p-4 sm:p-5 shadow-card-hover">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D8E7F5]">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#0050A7] to-[#0AA8F5] text-white shadow-xs">
                        <Send className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <h3 className="font-display text-xs sm:text-sm font-bold text-[#002E7D]">
                          REQUEST CUSTOM QUOTE
                        </h3>
                        <span className="text-[0.68rem] text-[#5C728A] block">
                          Instant engineering quotation for {product.name}
                        </span>
                      </div>
                    </div>
                    <span className="rounded-full bg-[#008938]/10 px-2.5 py-0.5 text-[0.62rem] font-bold text-[#008938]">
                      Fast Reply
                    </span>
                  </div>

                  {quoteSubmitted && lastSubmittedData ? (
                    <div className="my-3 rounded-xl border border-[#008938]/30 bg-[#F5F9FC] p-4 text-center animate-fade-up">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#008938]/10 text-[#008938]">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <h4 className="mt-2 font-display text-sm font-bold text-[#002E7D]">
                        Quotation Request Prepared!
                      </h4>
                      <p className="mt-1 text-xs text-[#5C728A] leading-relaxed">
                        WhatsApp has opened with your pre-filled inquiry for <strong>{product.name}</strong>.
                      </p>

                      <div className="mt-3 rounded-lg border border-[#D8E7F5] bg-white p-3 text-left text-[0.72rem] space-y-1.5">
                        <div className="flex justify-between border-b border-[#F0F4F8] pb-1">
                          <span className="text-[#5C728A]">Customer:</span>
                          <strong className="text-[#002E7D]">{lastSubmittedData.name}</strong>
                        </div>
                        <div className="flex justify-between border-b border-[#F0F4F8] pb-1">
                          <span className="text-[#5C728A]">Mobile:</span>
                          <strong className="text-[#002E7D]">+91 {lastSubmittedData.phone}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#5C728A]">Location:</span>
                          <strong className="text-[#002E7D]">{lastSubmittedData.location}</strong>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-col sm:flex-row gap-2">
                        <Button
                          type="button"
                          onClick={() => {
                            const url = buildWhatsAppUrl(lastSubmittedData);
                            window.open(url, "_blank");
                          }}
                          size="sm"
                          className="flex-1 rounded-lg bg-[#008938] hover:bg-[#00742f] text-white py-2 text-xs font-bold shadow-sm cursor-pointer"
                        >
                          <WhatsAppBrandIcon className="mr-1.5 h-3.5 w-3.5" /> Open WhatsApp Again
                        </Button>
                        <Button
                          onClick={() => {
                            setQuoteSubmitted(false);
                            setQuoteForm({ name: "", phone: "", location: "Bengaluru" });
                            setTouched({});
                            setErrors({});
                          }}
                          variant="outline"
                          size="sm"
                          className="rounded-lg border-[#D8E7F5] text-[0.7rem] font-semibold text-[#0050A7]"
                        >
                          <RotateCcw className="mr-1 h-3 w-3" /> Submit Another
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleQuoteSubmit} noValidate className="mt-3.5 space-y-3">
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {/* Name */}
                        <div>
                          <div className="flex items-center justify-between">
                            <label htmlFor="prod-field-name" className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#1A2B3C]">
                              Name <span className="text-red-500">*</span>
                            </label>
                            {touched.name && !errors.name && quoteForm.name.trim().length >= 2 && (
                              <span className="text-[0.6rem] text-[#008938] font-semibold flex items-center gap-0.5">
                                <CheckCircle2 className="h-2.5 w-2.5" /> Valid
                              </span>
                            )}
                          </div>
                          <Input
                            id="prod-field-name"
                            required
                            value={quoteForm.name}
                            onChange={handleNameChange}
                            onBlur={() => handleBlur("name")}
                            placeholder="Your full name"
                            className={`mt-1 h-10 rounded-xl text-xs transition-all ${
                              touched.name && errors.name
                                ? "border-red-400 bg-red-50/40 focus-visible:ring-red-400"
                                : "border-[#D8E7F5]"
                            }`}
                          />
                          {touched.name && errors.name && (
                            <p className="mt-1 text-[0.65rem] text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3 shrink-0" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <div className="flex items-center justify-between">
                            <label htmlFor="prod-field-phone" className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#1A2B3C]">
                              Phone <span className="text-red-500">*</span>
                            </label>
                            <span
                              className={`text-[0.6rem] font-bold px-1.5 py-0.2 rounded-full ${
                                quoteForm.phone.length === 10
                                  ? "bg-[#008938]/10 text-[#008938]"
                                  : quoteForm.phone.length > 0
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-slate-100 text-[#5C728A]"
                              }`}
                            >
                              {quoteForm.phone.length}/10 digits
                            </span>
                          </div>
                          <div className="relative mt-1 flex rounded-xl border shadow-sm">
                            <span className="inline-flex items-center px-2.5 rounded-l-xl border-r border-[#D8E7F5] bg-[#F5F9FC] text-[0.7rem] font-bold text-[#002E7D] select-none">
                              +91
                            </span>
                            <Input
                              id="prod-field-phone"
                              required
                              type="tel"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              maxLength={10}
                              value={quoteForm.phone}
                              onChange={handlePhoneChange}
                              onBlur={() => handleBlur("phone")}
                              placeholder="10-digit mobile"
                              className={`h-10 rounded-l-none rounded-r-xl border-0 text-xs focus-visible:ring-0 ${
                                touched.phone && errors.phone
                                  ? "bg-red-50/40"
                                  : ""
                              }`}
                            />
                          </div>
                          {touched.phone && errors.phone ? (
                            <p className="mt-1 text-[0.65rem] text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3 shrink-0" />
                              {errors.phone}
                            </p>
                          ) : (
                            <p className="mt-1 text-[0.62rem] text-[#5C728A]">
                              10-digit number only
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {/* Location */}
                        <div>
                          <div className="flex items-center justify-between">
                            <label htmlFor="prod-field-location" className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#1A2B3C]">
                              Location <span className="text-red-500">*</span>
                            </label>
                            {touched.location && !errors.location && quoteForm.location.trim().length > 0 && (
                              <span className="text-[0.6rem] text-[#008938] font-semibold flex items-center gap-0.5">
                                <CheckCircle2 className="h-2.5 w-2.5" /> Valid
                              </span>
                            )}
                          </div>
                          <Input
                            id="prod-field-location"
                            required
                            value={quoteForm.location}
                            onChange={handleLocationChange}
                            onBlur={() => handleBlur("location")}
                            placeholder="City / Area (e.g. Bengaluru)"
                            className={`mt-1 h-10 rounded-xl text-xs transition-all ${
                              touched.location && errors.location
                                ? "border-red-400 bg-red-50/40 focus-visible:ring-red-400"
                                : "border-[#D8E7F5]"
                            }`}
                          />
                          {touched.location && errors.location && (
                            <p className="mt-1 text-[0.65rem] text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3 shrink-0" />
                              {errors.location}
                            </p>
                          )}
                        </div>

                        {/* Product Name */}
                        <div>
                          <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#1A2B3C]">
                            Product / Application
                          </label>
                          <Input
                            readOnly
                            value={product.name}
                            className="mt-1 h-10 rounded-xl border-[#D8E7F5] bg-[#F5F9FC] text-xs font-semibold text-[#002E7D]"
                          />
                        </div>
                      </div>

                      <div className="pt-1">
                        <Button
                          type="submit"
                          className="w-full rounded-xl bg-gradient-to-r from-[#0050A7] via-[#006ec7] to-[#0AA8F5] py-2.5 font-display text-xs font-bold text-white shadow-brand hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          <WhatsAppBrandIcon className="h-4 w-4" />
                          <span>Submit &amp; Open on WhatsApp</span>
                          <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Scope of Supply: What's Included & What's Not Included */}
      <section className="site-container py-5 lg:py-6 border-b border-[#D8E7F5]">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Scope &amp; Inclusions"
            title="What's Included &amp; What's Not Included"
            copy="Standard inclusions provided with the system and exclusions to be arranged at customer site."
            center
          />

          <div className="mt-4 grid gap-3.5 sm:gap-4 md:grid-cols-2 items-stretch">
            {/* What's Included Card */}
            <ScrollReveal direction="left" duration={600}>
              <div className="h-full rounded-xl border border-[#008938]/30 bg-gradient-to-b from-[#F0FDF4] to-white p-3.5 sm:p-4 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#008938]/20">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#008938] text-white shadow-xs">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <h3 className="font-display text-xs sm:text-sm font-bold text-[#005221]">
                        What's Included
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#008938]/15 px-2 py-0.5 text-[0.62rem] font-bold text-[#008938]">
                      Standard Scope
                    </span>
                  </div>

                  <ul className="mt-2.5 space-y-1.5">
                    {productWhatsIncluded.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[0.72rem] sm:text-xs font-medium text-[#1A2B3C]">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#008938]/15 text-[#008938] font-bold text-[0.65rem]">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 pt-2 border-t border-[#008938]/15 text-[0.68rem] text-[#005221] font-semibold">
                  ✓ Certified Components &amp; Quality-Assured Systems
                </div>
              </div>
            </ScrollReveal>

            {/* What's Not Included Card */}
            <ScrollReveal direction="right" duration={600}>
              <div className="h-full rounded-xl border border-[#D8E7F5] bg-gradient-to-b from-[#FFF5F5] to-white p-3.5 sm:p-4 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#EF4444]/20">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#EF4444] text-white shadow-xs">
                        <XCircle className="h-3.5 w-3.5" />
                      </span>
                      <h3 className="font-display text-xs sm:text-sm font-bold text-[#991B1B]">
                        What's Not Included
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#EF4444]/15 px-2 py-0.5 text-[0.62rem] font-bold text-[#DC2626]">
                      Client Scope
                    </span>
                  </div>

                  <ul className="mt-2.5 space-y-1.5">
                    {productWhatsNotIncluded.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[0.72rem] sm:text-xs font-medium text-[#4A5568]">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EF4444]/15 text-[#DC2626] font-bold text-[0.65rem]">
                          ✕
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 pt-2 border-t border-[#EF4444]/15 text-[0.68rem] text-[#991B1B] font-semibold">
                  ✕ Quoted separately or arranged through site contractors
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Detailed Technical Specifications & Features */}
      <section className="site-container py-6 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Features & Applications (Slide from Left) */}
          <ScrollReveal direction="left" duration={700}>
            <div>
              <SectionHeading
                eyebrow="Key Highlights"
                title="Built for Dependability and Thermal Stability"
              />

              {/* Features Checklist (Top 3 Highlights) */}
              <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-[#002E7D] flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#0AA8F5]" />
                Standard System Features
              </h3>
              <ul className="mt-2.5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {product.features.slice(0, 3).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 rounded-xl border border-[#D8E7F5] bg-[#F5F9FC] p-3 text-[0.75rem] font-medium text-[#1A2B3C]"
                  >
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0AA8F5]" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Applications (Top 3 Key Sectors) */}
              <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-[#002E7D] flex items-center gap-2">
                <Layers className="h-4 w-4 text-[#0050A7]" />
                Typical Applications &amp; Sectors
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.applications.slice(0, 3).map((app) => (
                  <span
                    key={app}
                    className="rounded-full border border-[#D8E7F5] bg-white px-3 py-1 font-display text-[0.7rem] font-semibold text-[#002E7D] shadow-sm"
                  >
                    {app}
                  </span>
                ))}
              </div>

              {/* Engineering Note */}
              <div className="mt-4 rounded-xl border border-[#D8E7F5] bg-[#F5F9FC] p-4 text-xs leading-relaxed text-[#5C728A]">
                <strong className="block font-display text-xs font-bold text-[#002E7D]">
                  Custom Sizing &amp; Capacity Engineering
                </strong>
                <p className="mt-0.5 text-[0.75rem]">
                  Every refrigeration unit and cold room envelope can be adapted to match your specific room layout, ambient seasonal temperatures, daily door opening frequency, and product heat load.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Blue-Themed Specifications Table (Slide from Right) */}
          <ScrollReveal direction="right" duration={700}>
            <div>
              <div className="overflow-hidden rounded-2xl border border-[#D8E7F5] bg-white shadow-card">
                <div className="flex items-center justify-between border-b border-[#D8E7F5] bg-[#002E7D] px-5 py-3 text-white">
                  <div className="flex items-center gap-2.5">
                    <FileSpreadsheet className="h-4 w-4 text-[#4FC7FF]" />
                    <h3 className="font-display text-sm font-bold">
                      Specification Details
                    </h3>
                  </div>
                  <span className="rounded bg-white/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-[#4FC7FF]">
                    AACS Quality Assured
                  </span>
                </div>

                <table className="w-full text-left text-xs">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr
                        key={spec.label}
                        className={
                          idx % 2 === 0
                            ? "bg-white border-b border-[#D8E7F5]"
                            : "bg-[#F5F9FC] border-b border-[#D8E7F5] last:border-0"
                        }
                      >
                        <th className="w-2/5 px-4 py-2.5 font-display font-semibold text-[#002E7D] text-[0.75rem]">
                          {spec.label}
                        </th>
                        <td className="w-3/5 px-4 py-2.5 text-[#1A2B3C] font-medium text-[0.75rem]">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* 3. Related Products Section */}
      <section className="border-t border-[#D8E7F5] bg-[#F5F9FC] py-6 lg:py-8">
        <div className="site-container">
          <SectionHeading
            eyebrow="Related Products"
            title="Explore More Refrigeration Solutions"
            copy="Compare related cold storage systems and find the exact capacity for your business."
          />
          <div className="mt-4">
            <RelatedProducts current={product.slug} />
          </div>
        </div>
      </section>

      {/* 4. Global Enquiry CTA Band */}
      <CtaBand />
    </>
  );
}