import { useEffect } from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, RelatedProducts, SectionHeading } from "@/components/sections";
import { ScrollReveal } from "@/components/scroll-reveal";
import { products, company } from "@/lib/site-data";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product.slug]);

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

          <div className="mt-4 grid items-center gap-6 lg:grid-cols-[1fr_1fr]">
            {/* Product Image Frame (Slide from Left) */}
            <ScrollReveal direction="left" duration={700}>
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
            </ScrollReveal>

            {/* Product Summary Header (Slide from Right) */}
            <ScrollReveal direction="right" duration={700}>
              <div>
                <span className="eyebrow">{product.category}</span>
                <h1 className="mt-2.5 font-display text-2xl font-extrabold leading-tight text-[#002E7D] sm:text-3xl lg:text-4xl">
                  {product.name}
                </h1>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C728A]">
                  {product.description}
                </p>

                {/* Price & Badges (Side by Side in Single Row) */}
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

                {/* Action Buttons */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="default"
                    className="rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-6 py-2.5 font-display text-xs font-bold text-white shadow-brand hover:opacity-95"
                  >
                    <Link to="/contact" search={{ item: product.name }} hash="quote-form">
                      {product.ctaText ?? "GET A QUOTE"} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="default"
                    variant="outline"
                    className="rounded-xl border-[#D8E7F5] bg-white px-5 py-2.5 font-display text-xs font-bold text-[#008938] hover:bg-[#F5F9FC]"
                  >
                    <a
                      href={`https://wa.me/91${company.whatsapp}?text=Hi%20AACS,%20I%20would%20like%20a%20quotation%20for%20${encodeURIComponent(
                        product.name
                      )}%20(${encodeURIComponent(product.priceFormatted)})`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsAppBrandIcon className="mr-1.5 h-4 w-4" /> WhatsApp Inquire
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Detailed Technical Specifications & Features */}
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
                    AACS Certified
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