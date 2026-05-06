import AnnounceIcon from "./ui/icons/announce";
import CareIcon from "./ui/icons/care";
import CheckIcon from "./ui/icons/check";
import GavelIcon from "./ui/icons/gaval";
import MedicalIcon from "./ui/icons/medical";
import TargetIcon from "./ui/icons/target";
import TubeIcon from "./ui/icons/tube";
import VisionMission from "./VisionMission";

function AboutUs() {
  return (
    <section
      className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-white"
      id="about-us"
    >
      <div className="max-w-384 mx-auto">
        {/* Section label */}
        <p className="text-[1.2rem] tracking-[0.3em] uppercase mb-[1.6rem] text-(--color-red-500) font-semibold font-body">
          About Us
        </p>

        {/* Section heading */}
        <h2 className="font-display text-[3.2rem] md:text-[4.8rem] leading-tight text-red-900 mb-[3.2rem]">
          What We Do
        </h2>

        {/* Intro paragraphs */}
        <div className="flex flex-col gap-[2.4rem] mb-[4.8rem]">
          <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.8rem] leading-relaxed">
            Pearls Sickle Cell Initiative is a non-profit organization based in
            Ilorin, Kwara State, dedicated to improving the lives of individuals
            living with sickle cell disorder through advocacy, awareness,
            support, and access to care.
          </p>

          <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.8rem] leading-relaxed">
            The initiative was founded by{" "}
            <span className="font-semibold text-red-700">Titilayo Makinde</span>{" "}
            and has grown into a strong voice in the sickle cell community —
            providing education, free genotype testing, counseling, and support
            systems for warriors and their families.
          </p>
        </div>

        <VisionMission />

        {/* Core Focus Areas */}
        <div className="flex flex-col items-center gap-[3.2rem] max-w-360 mx-auto">
          <h3 className="font-display text-[2.4rem] md:text-[3.2rem] text-red-900">
            Core Focus Areas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3.2rem] w-full">
            <div className="flex flex-col items-center gap-[1.6rem]">
              <AnnounceIcon className="size-16 text-white bg-(--color-red-500) p-4 rounded-full" />
              <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.7rem] leading-relaxed text-center">
                Sickle Cell Awareness & Education (schools, communities,
                campaigns)
              </p>
            </div>

            <div className="flex flex-col items-center gap-[1.6rem]">
              <TubeIcon className="size-16 text-white bg-(--color-red-500) p-4 rounded-full" />
              <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.7rem] leading-relaxed text-center">
                Free Genotype Testing & Counseling
              </p>
            </div>

            <div className="flex flex-col items-center gap-[1.6rem]">
              <CareIcon className="size-16 text-white bg-(--color-red-500) p-4 rounded-full" />
              <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.7rem] leading-relaxed text-center">
                Support Groups for Warriors & Caregivers
              </p>
            </div>

            <div className="flex flex-col items-center gap-[1.6rem]">
              <MedicalIcon className="size-16 text-white bg-(--color-red-500) p-4 rounded-full" />
              <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.7rem] leading-relaxed text-center">
                Medical & Psychosocial Support
              </p>
            </div>

            <div className="flex flex-col items-center gap-[1.6rem]">
              <GavelIcon className="size-16 text-white bg-(--color-red-500) p-4 rounded-full" />
              <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.7rem] leading-relaxed text-center">
                Advocacy to Reduce Stigma & Promote Informed Choices
              </p>
            </div>

            <div className="flex flex-col items-center gap-[1.6rem]">
              <TargetIcon className="size-16 text-white bg-(--color-red-500) p-4 rounded-full" />
              <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.7rem] leading-relaxed text-center">
                Impact-Driven Community Outreach
              </p>
            </div>
          </div>
        </div>

        {/* The initiative has */}
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
                <CheckIcon className="size-16 text-success p-2.5 rounded-full shrink-0" />
                <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.8rem] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
