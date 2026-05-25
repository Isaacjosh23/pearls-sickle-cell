"use client";

function EventTopLabel() {
  return (
    <div className="flex flex-col items-center gap-[1.6rem]">
      <p className="font-body text-[1.2rem] tracking-[0.3em] uppercase font-semibold text-teal-400">
        Upcoming Event
      </p>
      <h2 className="font-display text-[3.2rem] md:text-[4.4rem] leading-tight text-white max-w-5xl">
        Sickle Cell Awareness & Free Genotype Testing Drive
      </h2>
      <p className="font-body text-[1.5rem] md:text-[1.6rem] text-neutral-400 leading-[1.8] max-w-4xl">
        Join us for a day of free genotype testing, counseling, and community
        support. Open to everyone — bring your family and friends.
      </p>
    </div>
  );
}

export default EventTopLabel;
