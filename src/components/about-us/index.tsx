import VisionMission from "../VisionMission";
import Intro from "./components/Intro";
import CoreFocus from "./components/CoreFocus";
import Achievements from "./components/Achievements";

function AboutUs() {
  return (
    <section
      className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-white"
      id="about-us"
    >
      <div className="max-w-384 mx-auto">
        <p className="text-[1.2rem] tracking-[0.3em] uppercase mb-[1.6rem] text-(--color-red-500) font-semibold font-body">
          About Us
        </p>

        <h2 className="font-display text-[3.2rem] md:text-[4.8rem] leading-tight text-red-900 mb-[3.2rem]">
          What We Do
        </h2>

        <Intro />

        <VisionMission />

        <CoreFocus />

        <Achievements />
      </div>
    </section>
  );
}

export default AboutUs;
