"use client";

interface CountdownUnitProps {
  value: number;
  label: string;
}

function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center gap-[0.8rem]">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-neutral-800 border border-teal-400/20 flex items-center justify-center">
        <span className="font-display text-[3.6rem] md:text-[4.8rem] text-teal-400 leading-none">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-body text-[1.1rem] md:text-[1.2rem] tracking-[0.2em] uppercase text-neutral-400">
        {label}
      </span>
    </div>
  );
}

export default CountdownUnit;
