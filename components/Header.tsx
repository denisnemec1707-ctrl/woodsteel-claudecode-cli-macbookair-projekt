"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(63,34,17,0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 h-14 sm:h-16 lg:h-20 flex items-center justify-between gap-4 sm:gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0" aria-label="WoodSteel — domov">
          <Image
            src="/logo/woodsteel-logo.png"
            alt="WoodSteel"
            width={336}
            height={200}
            priority
            className={cn(
              "h-8 sm:h-10 lg:h-12 w-auto transition-[filter] duration-300",
              scrolled || open ? "" : "[filter:brightness(0)_invert(1)]"
            )}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {navigation.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors inline-flex items-center gap-1",
                  scrolled ? "text-charcoal hover:text-gold" : "text-white/95 hover:text-gold"
                )}
              >
                {item.label}
                {item.submenu && <ChevronDown size={14} className="opacity-60 transition-transform group-hover:rotate-180" />}
              </Link>
              {item.submenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-cream py-2 min-w-[220px]">
                    {item.submenu.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-5 py-3 text-sm text-charcoal hover:bg-cream/50 hover:text-gold transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side: phone + CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+421904473111"
            className={cn(
              "hidden md:inline-flex items-center gap-2 text-sm font-medium transition-colors",
              scrolled ? "text-charcoal hover:text-gold" : "text-white hover:text-gold"
            )}
          >
            <Phone size={16} />
            +421 904 473 111
          </a>
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 bg-gold hover:bg-gold-hover text-brown hover:text-white text-sm font-semibold rounded-full transition-all shadow-[0_4px_16px_rgba(203,171,88,0.4)] hover:shadow-[0_8px_24px_rgba(203,171,88,0.55)] hover:-translate-y-0.5"
          >
            Cenová ponuka
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled || open ? "text-charcoal" : "text-white"
            )}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-cream">
          <nav className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-1">
            {navigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-charcoal hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-6 pb-2 flex flex-col">
                    {item.submenu.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 text-sm text-mutedbrand hover:text-gold transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:+421904473111"
              className="flex items-center gap-2 mt-4 px-3 py-3 text-base font-medium text-charcoal border-t border-cream"
            >
              <Phone size={18} className="text-gold" />
              +421 904 473 111
            </a>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 mx-3 inline-flex justify-center items-center px-5 py-3 bg-gold text-brown font-semibold rounded-full"
            >
              Cenová ponuka
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
