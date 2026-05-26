"use client";

import CalenderIcon from "@/components/ui/icons/calender";
import ClockIcon from "@/components/ui/icons/clock";
import LocationIcon from "@/components/ui/icons/location";

function EventDetails() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-[2.4rem] sm:gap-[4.8rem]">
      <div className="flex items-center gap-[1.2rem]">
        <div className="w-16 h-16 rounded-full bg-teal-400/10 flex items-center justify-center">
          <CalenderIcon className="text-teal-400" />
        </div>
        <span className="font-body text-[1.5rem] text-neutral-300">
          June 20, 2026
        </span>
      </div>

      <div className="hidden sm:block w-[0.1rem] h-[2.4rem] bg-neutral-700" />

      <div className="flex items-center gap-[1.2rem]">
        <div className="w-16 h-16 rounded-full bg-teal-400/10 flex items-center justify-center">
          <ClockIcon className="text-teal-400" />
        </div>
        <span className="font-body text-[1.5rem] text-neutral-300">
          9am - 11am
        </span>
      </div>

      <div className="hidden sm:block w-[0.1rem] h-[2.4rem] bg-neutral-700" />

      <div className="flex items-center gap-[1.2rem]">
        <div className="w-16 h-16 rounded-full bg-teal-400/10 flex items-center justify-center">
          <LocationIcon className="text-teal-400" />
        </div>
        <div className="flex items-center">
          <a
            className="font-body text-[1.5rem] text-neutral-300 underline hover:no-underline"
            href="https://maps.app.goo.gl/dETQPfEnHtqGRVPQA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Walk Start At Peace Hotels
          </a>
          <span>👈</span>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
