function Awards() {
  return (
    <>
      <div className="border-l-[0.3rem] border-(--color-red-500) pl-[2.4rem] flex flex-col gap-[1.6rem]">
        <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.8] text-neutral-800">
          As a sickle cell advocate, Titilayo has bagged numerous awards for
          herself and her organisation. These include:
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
        <span className="font-semibold text-red-700">BBC News Yoruba</span>.
      </p>
    </>
  );
}

export default Awards;
