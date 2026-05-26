"use client";

import CalenderIcon from "@/components/ui/icons/calender";
import ClockIcon from "@/components/ui/icons/clock";
import LocationIcon from "@/components/ui/icons/location";

function EventDetails() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-[1.2rem] sm:gap-[1.6rem] flex-wrap">
      <div className="flex items-center gap-[1.2rem] bg-neutral-800 border border-neutral-700 rounded-full px-8 py-4">
        <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-teal-400/10 flex items-center justify-center shrink-0">
          <CalenderIcon className="text-teal-400" />
        </div>
        <span className="font-body text-[1.4rem] md:text-[1.5rem] text-neutral-200 whitespace-nowrap">
          June 20, 2026
        </span>
      </div>

      <div className="hidden sm:block w-[0.4rem] h-[0.4rem] rounded-full bg-neutral-600" />

      <div className="flex items-center gap-[1.2rem] bg-neutral-800 border border-neutral-700 rounded-full px-8 py-4">
        <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-teal-400/10 flex items-center justify-center shrink-0">
          <ClockIcon className="text-teal-400" />
        </div>
        <span className="font-body text-[1.4rem] md:text-[1.5rem] text-neutral-200 whitespace-nowrap">
          9am – 11am
        </span>
      </div>

      <div className="hidden sm:block w-[0.4rem] h-[0.4rem] rounded-full bg-neutral-600" />

      <a
        href="https://maps.app.goo.gl/dETQPfEnHtqGRVPQA"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[1.2rem] bg-neutral-800 border border-neutral-700 hover:border-teal-400/50 rounded-full px-8 py-4 transition-colors duration-200 group"
      >
        <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-teal-400/10 group-hover:bg-teal-400/20 flex items-center justify-center shrink-0 transition-colors duration-200">
          <LocationIcon className="text-teal-400" />
        </div>
        <span className="font-body text-[1.4rem] md:text-[1.5rem] text-neutral-200 group-hover:text-teal-400 whitespace-nowrap transition-colors duration-200">
          Walk Start At Peace Hotels 👈
        </span>
      </a>
    </div>
  );
}

export default EventDetails;
