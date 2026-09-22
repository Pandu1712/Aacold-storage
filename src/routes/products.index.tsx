import { createFileRoute } from "@tanstack/react-router";
import { Search, Snowflake, Filter, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { ProductCard, SectionHeading, CtaBand } from "@/components/sections";
import { ScrollReveal } from "@/components/scroll-reveal";
import { productCategories, products } from "@/lib/site-data";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      {
        title: "Cold Storage Products Catalogue — AACS AA Cold Storages",
      },
      {
        name: "description",
        content:
          "Browse AACS commercial and industrial cold rooms, walk-in chillers, freezer rooms, banana ripening chambers, blast freezers and PUF insulated panels.",
      },
      {
        property: "og:title",
        content: "AACS Cold Storage Products Catalogue",
      },
      {
        property: "og:description",
        content:
          "High-efficiency industrial refrigeration equipment, cold rooms, and insulated panels in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return products.filter((item) => {
      const matchCategory =
        category === "All" || item.category === category;
      const matchQuery =
        item.name.toLowerCase().includes(query.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(query.toLowerCase().trim()) ||
        item.applications.some((app) =>
          app.toLowerCase().includes(query.toLowerCase().trim())
        );
      return matchCategory && matchQuery;
    });
  }, [category, query]);

  return (
    <>
      {/* Hero Header */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-gradient-brand opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,168,245,0.3),transparent_65%)]" />

        <div className="site-container relative py-8 lg:py-10">
          <ScrollReveal direction="down" duration={700}>
            <span className="eyebrow-light">
              <Sparkles className="h-3 w-3 text-[#4FC7FF]" />
              AACS Product Catalogue
            </span>
            <h1 className="mt-2.5 w-full max-w-6xl font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[2.85rem] font-extrabold text-white tracking-tight sm:whitespace-nowrap">
              Commercial &amp; Industrial Cold Storage Systems
            </h1>
            <p className="mt-2 w-full max-w-5xl text-xs sm:text-sm md:text-base leading-relaxed text-[#D8E7F5]">
              Explore our complete range of cold storage rooms, ripening chambers,
              walk-in chillers, blast freezers, and insulated panel systems. Share your capacity and dimensions for a customized quotation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Catalogue Controls & Grid */}
      <section className="site-container py-6 lg:py-8">
        <div className="space-y-3.5">
          {/* Search & Stats Bar */}
          <ScrollReveal direction="down" delay={100} duration={600}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full max-w-lg">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5C728A]" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by product name, application, or features..."
                  className="h-11 rounded-xl border-[#D8E7F5] bg-white pl-10 pr-4 font-display text-xs text-[#1A2B3C] shadow-sm transition focus-visible:ring-2 focus-visible:ring-[#0AA8F5]"
                  aria-label="Search products"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[0.7rem] font-semibold text-[#5C728A] hover:text-[#0050A7]"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#5C728A]">
                <Filter className="h-3.5 w-3.5 text-[#0050A7]" />
                <span>Showing {filtered.length} of {products.length} Products</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Filter Chips */}
          <ScrollReveal direction="up" delay={200} duration={600}>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {productCategories.map((item) => {
                const isActive = category === item;
                return (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`shrink-0 rounded-lg px-3.5 py-1.5 font-display text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#0050A7] text-white shadow-brand"
                        : "border border-[#D8E7F5] bg-white text-[#5C728A] hover:border-[#0AA8F5] hover:text-[#0050A7] hover:bg-[#F5F9FC]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Product Cards Grid with Alternating Left / Up / Right Animations */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, idx) => {
            const directions: ("left" | "up" | "right")[] = ["left", "up", "right"];
            const dir = directions[idx % 3];
            return (
              <ProductCard
                key={product.slug}
                product={product}
                direction={dir}
                delay={(idx % 3) * 70}
              />
            );
          })}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <ScrollReveal direction="zoom" duration={500}>
            <div className="rounded-2xl border border-[#D8E7F5] bg-[#F5F9FC] py-12 text-center">
              <Snowflake className="mx-auto h-10 w-10 text-[#0AA8F5]" />
              <h2 className="mt-3 font-display text-xl font-bold text-[#002E7D]">
                No matching products found
              </h2>
              <p className="mt-1 text-xs text-[#5C728A]">
                Try searching with another keyword or select "All" categories.
              </p>
            </div>
          </ScrollReveal>
        )}
      </section>

      {/* Global CTA */}
      <CtaBand />
    </>
  );
}
