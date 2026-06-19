"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/akcna-cenova-ponuka"
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-5 py-3.5 bg-gold hover:bg-gold-hover text-brown hover:text-white font-semibold text-sm rounded-full shadow-[0_8px_28px_rgba(203,171,88,0.5)] hover:shadow-[0_16px_36px_rgba(203,171,88,0.6)] transition-all",
        show
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-16 opacity-0 pointer-events-none"
      )}
      aria-label="Bezplatná cenová ponuka"
    >
      <Zap size={16} />
      Cenová ponuka
    </Link>
  );
}
