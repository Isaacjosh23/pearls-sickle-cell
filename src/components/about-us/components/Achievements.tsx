import CheckIcon from "@/components/ui/icons/check";

function Achievements() {
  return (
    <div className="mt-[6.4rem] max-w-360 mx-auto">
      <h3 className="font-display text-[2.4rem] md:text-[3.2rem] text-red-900 mb-[3.2rem]">
        The initiative has:
      </h3>

      <div className="flex flex-col gap-8">
        {[
          "Sensitized thousands through youth outreach.",
          "Offered free genotype testing and counseling.",
          "Fostered a sickle cell support community in Ilorin & beyond.",
        ].map((item) => (
          <div key={item} className="flex items-center gap-[1.6rem]">
            <CheckIcon className="size-16 text-teal-400 p-2.5 rounded-full shrink-0" />
            <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.8rem] leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
