"use client";

import { Icon } from "@/components/ui/icons";
import { Icons } from "@/components/ui/icons/_types";

function EventDetails() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-[1.2rem] sm:gap-[1.6rem] flex-wrap">
      {/* Date */}
      <div className="flex items-center gap-[1.2rem] bg-neutral-800 border border-neutral-700 rounded-full px-8 py-4">
        <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-teal-400/10 flex items-center justify-center shrink-0">
          <Icon type={Icons.Calender} className="text-teal-400" />
        </div>
        <span className="font-body text-[1.4rem] md:text-[1.5rem] text-neutral-200 whitespace-nowrap">
          September 19, 2026
        </span>
      </div>

      <div className="hidden sm:block w-[0.4rem] h-[0.4rem] rounded-full bg-neutral-600" />

      {/* Location */}
      <a
        href="https://maps.app.goo.gl/Nt2pCoWbMiceg8i18"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[1.2rem] bg-neutral-800 border border-neutral-700 hover:border-teal-400/50 rounded-full px-8 py-4 transition-colors duration-200 group"
      >
        <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-teal-400/10 group-hover:bg-teal-400/20 flex items-center justify-center shrink-0 transition-colors duration-200">
          <Icon type={Icons.Location} className="text-teal-400" />
        </div>
        <span className="font-body text-[1.4rem] md:text-[1.5rem] text-neutral-200 group-hover:text-teal-400 whitespace-nowrap transition-colors duration-200">
          Pearls Sickle Cell Initiative Office 👈
        </span>
      </a>

      <div className="hidden sm:block w-[0.4rem] h-[0.4rem] rounded-full bg-neutral-600" />

      {/* Time */}
      <div className="flex items-center gap-[1.2rem] bg-neutral-800 border border-neutral-700 rounded-full px-8 py-4">
        <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-teal-400/10 flex items-center justify-center shrink-0">
          <Icon type={Icons.Clock} className="text-teal-400" />
        </div>
        <span className="font-body text-[1.4rem] md:text-[1.5rem] text-neutral-200 whitespace-nowrap">
          11:00 AM
        </span>
      </div>

      <div className="hidden sm:block w-[0.4rem] h-[0.4rem] rounded-full bg-neutral-600" />

      {/* Phone */}
      <a
        href="tel:+2349064090011"
        className="flex items-center gap-[1.2rem] bg-neutral-800 border border-neutral-700 hover:border-teal-400/50 rounded-full px-8 py-4 transition-colors duration-200 group"
      >
        <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-teal-400/10 group-hover:bg-teal-400/20 flex items-center justify-center shrink-0 transition-colors duration-200">
          <Icon
            type={Icons.Phone}
            className="w-[1.6rem] h-[1.6rem] text-teal-400"
          />
        </div>
        <span className="font-body text-[1.4rem] md:text-[1.5rem] text-neutral-200 group-hover:text-teal-400 whitespace-nowrap transition-colors duration-200">
          09064090011 👈
        </span>
      </a>
    </div>
  );
}

export default EventDetails;
