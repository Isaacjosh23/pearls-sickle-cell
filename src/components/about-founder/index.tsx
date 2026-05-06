"use client";

import FirstBio from "./components/FirstBio";
import SecondBio from "./components/SecondBio";

function AboutFounder() {
  return (
    <section
      className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-neutral-100"
      id="about-founder"
    >
      <div className="max-w-384 mx-auto">
        <p className="text-[1.2rem] tracking-[0.3em] uppercase mb-[1.6rem] text-(--color-red-500) font-semibold">
          About Founder
        </p>

        <FirstBio />

        <div className="w-full h-[0.1rem] bg-neutral-300 mb-[6.4rem]" />

        <SecondBio />
      </div>
    </section>
  );
}

export default AboutFounder;
