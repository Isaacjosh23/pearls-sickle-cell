"use client";

import { heroSlides } from "@/data/photo";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDE_INTERVAL = 4000;

function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 400);
    },
    [current, isAnimating],
  );

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % heroSlides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      className="relative w-full h-screen min-h-96 overflow-hidden"
      id="hero"
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover object-center select-none pointer-events-none"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-red-900/60 z-10" />
      <div className="absolute inset-0 bg-red-500/10 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-[1.4rem] md:px-[4.8rem]">
        <h1 className="font-display text-[3.2rem] md:text-[4.2rem] lg:text-[5.6rem] leading-[1.15] tracking-tight mb-[2.4rem] max-w-6xl text-white">
          Building a Sickle Cell Enlightened Society
        </h1>

        <p className="font-body text-[1.6rem] md:text-[1.8rem] max-w-5xl leading-[1.8] mb-[3.2rem] text-red-100">
          At Pearls Sickle Cell Initiative, we are committed to raising
          awareness, promoting early genotype testing, and supporting
          individuals living with sickle cell disorder. Through advocacy,
          education, and compassionate care, we are shaping a future where
          informed choices save lives and every warrior is empowered to thrive.
        </p>

        <div className="flex items-center gap-[1.6rem]">
          <div className="h-px w-[6.4rem] md:w-[12.8rem] bg-white/40" />
          <span className="font-body font-light italic text-[1.4rem] md:text-[1.6rem] text-red-100">
            Join us. Learn. Act. Make a difference.
          </span>
          <div className="h-px w-[6.4rem] md:w-[12.8rem] bg-white/40" />
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 cursor-pointer ${
              i === current
                ? "w-[3.2rem] h-1.5 bg-gold"
                : "w-1.5 h-1.5 bg-cream/40 hover:bg-cream/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
