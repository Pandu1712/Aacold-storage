import { useState, useEffect, type FormEvent } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  MessageCircle,
  ShieldCheck,
  Snowflake,
  Layers,
  FileSpreadsheet,
  ArrowRight,
  XCircle,
  Info,
  Send,
} from "lucide-react";
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

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => {
    const name = loaderData?.name ?? "Product Details";
    return {
      meta: [
        { title: `${name} — AACS AA Cold Storages` },
        {
          name: "description",
          content: `${loaderData?.name}: ${loaderData?.description} Price: ${loaderData?.priceFormatted}. Customized cold storage systems by AACS Bengaluru.`,
        },
        { property: "og:title", content: `${name} — AACS` },
        {
          property: "og:description",
          content: loaderData?.description ?? "AACS Cold Storage Solutions",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
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
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product.slug]);

  const handleQuoteSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!quoteForm.name || !quoteForm.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    setQuoteSubmitted(true);
  };

  const handleWhatsAppQuote = () => {
    const text =
      `*New AACS Custom Quote Request*\n\n` +
      `*Product:* ${product.name} (${product.priceFormatted})\n` +
      `*Name:* ${quoteForm.name || "Not specified"}\n` +
      `*Phone:* ${quoteForm.phone || "Not specified"}\n` +
      `*Location:* ${quoteForm.location || "Bengaluru"}`;

    const url = `https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
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

                  {quoteSubmitted ? (
                    <div className="my-3 rounded-xl border border-[#00B7FF]/30 bg-[#F5F9FC] p-4 text-center animate-fade-up">
                      <CheckCircle2 className="mx-auto h-8 w-8 text-[#008938]" />
                      <h4 className="mt-2 font-display text-sm font-bold text-[#002E7D]">
                        Custom Quote Request Received!
                      </h4>
                      <p className="mt-1 text-xs text-[#5C728A] leading-relaxed">
                        Our refrigeration engineering team will contact you at <strong>{quoteForm.phone}</strong> with a detailed technical estimate for <strong>{product.name}</strong>.
                      </p>
                      <Button
                        onClick={() => {
                          setQuoteSubmitted(false);
                          setQuoteForm({ name: "", phone: "", location: "Bengaluru" });
                        }}
                        variant="outline"
                        size="sm"
                        className="mt-3 rounded-lg border-[#D8E7F5] text-[0.7rem] font-semibold text-[#0050A7]"
                      >
                        Submit Another Enquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleQuoteSubmit} className="mt-3.5 space-y-3">
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        <div>
                          <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#1A2B3C]">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <Input
                            required
                            value={quoteForm.name}
                            onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                            placeholder="Your full name"
                            className="mt-1 h-10 rounded-xl border-[#D8E7F5] text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#1A2B3C]">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <Input
                            required
                            type="tel"
                            value={quoteForm.phone}
                            onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                            placeholder="10-digit mobile number"
                            className="mt-1 h-10 rounded-xl border-[#D8E7F5] text-xs"
                          />
                        </div>
                      </div>

                      <div className="grid gap-2.5 sm:grid-cols-2">
                        <div>
                          <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#1A2B3C]">
                            Location <span className="text-red-500">*</span>
                          </label>
                          <Input
                            required
                            value={quoteForm.location}
                            onChange={(e) => setQuoteForm({ ...quoteForm, location: e.target.value })}
                            placeholder="City / Area (e.g. Bengaluru)"
                            className="mt-1 h-10 rounded-xl border-[#D8E7F5] text-xs"
                          />
                        </div>

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

                      <div className="flex flex-col sm:flex-row gap-2 pt-1">
                        <Button
                          type="submit"
                          className="flex-1 rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] py-2.5 font-display text-xs font-bold text-white shadow-brand hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
                        >
                          <Send className="mr-1.5 h-3.5 w-3.5" /> Request Technical Quote
                        </Button>

                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleWhatsAppQuote}
                          className="rounded-xl border border-[#D8E7F5] bg-[#F5F9FC] px-4 py-2.5 font-display text-xs font-bold text-[#008938] hover:bg-white active:scale-[0.99] transition-all cursor-pointer"
                        >
                          <WhatsAppBrandIcon className="mr-1.5 h-3.5 w-3.5" /> WhatsApp Quote
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