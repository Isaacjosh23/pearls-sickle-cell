"use client";

function EventTopLabel() {
  return (
    <div className="flex flex-col items-center gap-[1.6rem]">
      <p className="font-body text-[1.2rem] tracking-[0.3em] uppercase font-semibold text-teal-400">
        Upcoming Event
      </p>
      <h2 className="font-display text-[3.2rem] md:text-[4.4rem] leading-tight text-white max-w-5xl">
        The Sickle Cell Walk 👣
      </h2>
      <p className="font-body text-[1.5rem] md:text-[1.6rem] text-neutral-400 leading-[1.8] max-w-4xl">
        Theme: Closing The Survival Gap: Equity In The Sickle Cell Care
      </p>
    </div>
  );
}

export default EventTopLabel;
