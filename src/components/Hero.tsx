"use client";

import { heroSlides } from "@/data/photo";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDE_INVTERVAL = 4000;

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
    const timer = setInterval(nextSlide, SLIDE_INVTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen min-h-240 overflow-hidden">
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

      <div className="absolute inset-0 bg-red-900/50 z-10" />
      <div className="absolute inset-0 bg-(--color-red-500)/20 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-[1.4rem] md:px-[4.8rem]">
        <h1 className="text-cream text-[3rem] md:text-[3.5rem] lg:text-[4.6rem] font-bold leading-[1.18] tracking-tight mb-[1.6rem] max-w-3xl text-white">
          Building a Sickle Cell Enlightened Society
        </h1>

        <p className="text-cream/70 text-[1.6rem] md:text-[1.8rem] max-w-3xl leading-relaxed mb-[2rem] text-red-100">
          At Pearls Sickle Cell Initiative, we are committed to raising
          awareness, promoting early genotype testing, and supporting
          individuals living with sickle cell disorder. Through advocacy,
          education, and compassionate care, we are shaping a future where
          informed choices save lives and every warrior is empowered to thrive.
        </p>

        <div className="flex items-center gap-[1.6rem] mb-[2.4rem]">
          <div className="h-px w-16 md:w-32 bg-white/60" />
          <span className=" italic text-red-100">
            Join us. Learn. Act. Make a difference.
          </span>
          <div className="h-px w-16 md:w-32 bg-white/60" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
