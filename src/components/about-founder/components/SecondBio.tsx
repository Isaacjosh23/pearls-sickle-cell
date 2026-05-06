import Image from "next/image";
import FounderTwo from "@/assets/images/founder/titi-1.jpg";
import Awards from "./Awards";

function SecondBio() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-[4.8rem] items-start">
      <div className="w-full md:w-xl shrink-0">
        <Image
          src={FounderTwo}
          alt="Titilayo Makinde at a sickle cell advocacy event"
          width={360}
          height={460}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-col gap-[2.4rem]">
        <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800">
          Prior to founding Pearls Sickle Cell Initiative, Titilayo served in
          different volunteering roles for various NGOs and as a Volunteering
          Team Lead with different organisations. She is passionate about
          supporting people who live with sickle cell and their caregivers —
          especially women who have children with sickle cell.
        </p>

        <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800">
          She is also a{" "}
          <span className="font-semibold text-red-700">
            Certified Emotional Intelligence Coach
          </span>{" "}
          and Community Health Advocate and Trainer under the LifeFount
          Institute.
        </p>

        <Awards />
      </div>
    </div>
  );
}

export default SecondBio;
