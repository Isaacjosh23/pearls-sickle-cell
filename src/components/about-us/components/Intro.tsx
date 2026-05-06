import Image from "next/image";
import AboutOne from "../../../../public/assets/images/about-us/about-1.jpg";
import AboutTwo from "../../../../public/assets/images/about-us/about-2.jpg";

function Intro() {
  return (
    <div className="flex flex-col gap-12 mb-[4.8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[2.4rem]">
        <Image
          src={AboutOne}
          alt="About Us"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg mb-6 md:mb-0 object-cover object-center"
        />

        <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.8rem] leading-relaxed">
          Pearls Sickle Cell Initiative is a non-profit organization based in
          Ilorin, Kwara State, dedicated to improving the lives of individuals
          living with sickle cell disorder through advocacy, awareness, support,
          and access to care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[2.4rem]">
        <p className="font-body text-neutral-800 text-[1.6rem] md:text-[1.8rem] leading-relaxed">
          The initiative was founded by{" "}
          <span className="font-semibold text-red-700">Titilayo Makinde</span>{" "}
          and has grown into a strong voice in the sickle cell community —
          providing education, free genotype testing, counseling, and support
          systems for warriors and their families.
        </p>

        <Image
          src={AboutTwo}
          alt="about us"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg mb-6 md:mb-0 object-cover object-center"
        />
      </div>
    </div>
  );
}

export default Intro;
