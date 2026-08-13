"use client";

import { useState } from "react";
import { CalendarCheck, Phone, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { InquiryForm } from "@/components/InquiryForm";

const PHONE_DISPLAY = "+421 904 473 111";
const PHONE_HREF = "tel:+421904473111";
const EMAIL = "info@woodsteel.sk";

/**
 * Interaktívny blok na dohodnutie obhliadky showroomu.
 * Klikateľné kontakty (telefón / e-mail) + rozbaliteľný formulár na výber termínu.
 */
export function ShowroomBooking() {
  const [open, setOpen] = useState(false);

  return (
    <section id="obhliadka" className="py-16 sm:py-20 lg:py-28 bg-cream/50">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="bg-white rounded-3xl border border-cream shadow-[0_8px_40px_rgba(63,34,17,0.08)] p-7 sm:p-10 lg:p-12">
          {/* Interaktívna ikona + nadpis */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="obhliadka-formular"
            className="group w-full flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 text-left cursor-pointer"
          >
            <span
              className={cn(
                "relative flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                "bg-gold/15 group-hover:bg-gold group-hover:scale-105 group-hover:shadow-[0_8px_28px_rgba(203,171,88,0.45)]"
              )}
            >
              {/* pulzujúci prstenec — signalizuje, že prvok je klikateľný */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-full ring-2 ring-gold/40 animate-ping opacity-60 [animation-duration:2.5s]"
              />
              <CalendarCheck
                size={32}
                className="relative text-gold transition-colors group-hover:text-white"
              />
            </span>

            <span className="flex-1">
              <span className="block text-eyebrow text-gold mb-2">Objednanie návštevy</span>
              <span className="block font-display text-display-3 font-bold text-brown">
                Dohodnite si obhliadku showroomu
              </span>
              <span className="mt-2 block text-mutedbrand leading-relaxed">
                Obchodný zástupca si s vami rád dohodne termín návštevy a zodpovie všetky
                vaše otázky. Návšteva je bezplatná a bez záväzkov.
              </span>
            </span>

            <span
              className={cn(
                "inline-flex shrink-0 items-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all",
                "bg-gold text-brown group-hover:bg-gold-hover group-hover:text-white shadow-[0_4px_16px_rgba(203,171,88,0.4)]"
              )}
            >
              {open ? "Skryť formulár" : "Vybrať termín"}
              <ChevronDown
                size={18}
                className={cn("transition-transform duration-300", open && "rotate-180")}
              />
            </span>
          </button>

          {/* Klikateľné kontakty */}
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={PHONE_HREF}
              className="group flex items-center gap-4 rounded-2xl border border-cream bg-cream/30 p-5 transition-all hover:border-gold hover:bg-white hover:shadow-[0_8px_28px_rgba(63,34,17,0.08)] hover:-translate-y-0.5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 transition-colors group-hover:bg-gold">
                <Phone size={20} className="text-gold transition-colors group-hover:text-white" />
              </span>
              <span>
                <span className="block text-xs text-eyebrow text-mutedbrand">Zavolajte nám</span>
                <span className="block font-display font-bold text-brown transition-colors group-hover:text-gold">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                "Objednanie návštevy showroomu Rovinka"
              )}`}
              className="group flex items-center gap-4 rounded-2xl border border-cream bg-cream/30 p-5 transition-all hover:border-gold hover:bg-white hover:shadow-[0_8px_28px_rgba(63,34,17,0.08)] hover:-translate-y-0.5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 transition-colors group-hover:bg-gold">
                <Mail size={20} className="text-gold transition-colors group-hover:text-white" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-eyebrow text-mutedbrand">Napíšte nám</span>
                <span className="block font-display font-bold text-brown truncate transition-colors group-hover:text-gold">
                  {EMAIL}
                </span>
              </span>
            </a>
          </div>

          {/* Rozbaliteľný formulár */}
          <div
            id="obhliadka-formular"
            hidden={!open}
            className="mt-9 border-t border-cream pt-9"
          >
            <InquiryForm variant="inline" defaultProduct="Iné" />
          </div>
        </div>
      </div>
    </section>
  );
}
