"use client";

import Image from "next/image";

function AboutFounder() {
  return (
    <section className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-neutral-100">
      <div className="max-w-384 mx-auto">
        <p className="text-[1.2rem] tracking-[0.3em] uppercase mb-[1.6rem] text-(--color-red-500) font-semibold">
          About Founder
        </p>

        <div className="flex flex-col md:flex-row gap-[4.8rem] items-start mb-[6.4rem]">
          <div className="w-full md:w-xl shrink-0">
            <Image
              src="/images/titi-2.jpg"
              alt="Titilayo Makinde, Founder of Pearls Sickle Cell Initiative"
              width={360}
              height={460}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col gap-[2.4rem]">
            <h2 className="font-display text-[3.2rem] md:text-[4rem] leading-tight text-red-900">
              Mrs. Makinde Titilayo
            </h2>

            <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800">
              Titilayo is a Sickle Cell Warrior, Educator and Advocate
              passionate about promoting access to quality healthcare for
              individuals who live with sickle cell and creating awareness about
              sickle cell while sharing her story of late diagnosis and partial
              blindness.
            </p>

            <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800">
              Recognized as supporting Sickle Cell warriors and advocating daily
              for the disorder, Titilayo strives to live her best life while
              being a champion for the cause. As the President of the{" "}
              <span className="font-semibold text-red-700">
                Ilorin Warriors Hub
              </span>
              , she educates and supports sickle cell warriors in Ilorin.
            </p>

            <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800">
              She is the founder of{" "}
              <span className="font-semibold text-red-700">
                Pearls Sickle Cell Initiative
              </span>{" "}
              — an initiative that stands for Advocacy and Management of Sickle
              Cell in Kwara state. She is also the visionary behind the first
              ever structured sickle cell charity pharmacy in West Africa, an
              innovative idea that seeks to provide sickle cell drugs all year
              round to indigent sickle cell warriors.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.1rem] bg-neutral-300 mb-[6.4rem]" />

        {/* Block 2 — second bio left, image right */}
        <div className="flex flex-col md:flex-row-reverse gap-[4.8rem] items-start">
          <div className="w-full md:w-xl shrink-0">
            <Image
              src="/images/titi-1.jpg"
              alt="Titilayo Makinde at a sickle cell advocacy event"
              width={360}
              height={460}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col gap-[2.4rem]">
            <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800">
              Prior to founding Pearls Sickle Cell Initiative, Titilayo served
              in different volunteering roles for various NGOs and as a
              Volunteering Team Lead with different organisations. She is
              passionate about supporting people who live with sickle cell and
              their caregivers — especially women who have children with sickle
              cell.
            </p>

            <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800">
              She is also a{" "}
              <span className="font-semibold text-red-700">
                Certified Emotional Intelligence Coach
              </span>{" "}
              and Community Health Advocate and Trainer under the LifeFount
              Institute.
            </p>

            {/* Awards block */}
            <div className="border-l-[0.3rem] border-(--color-red-500) pl-[2.4rem] flex flex-col gap-[1.6rem]">
              <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800">
                As a sickle cell advocate, Titilayo has bagged numerous awards
                for herself and her organisation. These include:
              </p>
              <ul className="flex flex-col gap-[1.2rem]">
                {[
                  "Induction into the Kwara State Directorate of the National Orientation Agency Hall of Fame",
                  "Award of Excellence — Oladipupo Olaleye National Sickle Cell Advocate of the Year",
                  "Citizens of Excellence in Community Development by the Kwara State Government",
                ].map((award) => (
                  <li
                    key={award}
                    className="flex items-start gap-[1.2rem] text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800"
                  >
                    <span className="mt-[0.6rem] w-[0.6rem] h-[0.6rem] rounded-full bg-(--color-red-500) shrink-0" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800">
              Her work has been featured on both local and international media
              outlets, including{" "}
              <span className="font-semibold text-red-700">
                BBC News Yoruba
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFounder;
