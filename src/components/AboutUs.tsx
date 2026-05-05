import AnnounceIcon from "./ui/icons/announce";
import CareIcon from "./ui/icons/care";
import CheckIcon from "./ui/icons/check";
import GavelIcon from "./ui/icons/gaval";
import MedicalIcon from "./ui/icons/medical";
import TargetIcon from "./ui/icons/target";
import TubeIcon from "./ui/icons/tube";

function AboutUs() {
  return (
    <section className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-cream">
      <div className="max-w-480 mx-auto">
        <p className="text-gold text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem] tracking-[0.3em] uppercase mb-[1.6rem] text-red-900 font-semibold">
          About Us
        </p>

        <div>
          <div>
            <div>
              <p className="text-red-900 text-[1.6rem] md:text-[1.8rem] leading-relaxed mb-6">
                Pearls Sickle Cell Initiative is a non-profit organization based
                in Ilorin, Kwara State, dedicated to improving the lives of
                individuals living with sickle cell disorder through advocacy,
                awareness, support, and access to care.
              </p>

              {/* Image Here */}
            </div>

            <div>
              {/* Image Here */}

              <p className="text-red-900 text-[1.6rem] md:text-[1.8rem] leading-relaxed mb-6">
                The initiative was founded by Titilayo Makinde and has grown
                into a strong voice in the sickle cell community—providing
                education, free genotype testing, counseling, and support
                systems for warriors and their families.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 mt-16 max-w-[90rem] mx-auto">
            <span className="inline-block text-[1.6rem] font-semibold text-red-900">
              Core Focus Areas
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col items-center gap-4">
                <AnnounceIcon className="size-16 text-white bg-neutral-800 p-4 rounded-full" />

                <p className="text-red-900 text-[1.6rem] md:text-[1.8rem] leading-relaxed mb-6 text-center">
                  Sickle Cell Awareness & Education (schools, communities,
                  campaigns)
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <TubeIcon className="size-16 text-white bg-neutral-800 p-4 rounded-full" />

                <p className="text-red-900 text-[1.6rem] md:text-[1.8rem] leading-relaxed mb-6 text-center">
                  Free Genotype Testing & Counseling
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <CareIcon className="size-16 text-white bg-neutral-800 p-4 rounded-full" />

                <p className="text-red-900 text-[1.6rem] md:text-[1.8rem] leading-relaxed mb-6 text-center">
                  Support Groups for Warriors & Caregivers
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <MedicalIcon className="size-16 text-white bg-neutral-800 p-4 rounded-full" />

                <p className="text-red-900 text-[1.6rem] md:text-[1.8rem] leading-relaxed mb-6 text-center">
                  Medical & Psychosocial Support
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <GavelIcon className="size-16 text-white bg-neutral-800 p-4 rounded-full" />

                <p className="text-red-900 text-[1.6rem] md:text-[1.8rem] leading-relaxed mb-6 text-center">
                  Advocacy to Reduce Stigma & Promote Informed Choices
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <TargetIcon className="size-16 text-white bg-neutral-800 p-4 rounded-full" />

                <p className="text-red-900 text-[1.6rem] md:text-[1.8rem] leading-relaxed mb-6 text-center">
                  Impact
                </p>
              </div>
            </div>

            <div className="mt-16">
              <span className="inline-block text-[1.6rem] font-semibold text-red-900 mb-4">
                The initiative has:
              </span>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <CheckIcon className="size-16 text-success p-2.5 rounded-full" />

                  <p className="text-red-900 text-[1.3rem] md:text-[1.8rem] leading-relaxed">
                    Sensitized thousands through youth outreach.
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <CheckIcon className="size-16 text-success p-2.5 rounded-full" />

                  <p className="text-red-900 text-[1.3rem] md:text-[1.8rem] leading-relaxed">
                    Offered free genotype testing and counseling.
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <CheckIcon className="size-16 text-success p-2.5 rounded-full" />

                  <p className="text-red-900 text-[1.3rem] md:text-[1.8rem] leading-relaxed">
                    Fostered a sickle cell support in Ilorin & beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
