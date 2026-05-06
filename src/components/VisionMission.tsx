function VisionMission() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[3.2rem] my-[4.8rem] ">
      {/* Vision */}
      <div className="flex flex-col items-center text-center gap-[2rem] bg-(--color-neutral-50) border border-(--color-neutral-200) rounded-2xl p-[4rem] shadow-sm">
        {/* Icon */}
        <div className="w-[6.4rem] h-[6.4rem] rounded-full bg-(--color-red-50) border border-(--color-red-100) flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[2.8rem] h-[2.8rem]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E8302E"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>

        <h3 className="font-display text-[2.4rem] text-(--color-red-900)">
          Our Vision
        </h3>

        <p className="font-body text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-(--color-neutral-700)">
          A society where sickle cell births are no longer recorded; where
          Sickle Cell warriors are treated well and given equal opportunities to
          develop and activate their potentials.
        </p>
      </div>

      {/* Mission */}
      <div className="flex flex-col items-center text-center gap-[2rem] bg-(--color-neutral-50) border border-(--color-neutral-200) rounded-2xl p-[4rem] shadow-sm">
        {/* Icon */}
        <div className="w-[6.4rem] h-[6.4rem] rounded-full bg-(--color-red-50) border border-(--color-red-100) flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[2.8rem] h-[2.8rem]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E8302E"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M12 8v4l3 3" />
          </svg>
        </div>

        <h3 className="font-display text-[2.4rem] text-(--color-red-900)">
          Our Mission
        </h3>

        <ul className="flex flex-col gap-[1.6rem] text-left">
          {[
            "To educate the society on accurate sickle cell and genotype information.",
            "To bring forward the perspectives and expertise of people living with Sickle Cell, affected by, and at risk of having children with Sickle Cell.",
            "To advocate for approaches to guarantee access to comprehensive Sickle Cell prevention, treatment, care and support for Sickle Cell Warriors.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-[1.2rem]">
              <span className="mt-[0.8rem] w-[0.6rem] h-[0.6rem] rounded-full bg-(--color-red-500) shrink-0" />
              <p className="font-body text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-(--color-neutral-700)">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VisionMission;
