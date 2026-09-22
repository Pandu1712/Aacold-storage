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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  // Auto-close menu when navigating to new route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Track scroll position for dynamic header elevation transition (blur + shadow)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ease-out",
        isScrolled
          ? "bg-white/95 border-[#D8E7F5] shadow-[0_6px_25px_rgba(0,46,125,0.08)]"
          : "bg-white/90 border-[#D8E7F5]/70 shadow-subtle"
      )}
    >
      {/* 1. TOP ANNOUNCEMENT & CREDENTIALS BAR */}
      <div className="border-b border-[#D8E7F5]/60 bg-[#F5F9FC] py-1.5 sm:py-2 text-[0.68rem] sm:text-xs text-[#5C728A] transition-colors">
        <div className="site-container flex items-center justify-between gap-2 sm:gap-4 overflow-hidden">
          {/* Left Info: Location (Always visible on mobile & desktop) & GSTIN / Hours (On sm/md/lg) */}
          <div className="flex items-center gap-2.5 sm:gap-5 min-w-0">
            {/* Location (Visible on all devices) */}
            <span className="inline-flex items-center gap-1 sm:gap-1.5 font-semibold text-[#1A2B3C] shrink-0 transition-transform active:scale-95">
              <MapPin className="h-3.5 w-3.5 text-[#0050A7] shrink-0 animate-float-slow" />
              <span>Bengaluru, Karnataka</span>
            </span>

            {/* GSTIN (Visible on tablet & desktop) */}
            <span className="hidden sm:inline-flex items-center gap-1 sm:gap-1.5 font-bold text-[#002E7D] shrink-0">
              <ShieldCheck className="h-3.5 w-3.5 text-[#0AA8F5] shrink-0" />
              <span>GSTIN:</span>{" "}
              <span className="font-mono text-[#0050A7] text-xs font-bold tracking-tight">
                {company.gstin}
              </span>
            </span>

            {/* Working Hours (Visible on medium+ screens) */}
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium shrink-0">
              <Clock className="h-3.5 w-3.5 text-[#0050A7] shrink-0" />
              {company.businessHours}
            </span>
          </div>

          {/* Right Direct Contact Links */}
          <div className="flex items-center gap-2 sm:gap-4 font-semibold text-[#0050A7] shrink-0">
            <a
              href={`tel:+91${company.phone}`}
              className="inline-flex items-center gap-1 font-bold text-[#0050A7] transition-all hover:text-[#0AA8F5] active:scale-95 whitespace-nowrap text-[0.68rem] sm:text-xs"
            >
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#0050A7] transition-transform group-hover:rotate-12" />
              <span>+91 {company.phone}</span>
            </a>
            <a
              href={`https://wa.me/91${company.whatsapp}?text=Hello%20AACS,%20I%20would%20like%20to%20inquire%20about%20cold%20storage%20solutions`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-[#008938] transition-all hover:opacity-80 active:scale-95 whitespace-nowrap text-xs font-bold"
            >
              <WhatsAppBrandIcon className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="site-container flex h-16 items-center justify-between gap-3 sm:gap-4 lg:h-18">
        {/* Left Side: Modern Frameless Hamburger (LHS) + Hairline Divider + Logo */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          {/* Sleek Frameless Mobile Hamburger Button with Smooth Icon Morph */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#002E7D] hover:bg-[#EBF5FC] hover:text-[#0AA8F5] active:scale-90 transition-all duration-200 lg:hidden shrink-0 -ml-1 cursor-pointer"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <div className="relative flex h-5 w-5 flex-col items-center justify-center gap-1.25">
              <span
                className={cn(
                  "h-[2.5px] w-5 rounded-full bg-current transition-all duration-300 ease-out origin-center",
                  open && "translate-y-[6.5px] rotate-45 bg-[#0AA8F5]"
                )}
              />
              <span
                className={cn(
                  "h-[2.5px] w-5 rounded-full bg-current transition-all duration-200 ease-out",
                  open && "opacity-0 scale-0"
                )}
              />
              <span
                className={cn(
                  "h-[2.5px] w-5 rounded-full bg-current transition-all duration-300 ease-out origin-center",
                  open && "-translate-y-[6.5px] -rotate-45 bg-[#0AA8F5]"
                )}
              />
            </div>
          </button>

          {/* Hairline Divider for visual separation on mobile */}
          <span className="hidden xs:block h-6 w-[1.5px] bg-[#D8E7F5]/80 lg:hidden shrink-0 transition-opacity" />

          {/* Logo with Touch Spring Effect */}
          <Link
            to="/"
            className="shrink-0 transition-transform active:scale-95 duration-200"
            aria-label="AA Cold Storages Home"
            onClick={() => setOpen(false)}
          >
            <AACSLogo variant="light" />
          </Link>
        </div>

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

        {/* Primary CTA Button (Desktop & Tablet) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Button
            asChild
            className="rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-5 sm:px-6 py-2.5 font-display text-xs sm:text-sm font-bold tracking-wide text-white shadow-brand transition-all duration-300 hover:opacity-95 hover:shadow-brand-lg active:scale-95 shrink-0"
          >
            <Link to="/contact" hash="quote-form">
              <span>GET A QUOTE</span>
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay (Smooth fade) */}
      <div
        className={cn(
          "fixed inset-0 top-full h-[100dvh] bg-[#001D47]/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* 3. MOBILE MENU DROPDOWN (Smooth accordion + slide & stagger animation) */}
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden overflow-hidden",
          open
            ? "grid-rows-[1fr] opacity-100 border-t border-[#D8E7F5]/80 bg-white/98 backdrop-blur-2xl shadow-2xl visible"
            : "grid-rows-[0fr] opacity-0 border-t-0 bg-transparent shadow-none pointer-events-none invisible"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className="min-h-0 overflow-y-auto max-h-[calc(100dvh-5.5rem)] px-5 py-6"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-2">
              {navLinks.map((item, index) => {
                const isActive =
                  item.to === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    style={{
                      transitionDelay: open ? `${index * 45}ms` : "0ms",
                    }}
                    className={cn(
                      "group flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-base font-semibold transition-all duration-300 active:scale-[0.98]",
                      open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0",
                      isActive
                        ? "bg-gradient-to-r from-[#F0F7FD] to-[#E5F3FC] text-[#0050A7] shadow-sm font-bold border-l-4 border-[#0050A7]"
                        : "text-[#1A2B3C] hover:bg-[#F5F9FC] active:bg-[#EBF5FC]"
                    )}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-all duration-200",
                          isActive ? "bg-[#0AA8F5] scale-125" : "bg-transparent group-hover:bg-[#0AA8F5]/50"
                        )}
                      />
                      <span>{item.label}</span>
                    </span>
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-transform duration-200 text-[#0AA8F5]",
                        "group-hover:translate-x-1 group-active:translate-x-1",
                        isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            <div
              style={{ transitionDelay: open ? `${navLinks.length * 45}ms` : "0ms" }}
              className={cn(
                "mt-6 border-t border-[#D8E7F5] pt-5 transition-all duration-300",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              )}
            >
              <Button
                asChild
                className="w-full rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] py-3 text-white font-display font-semibold shadow-brand hover:shadow-brand-lg active:scale-[0.98] transition-all duration-200"
              >
                <Link
                  to="/contact"
                  hash="quote-form"
                  onClick={() => {
                    setOpen(false);
                    if (pathname === "/contact") {
                      setTimeout(() => {
                        document.getElementById("quote-form-section")?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }
                  }}
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#001333] via-[#001D47] to-[#000B1E] text-[#F5F9FC] pb-0 select-none">
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

            {/* Quick Action Buttons (Icon-only on mobile for Call/WhatsApp, full text on sm+, Get Quote remains full text) */}
            <div className="mt-6 flex items-center gap-2 sm:gap-2.5 flex-nowrap sm:flex-wrap">
              <a
                href={`tel:+91${company.phone}`}
                title={`Call Us: +91 ${company.phone}`}
                aria-label="Call Us"
                className="inline-flex h-9 w-9 sm:h-auto sm:w-auto items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/10 p-2 sm:px-3.5 sm:py-2 text-xs font-semibold text-white backdrop-blur transition hover:border-[#0AA8F5] hover:bg-[#0050A7]/50 active:scale-95 shrink-0"
              >
                <Phone className="h-3.5 w-3.5 text-[#38BDF8]" />
                <span className="hidden sm:inline">Call Us</span>
              </a>
              <a
                href={`https://wa.me/91${company.whatsapp}?text=Hi%20AACS,%20I%20need%20information%20on%20cold%20storage%20solutions`}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp Us"
                aria-label="WhatsApp Us"
                className="inline-flex h-9 w-9 sm:h-auto sm:w-auto items-center justify-center gap-1.5 rounded-xl border border-[#25D366]/40 bg-[#25D366]/20 p-2 sm:px-3.5 sm:py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-[#25D366]/30 hover:border-[#25D366] active:scale-95 shrink-0"
              >
                <WhatsAppBrandIcon className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <Link
                to="/contact"
                hash="quote-form"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-4 py-2 text-xs font-bold text-white shadow-[0_4px_14px_rgba(0,80,167,0.3)] transition hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span>Get Quote</span>
                <ArrowRight className="h-3.5 w-3.5" />
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
        <div className="site-container flex flex-col gap-2.5 py-3.5 text-xs text-[#A3C2DE] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[0.68rem] xs:text-xs text-[#A3C2DE] whitespace-nowrap overflow-x-auto scrollbar-none">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0AA8F5]" />
            <span className="whitespace-nowrap">
              © 2026 <strong>AACS — AA Cold Storages</strong>. All Rights Reserved.
            </span>
          </div>

          <span className="hidden lg:inline-block text-xs font-medium text-[#7DD3FC] whitespace-nowrap">
            Complete Cooling Solutions • Bengaluru, Karnataka
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group inline-flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-[#A3C2DE] hover:text-white transition-colors duration-200 self-start sm:self-auto cursor-pointer whitespace-nowrap"
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
      {/* 1. STICKY CALL / GET A QUOTE BUTTON (PHONE ICON) */}
      <div className="relative flex items-center justify-end">
        {/* Popout Text Card When Clicked */}
        {activeAction === "quote" && (
          <div className="absolute right-15 mr-2 w-64 sm:w-72 rounded-2xl bg-white p-3.5 shadow-[0_12px_35px_rgba(0,46,125,0.25)] border border-[#D8E7F5] animate-in fade-in slide-in-from-right-3 duration-200 z-50 text-left">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-display text-xs font-bold text-[#002E7D] uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-[#0AA8F5]" />
                  Call / Get a Quote
                </div>
                <p className="mt-1 text-[0.72rem] text-[#475569] leading-relaxed">
                  Call directly for immediate assistance or request a custom quote online.
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
            <div className="mt-2.5 flex flex-col gap-1.5">
              <a
                href={`tel:+91${company.phone}`}
                onClick={() => setActiveAction(null)}
                className="flex h-9 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0050A7] to-[#0AA8F5] px-3 font-display text-xs font-bold text-white shadow-sm hover:opacity-95 transition"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call +91 {company.phone}</span>
              </a>
              <Link
                to="/contact"
                hash="quote-form"
                onClick={() => setActiveAction(null)}
                className="flex h-8 items-center justify-center gap-1.5 rounded-xl border border-[#D8E7F5] bg-[#F5F9FC] px-3 font-display text-[0.72rem] font-bold text-[#002E7D] hover:bg-white transition"
              >
                <span>Request Online Quote</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        )}

        {/* Pure Circular Phone Icon Button */}
        <button
          type="button"
          onClick={() => toggleAction("quote")}
          title={`Call Us: +91 ${company.phone}`}
          aria-label="Call Us"
          className={cn(
            "group relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-r from-[#0050A7] via-[#0066CC] to-[#0AA8F5] text-white shadow-[0_6px_22px_rgba(0,80,167,0.38)] hover:shadow-[0_10px_30px_rgba(0,80,167,0.55)] hover:scale-110 active:scale-95 transition-all duration-300",
            activeAction === "quote" && "ring-4 ring-[#0AA8F5]/35 scale-105"
          )}
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white transition-transform duration-300 group-hover:rotate-12 group-active:rotate-12" />
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