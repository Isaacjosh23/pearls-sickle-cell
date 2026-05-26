"use client";

import { useEffect, useState } from "react";
import CountdownUnit from "./CountdownUnit";
import calculateTimeLeft from "./calculateTime";
import EventCTA from "./EventCTA";

export const EVENT_DATE = new Date("2026-06-20T09:00:00");

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function EventCountDown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [eventPassed, setEventPassed] = useState(false);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);

      if (
        remaining.days === 0 &&
        remaining.hours === 0 &&
        remaining.minutes === 0 &&
        remaining.seconds === 0
      ) {
        setEventPassed(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="flex flex-col gap-16 items-center">
      {eventPassed ? (
        <div className="flex flex-col items-center gap-[1.6rem]">
          <p className="font-display text-[2.8rem] text-teal-400">
            The event is happening now!
          </p>
          <p className="font-body text-[1.6rem] text-neutral-400">
            See you there. 🎉
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-[0.8rem] sm:gap-[1.6rem] md:gap-[2.4rem]">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <span className="font-display text-[2rem] sm:text-[3rem] md:text-[4.8rem] text-(--color-teal-400)/50 mb-[2.8rem] leading-none">
            :
          </span>
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <span className="font-display text-[2rem] sm:text-[3rem] md:text-[4.8rem] text-(--color-teal-400)/50 mb-[2.8rem] leading-none">
            :
          </span>
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <span className="font-display text-[2rem] sm:text-[3rem] md:text-[4.8rem] text-(--color-teal-400)/50 mb-[2.8rem] leading-none">
            :
          </span>
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      )}

      {!eventPassed && <EventCTA />}
    </div>
  );
}

export default EventCountDown;
