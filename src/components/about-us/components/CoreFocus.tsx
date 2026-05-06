import AnnounceIcon from "@/components/ui/icons/announce";
import CareIcon from "@/components/ui/icons/care";
import GavelIcon from "@/components/ui/icons/gaval";
import MedicalIcon from "@/components/ui/icons/medical";
import TargetIcon from "@/components/ui/icons/target";
import TubeIcon from "@/components/ui/icons/tube";

function CoreFocus() {
  return (
    <div className="flex flex-col items-center gap-[3.2rem] max-w-360 mx-auto">
      <h3 className="font-display text-[2.4rem] md:text-[3.2rem] text-red-900">
        Core Focus Areas
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3.2rem] w-full">
        <div className="flex flex-col items-center gap-[1.6rem]">
          <AnnounceIcon className="size-16 text-white bg-(--color-red-500) p-4 rounded-full" />
          <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.7rem] leading-relaxed text-center">
            Sickle Cell Awareness & Education (schools, communities, campaigns)
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
  );
}

export default CoreFocus;
