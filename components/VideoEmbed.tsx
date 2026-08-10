"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface Props {
  /** YouTube video ID */
  id: string;
  title: string;
  /** Lokálne uložený náhľad (self-hosted, rovnako ako ostatné assety) */
  poster: string;
  caption?: string;
}

/**
 * Náhľad videa, ktorý načíta YouTube iframe až po kliknutí.
 * Šetrí načítanie stránky a nenastavuje cookies, kým používateľ video nespustí.
 */
export function VideoEmbed({ id, title, poster, caption }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-brown/10 border border-cream shadow-[0_4px_24px_rgba(63,34,17,0.06)]">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full cursor-pointer"
            aria-label={`Prehrať video: ${title}`}
          >
            <Image
              src={poster}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/85 via-brown/25 to-brown/10 transition-opacity group-hover:from-brown/75" />

            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gold/95 shadow-[0_8px_32px_rgba(203,171,88,0.5)] transition-transform duration-300 group-hover:scale-110">
                <Play size={28} className="ml-1 text-brown" fill="currentColor" />
              </span>
            </span>

            <span className="absolute inset-x-0 bottom-0 p-5 text-left">
              <span className="block font-display font-bold text-white text-base sm:text-lg leading-snug">
                {title}
              </span>
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-mutedbrand">{caption}</figcaption>
      )}
    </figure>
  );
}
