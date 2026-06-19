"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export function Faq({
  items,
  eyebrow = "Časté otázky",
  title = "FAQ",
  subtitle,
  compact = false,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={cn("bg-white", compact ? "py-12 sm:py-16" : "py-16 sm:py-20 lg:py-32")}>
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        {!compact && (
          <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
        )}
        {compact && (
          <div className="mb-10 text-center">
            <div className="text-eyebrow text-gold mb-3">{eyebrow}</div>
            <h2 className="text-display-3 font-bold text-brown">{title}</h2>
          </div>
        )}

        <div className={cn("space-y-3", !compact && "mt-12")}>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className={cn(
                  "rounded-2xl border transition-all overflow-hidden",
                  isOpen ? "border-gold/40 bg-gold/[0.03] shadow-[0_8px_24px_rgba(63,34,17,0.06)]" : "border-cream bg-white"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-5 sm:px-7 py-5 sm:py-6 flex items-start justify-between gap-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-brown group-hover:text-gold transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all",
                      isOpen ? "bg-gold text-white rotate-180" : "bg-cream text-brown"
                    )}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-7 pb-5 sm:pb-6 text-charcoal/90 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
