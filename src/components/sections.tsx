import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Snowflake,
  ShieldCheck,
  Settings,
  Factory,
  ThermometerSnowflake,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, type Product, type Service, company } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
  light = false,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <ScrollReveal
      direction="down"
      duration={600}
      className={cn("w-full max-w-6xl", center && "mx-auto text-center", className)}
    >
      <div className={cn("inline-flex items-center", center && "justify-center")}>
        <span className={light ? "eyebrow-light" : "eyebrow"}>
          <Sparkles className="h-3.5 w-3.5 shrink-0" />
          <span className="whitespace-nowrap">{eyebrow}</span>
        </span>
      </div>
      <h2
        className={cn(
          "section-title mt-2 font-display text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] font-extrabold tracking-tight",
          light ? "text-white" : "text-[#002E7D]"
        )}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={cn(
            "section-copy mt-2 w-full max-w-5xl text-xs sm:text-sm md:text-[0.95rem] leading-relaxed",
            center ? "mx-auto text-center" : "text-left",
            light ? "text-[#D8E7F5]" : "text-[#5C728A]"
          )}
        >
          {copy}
        </p>
      )}
    </ScrollReveal>
  );
}

export function ProductCard({
  product,
  direction = "up",
  delay = 0,
}: {
  product: Product;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "fade";
  delay?: number;
}) {
  return (
    <ScrollReveal direction={direction} delay={delay} duration={650}>
      <article className="product-card group flex flex-col justify-between h-full cursor-pointer">
        {/* Clickable Image Header with Price & Category Badges */}
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F9FC] block"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={600}
            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-108 group-active:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002E7D]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
            <span className="rounded-xl bg-white/95 px-3.5 py-1.5 font-display text-xs font-bold text-[#002E7D] shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
              View Full Specifications <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>

          {/* Category Chip */}
          <span className="absolute left-3 top-3 rounded-full border border-[#D8E7F5]/80 bg-white/95 px-2.5 py-0.5 font-display text-[0.7rem] font-semibold text-[#0050A7] shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
            {product.category}
          </span>

          {/* Price Floating Tag on Image */}
          <div className="absolute right-3 bottom-3 rounded-xl bg-[#002E7D]/95 border border-[#4FC7FF]/40 px-3 py-1 text-white shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
            <span className="block text-[0.6rem] uppercase tracking-wider text-[#4FC7FF] font-bold">
              Starting Price
            </span>
            <strong className="font-display text-xs sm:text-sm font-extrabold text-white">
              {product.priceFormatted}
            </strong>
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
          <div>
            <h3 className="font-display text-lg font-bold text-[#002E7D] transition group-hover:text-[#0AA8F5] truncate text-left">
              <Link to="/products/$slug" params={{ slug: product.slug }}>
                {product.name}
              </Link>
            </h3>

            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#5C728A] text-justify">
              {product.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-3.5 grid grid-cols-2 gap-2 pt-auto">
            <Button
              asChild
              size="sm"
              className="rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-2.5 py-1.5 text-[0.72rem] font-bold text-white shadow-brand hover:opacity-95 active:scale-95 transition-all duration-200"
            >
              <Link to="/contact" search={{ item: product.name }} hash="quote-form">
                Request Custom Quote
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-xl border-[#D8E7F5] bg-[#F5F9FC] px-2.5 py-1.5 text-xs font-semibold text-[#002E7D] hover:border-[#0AA8F5] hover:bg-white active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Link to="/products/$slug" params={{ slug: product.slug }}>
                View Details <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

export function ServiceCard({
  service,
  direction = "up",
  delay = 0,
}: {
  service: Service;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "fade";
  delay?: number;
}) {
  return (
    <ScrollReveal direction={direction} delay={delay} duration={650}>
      <article className="interactive-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D8E7F5] bg-white p-5 shadow-card h-full text-justify cursor-pointer">
        <div>
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0050A7] to-[#0AA8F5] text-white shadow-brand transition-transform duration-300 group-hover:scale-110 group-active:scale-105">
              <Settings className="h-5 w-5" />
            </span>
            <span className="rounded-full bg-[#F5F9FC] border border-[#D8E7F5] px-3 py-0.5 text-xs font-bold text-[#0050A7] transition-colors duration-300 group-hover:bg-[#0050A7] group-hover:text-white">
              {service.price}
            </span>
          </div>

          <h3 className="mt-3 font-display text-lg font-bold text-[#002E7D] transition-colors duration-300 group-hover:text-[#0AA8F5] text-left">
            {service.name}
          </h3>

          <p className="mt-1.5 text-xs leading-relaxed text-[#5C728A] text-justify">
            {service.description}
          </p>

          {/* Benefits Checklist */}
          <ul className="mt-3 space-y-1.5 border-t border-[#D8E7F5] pt-3 text-xs text-[#1A2B3C]">
            {service.benefits.slice(0, 3).map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-justify">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0AA8F5]" />
                <span className="leading-snug text-justify">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-4 pt-1">
          <Button
            asChild
            size="sm"
            className="w-full rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] text-xs font-bold text-white shadow-brand hover:opacity-95 active:scale-95 transition-all duration-200"
          >
            <Link to="/contact" search={{ item: service.name }} hash="quote-form">GET IN TOUCH</Link>
          </Button>
        </div>
      </article>
    </ScrollReveal>
  );
}

export function TrustStrip() {
  const capabilities = [
    { icon: Snowflake, label: "Cold Storage Solutions", desc: "Customized Walk-Ins & Freezers" },
    { icon: Settings, label: "Refrigeration Systems", desc: "High COP Condensing Units" },
    { icon: Factory, label: "Industrial Cooling", desc: "Process Chillers & Ripening" },
    { icon: ThermometerSnowflake, label: "HVAC Services", desc: "Installation & Comprehensive AMC" },
  ];

  return (
    <div className="site-container relative z-20 -mt-5">
      <ScrollReveal direction="up" duration={700}>
        <div className="grid overflow-hidden rounded-2xl border border-[#D8E7F5] bg-white shadow-card-hover sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D8E7F5]">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group flex items-center gap-3.5 p-4 transition-all duration-300 hover:bg-[#F5F9FC] active:bg-[#EBF5FC] active:scale-[0.985] cursor-pointer"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0050A7] to-[#0AA8F5] text-white shadow-sm p-2.5 transition-transform duration-300 group-hover:scale-110 group-active:scale-105">
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                </span>
                <div>
                  <strong className="block font-display text-xs font-bold text-[#002E7D] transition-colors duration-200 group-hover:text-[#0AA8F5]">
                    {item.label}
                  </strong>
                  <span className="text-[0.7rem] text-[#5C728A]">{item.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="site-container py-6 lg:py-8">
      <ScrollReveal direction="zoom" duration={750}>
        <div className="cta-band relative overflow-hidden px-6 py-7 md:px-10 md:py-8">
          <Snowflake className="absolute -right-10 -top-10 h-64 w-64 text-white/10 pointer-events-none" />
          <Snowflake className="absolute -left-12 -bottom-12 h-56 w-56 text-white/5 pointer-events-none" />

          <div className="relative grid items-center gap-6 lg:grid-cols-[1.3fr_auto]">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#D8E7F5] backdrop-blur">
                <ShieldCheck className="h-3 w-3 text-[#4FC7FF]" />
                Tailored Engineering & Quick Quotations
              </span>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
                Need a Cold Storage Solution?
              </h2>
              <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#D8E7F5]">
                Tell us your storage requirement, target temperature, and site dimensions.
                Our refrigeration engineers will provide a customized quotation.
              </p>
            </div>

            <div className="flex flex-row items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto flex-nowrap">
              <Button
                asChild
                size="default"
                className="flex-1 sm:flex-initial justify-center rounded-xl bg-white px-3.5 sm:px-6 py-2.5 font-display text-xs sm:text-sm font-bold text-[#002E7D] shadow-xl transition-all duration-300 hover:bg-[#F5F9FC] hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <Link to="/contact" hash="quote-form" className="flex items-center justify-center gap-1.5">
                  <span>Get Quote</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                </Link>
              </Button>
              <Button
                asChild
                size="default"
                variant="outline"
                className="flex-1 sm:flex-initial justify-center rounded-xl border-2 border-white/40 bg-white/10 px-3.5 sm:px-6 py-2.5 font-display text-xs sm:text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 active:scale-95 whitespace-nowrap"
              >
                <a href={`tel:+91${company.phone}`} className="flex items-center justify-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-[#4FC7FF] shrink-0" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-[#1A2B3C]">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0AA8F5]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function RelatedProducts({ current }: { current: string }) {
  const related = products.filter((item) => item.slug !== current).slice(0, 3);
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {related.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}