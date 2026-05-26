"use client";

const GOOGLE_FORM_URL = "https://forms.gle/1aPEG54d9yqyDZHP9";

function EventCTA() {
  return (
    <a
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="font-body font-semibold text-[1.5rem] md:text-[1.6rem] bg-teal-400 text-neutral-900 px-[3.2rem] py-[1.4rem] rounded-full hover:bg-teal-300 transition-colors duration-300"
    >
      Join the Event
    </a>
  );
}

export default EventCTA;
