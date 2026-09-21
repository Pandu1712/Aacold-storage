import { useState, useEffect, useRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  Phone,
  Mail,
  MessageCircle,
  Snowflake,
  X,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  ChevronUp,
  Compass,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AACSLogo } from "@/components/logo";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { WhatsAppIcon, WhatsAppBrandIcon } from "@/components/whatsapp-icon";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Solutions", to: "/solutions" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8E7F5]/80 bg-white/95 backdrop-blur-xl transition-all shadow-subtle">
      {/* 1. TOP ANNOUNCEMENT & CREDENTIALS BAR */}
      <div className="border-b border-[#D8E7F5]/60 bg-[#F5F9FC] py-2 text-xs text-[#5C728A]">
        <div className="site-container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#1A2B3C]">
              <MapPin className="h-3.5 w-3.5 text-[#0050A7]" />
              Bengaluru, Karnataka, India
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium">
              <Clock className="h-3.5 w-3.5 text-[#0050A7]" />
              {company.businessHours}
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#002E7D]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#0AA8F5]" />
              GSTIN: {company.gstin}
            </span>
          </div>

          <div className="flex items-center gap-4 font-semibold text-[#0050A7]">
            <a
              href={`tel:+91${company.phone}`}
              className="inline-flex items-center gap-1.5 transition hover:text-[#0AA8F5]"
            >
              <Phone className="h-3.5 w-3.5" /> +91 {company.phone}
            </a>
            <a
              href={`https://wa.me/91${company.whatsapp}?text=Hello%20AACS,%20I%20would%20like%20to%20inquire%20about%20cold%20storage%20solutions`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[#008938] transition hover:opacity-80"
            >
              <WhatsAppBrandIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR (PREVIOUS CLEAN LAYOUT) */}
      <div className="site-container flex h-16 items-center justify-between gap-4 lg:h-18">
        <Link to="/" className="shrink-0" aria-label="AA Cold Storages Home">
          <AACSLogo variant="light" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden items-center justify-center gap-1 xl:gap-2 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((item) => {
            const isActive =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA Button */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            className="rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-6 py-2.5 font-display text-sm font-semibold tracking-wide text-white shadow-brand transition duration-300 hover:opacity-95 hover:shadow-brand-lg"
          >
            <Link to="/contact">
              GET A QUOTE <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D8E7F5] bg-[#F5F9FC] text-[#002E7D] transition hover:bg-[#D8E7F5] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* 3. MOBILE MENU DROPDOWN */}
      {open && (
        <nav
          className="border-t border-[#D8E7F5] bg-white px-5 py-6 shadow-2xl lg:hidden animate-fade-up"
          aria-label="Mobile navigation"
        >
          <div className="grid gap-2">
            {navLinks.map((item) => {
              const isActive =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-base font-semibold transition ${
                    isActive
                      ? "bg-[#F5F9FC] text-[#0050A7]"
                      : "text-[#1A2B3C] hover:bg-[#F5F9FC]"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 text-[#0AA8F5]" />
                </Link>
              );
            })}
          </div>

          <div className="mt-6 border-t border-[#D8E7F5] pt-5">
            <Button
              asChild
              className="w-full rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] py-3 text-white font-display font-semibold shadow-brand"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                GET A QUOTE
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#001333] via-[#001D47] to-[#000B1E] pb-24 text-[#F5F9FC] md:pb-0 select-none">
      {/* Radial Top Spotlight & Decorative Giant Snowflake Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(10,168,245,0.12),transparent)] pointer-events-none" />
      <Snowflake
        className="absolute -right-16 -bottom-16 h-80 w-80 text-[#0AA8F5]/[0.03] pointer-events-none -rotate-12 select-none"
        aria-hidden="true"
      />

      {/* MAIN FOOTER GRID (With Icon & Icon Head on Every Section) */}
      <div className="site-container relative z-10 py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Excellence (Span 4 on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <AACSLogo variant="dark" />
              <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#A3C2DE] sm:text-sm">
                Engineering high-efficiency commercial &amp; industrial cold storage rooms,
                blast freezers, ripening chambers, and modular PUF panels with precision
                temperature control.
              </p>

              {/* Trust & Quality Badges */}
              <div className="mt-4 flex flex-wrap gap-2 text-[0.7rem] text-[#7DD3FC]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1 border border-white/10 backdrop-blur-sm">
                  <CheckCircle2 className="h-3 w-3 text-[#38BDF8]" /> ISO 9001:2015 Standards
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1 border border-white/10 backdrop-blur-sm">
                  <CheckCircle2 className="h-3 w-3 text-[#38BDF8]" /> Cam-Lock Airtight Joint
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href={`tel:+91${company.phone}`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur transition hover:border-[#0AA8F5] hover:bg-[#0050A7]/50"
              >
                <Phone className="h-3.5 w-3.5 text-[#38BDF8]" /> Call Us
              </a>
              <a
                href={`https://wa.me/91${company.whatsapp}?text=Hi%20AACS,%20I%20need%20information%20on%20cold%20storage%20solutions`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#25D366]/40 bg-[#25D366]/20 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-[#25D366]/30 hover:border-[#25D366]"
              >
                <WhatsAppBrandIcon className="h-4 w-4" /> WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-4 py-2 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(0,80,167,0.3)] transition hover:scale-105"
              >
                Get Quote <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2 on lg, with Icon Head) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 pb-2.5 border-b border-white/10">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0AA8F5]/15 border border-[#0AA8F5]/30 text-[#38BDF8]">
                <Compass className="h-3.5 w-3.5" />
              </span>
              <h3 className="font-display text-xs font-black uppercase tracking-[0.14em] text-white">
                Quick Links
              </h3>
            </div>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group flex items-center gap-1.5 text-[#A3C2DE] transition-all duration-200 hover:text-white hover:translate-x-1.5"
                  >
                    <ChevronRight className="h-3 w-3 text-[#0AA8F5] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products (Span 3 on lg, with Icon Head) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 pb-2.5 border-b border-white/10">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0AA8F5]/15 border border-[#0AA8F5]/30 text-[#38BDF8]">
                <Snowflake className="h-3.5 w-3.5" />
              </span>
              <h3 className="font-display text-xs font-black uppercase tracking-[0.14em] text-white">
                Cold Systems
              </h3>
            </div>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#A3C2DE]">
              <li>
                <Link to="/products" className="group flex items-center gap-1.5 transition-all duration-200 hover:text-white hover:translate-x-1.5">
                  <ChevronRight className="h-3 w-3 text-[#0AA8F5] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Cold Storage Rooms (2T – 100T+)</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="group flex items-center gap-1.5 transition-all duration-200 hover:text-white hover:translate-x-1.5">
                  <ChevronRight className="h-3 w-3 text-[#0AA8F5] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Walk-In Chillers &amp; Freezers</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="group flex items-center gap-1.5 transition-all duration-200 hover:text-white hover:translate-x-1.5">
                  <ChevronRight className="h-3 w-3 text-[#0AA8F5] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Banana Ripening Chambers</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="group flex items-center gap-1.5 transition-all duration-200 hover:text-white hover:translate-x-1.5">
                  <ChevronRight className="h-3 w-3 text-[#0AA8F5] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Blast Freezer Rooms (-40°C)</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="group flex items-center gap-1.5 transition-all duration-200 hover:text-white hover:translate-x-1.5">
                  <ChevronRight className="h-3 w-3 text-[#0AA8F5] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>PUF Insulated Panels</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="group flex items-center gap-1.5 transition-all duration-200 hover:text-white hover:translate-x-1.5">
                  <ChevronRight className="h-3 w-3 text-[#0AA8F5] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Clean Room Panels</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Head Office & Live Contact (Span 3 on lg, with Icon Head) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 pb-2.5 border-b border-white/10">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0AA8F5]/15 border border-[#0AA8F5]/30 text-[#38BDF8]">
                <Building2 className="h-3.5 w-3.5" />
              </span>
              <h3 className="font-display text-xs font-black uppercase tracking-[0.14em] text-white">
                Head Office
              </h3>
            </div>

            {/* Live Operational Status Indicator (Borderless) */}
            <div className="mt-3.5 flex items-center gap-2 text-xs text-[#9BB8D3]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
              </span>
              <span>Available Mon – Sat: 9am – 7:30pm</span>
            </div>

            <div className="mt-3.5 space-y-3 text-xs sm:text-sm text-[#A3C2DE]">
              {/* Phone Link (Borderless) */}
              <a
                href={`tel:+91${company.phone}`}
                className="group flex items-start gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#38BDF8] mt-0.5" />
                <div className="leading-tight">
                  <strong className="block text-white font-medium">+91 {company.phone}</strong>
                  <span className="text-[0.7rem] text-[#7DD3FC]">Direct Phone Inquiries</span>
                </div>
              </a>

              {/* WhatsApp Link with Official WhatsApp Icon (Borderless) */}
              <a
                href={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(
                  "Hi AACS, I would like to inquire about your cold storage and refrigeration solutions."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-2.5 transition-colors hover:text-white"
              >
                <WhatsAppBrandIcon className="h-4 w-4 shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <strong className="block text-white font-medium">+91 {company.whatsapp}</strong>
                  <span className="text-[0.7rem] text-[#4ADE80] group-hover:underline">Chat on WhatsApp (Instant Reply)</span>
                </div>
              </a>

              {/* Email Link (Borderless) */}
              <a
                href={`mailto:${company.email}`}
                className="group flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#38BDF8]" />
                <span className="truncate">{company.email}</span>
              </a>

              {/* Address (Borderless) */}
              <div className="flex items-start gap-2.5 text-[#A3C2DE]">
                <MapPin className="h-4 w-4 shrink-0 text-[#38BDF8] mt-0.5" />
                <span className="leading-relaxed text-[0.78rem]">{company.address}</span>
              </div>

              {/* GSTIN (Borderless) */}
              <div className="flex items-center gap-2 pl-0.5 text-[0.75rem] text-[#7DD3FC]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#38BDF8]" />
                <span>GSTIN: <strong className="text-white">{company.gstin}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM COPYRIGHT & BACK-TO-TOP STRIP */}
      <div className="relative z-10 border-t border-[#133D8A]/70 bg-[#000E26]/80 backdrop-blur-md">
        <div className="site-container flex flex-col gap-3 py-4 text-xs text-[#A3C2DE] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0AA8F5]" />
            <span>
              © 2026 <strong>AACS — AA Cold Storages</strong>. All Rights Reserved.
            </span>
          </div>

          <span className="hidden md:inline-block font-medium text-[#7DD3FC]">
            Complete Cooling Solutions • Bengaluru, Karnataka
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group inline-flex items-center gap-1.5 text-xs text-[#A3C2DE] hover:text-white transition-colors duration-200 self-start sm:self-auto cursor-pointer"
          >
            <span>Back to Top</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-[#0AA8F5] transition-colors">
              <ChevronUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export function MobileActions() {
  return <StickyActions />;
}

export function StickyActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAction, setActiveAction] = useState<"quote" | "whatsapp" | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveAction(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Appear only after scrolling down past the hero (240px)
      setIsVisible(window.scrollY > 240);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAction = (type: "quote" | "whatsapp") => {
    setActiveAction((prev) => (prev === type ? null : type));
  };

  return (
    <aside
      ref={containerRef}
      aria-label="Quick Sticky Actions"
      className={cn(
        "fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 select-none transition-all duration-400 ease-out",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-8 pointer-events-none"
      )}
    >
      {/* 1. STICKY GET A QUOTE BUTTON (PURE ICON BY DEFAULT, TEXT ON CLICK) */}
      <div className="relative flex items-center justify-end">
        {/* Popout Text Card When Clicked */}
        {activeAction === "quote" && (
          <div className="absolute right-15 mr-2 w-64 sm:w-72 rounded-2xl bg-white p-3.5 shadow-[0_12px_35px_rgba(0,46,125,0.25)] border border-[#D8E7F5] animate-in fade-in slide-in-from-right-3 duration-200 z-50 text-left">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-display text-xs font-bold text-[#002E7D] uppercase tracking-wider flex items-center gap-1.5">
                  <Snowflake className="h-3.5 w-3.5 text-[#0AA8F5]" />
                  Get a Quote
                </div>
                <p className="mt-1 text-[0.72rem] text-[#475569] leading-relaxed">
                  Get instant customized pricing for cold rooms, blast freezers &amp; PUF panels.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveAction(null)}
                className="text-[#94A3B8] hover:text-[#1E293B] p-1 -mr-1 -mt-1 transition"
                aria-label="Close"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <Link
              to="/contact"
              onClick={() => setActiveAction(null)}
              className="mt-2.5 flex h-9 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-3 font-display text-xs font-bold text-white shadow-sm hover:opacity-95 transition"
            >
              <span>Request Quote Form</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}

        {/* Pure Circular Icon Button */}
        <button
          type="button"
          onClick={() => toggleAction("quote")}
          title="Get a Quote (Click to view details)"
          aria-label="Get a Quote"
          className={cn(
            "group relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-r from-[#0050A7] via-[#0066CC] to-[#0AA8F5] text-white shadow-[0_6px_22px_rgba(0,80,167,0.38)] hover:shadow-[0_10px_30px_rgba(0,80,167,0.55)] hover:scale-110 active:scale-95 transition-all duration-300",
            activeAction === "quote" && "ring-4 ring-[#0AA8F5]/35 scale-105"
          )}
        >
          <Snowflake className="h-5 w-5 sm:h-6 sm:w-6 text-white transition-transform duration-300 group-hover:rotate-45" />
        </button>
      </div>

      {/* 2. STICKY WHATSAPP BUTTON (PURE ICON BY DEFAULT, TEXT ON CLICK) */}
      <div className="relative flex items-center justify-end">
        {/* Popout Text Card When Clicked */}
        {activeAction === "whatsapp" && (
          <div className="absolute right-15 mr-2 w-64 sm:w-72 rounded-2xl bg-white p-3.5 shadow-[0_12px_35px_rgba(0,46,125,0.25)] border border-[#D8E7F5] animate-in fade-in slide-in-from-right-3 duration-200 z-50 text-left">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-display text-xs font-bold text-[#008938] uppercase tracking-wider flex items-center gap-1.5">
                  <WhatsAppBrandIcon className="h-4 w-4" />
                  WhatsApp Us
                </div>
                <p className="mt-1 text-[0.72rem] text-[#475569] leading-relaxed">
                  Chat directly with our refrigeration engineers for instant consultation.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveAction(null)}
                className="text-[#94A3B8] hover:text-[#1E293B] p-1 -mr-1 -mt-1 transition"
                aria-label="Close"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <a
              href={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(
                "Hi AACS, I would like to inquire about your cold storage and refrigeration solutions."
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setActiveAction(null)}
              className="mt-2.5 flex h-9 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 font-display text-xs font-bold text-white shadow-sm hover:bg-[#20bd5a] transition"
            >
              <WhatsAppIcon className="h-4 w-4 fill-white text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        )}

        {/* Pure Circular Icon Button */}
        <button
          type="button"
          onClick={() => toggleAction("whatsapp")}
          title="WhatsApp Us (Click to view details)"
          aria-label="WhatsApp Us"
          className={cn(
            "group relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_22px_rgba(37,211,102,0.42)] hover:bg-[#20bd5a] hover:shadow-[0_10px_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300",
            activeAction === "whatsapp" && "ring-4 ring-[#25D366]/40 scale-105"
          )}
        >
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-9 w-9 sm:h-10 sm:w-10 animate-ping rounded-full bg-white opacity-35" />
            <WhatsAppIcon className="h-6 w-6 fill-white text-white" />
          </span>
        </button>
      </div>
    </aside>
  );
}