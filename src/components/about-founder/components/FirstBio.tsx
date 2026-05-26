import Image from "next/image";
import FounderOne from "../../../../public/assets/images/founder/titi-2.jpg";

function FirstBio() {
  return (
    <div className="flex flex-col md:flex-row gap-[4.8rem] items-start mb-[6.4rem]">
      <div className="w-full md:w-xl shrink-0">
        <Image
          src={FounderOne}
          alt="Titilayo Makinde, Founder of Pearls Sickle Cell Initiative"
          width={360}
          height={460}
          className="w-full h-auto rounded-lg object-cover"
          style={{ height: "auto" }}
        />
      </div>

      <div className="flex flex-col gap-[2.4rem]">
        <h2 className="font-display text-[3.2rem] md:text-[4rem] leading-tight text-red-900">
          Mrs. Makinde Titilayo
        </h2>

        <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800">
          Titilayo is a Sickle Cell Warrior, Educator and Advocate passionate
          about promoting access to quality healthcare for individuals who live
          with sickle cell and creating awareness about sickle cell while
          sharing her story of late diagnosis and partial blindness.
        </p>

        <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800">
          Recognized as supporting Sickle Cell warriors and advocating daily for
          the disorder, Titilayo strives to live her best life while being a
          champion for the cause. As the President of the{" "}
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
          — an initiative that stands for Advocacy and Management of Sickle Cell
          in Kwara state. She is also the visionary behind the first ever
          structured sickle cell charity pharmacy in West Africa, an innovative
          idea that seeks to provide sickle cell drugs all year round to
          indigent sickle cell warriors.
        </p>
      </div>
    </div>
  );
}

export default FirstBio;
