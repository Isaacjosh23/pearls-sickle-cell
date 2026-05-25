import EventCountdown from "./components/EventCountDown";
import EventCTA from "./components/EventCTA";
import EventDetails from "./components/EventDetails";
import EventTopLabel from "./components/EventTopLabel";

function UpcomingEvent() {
  return (
    <section
      id="event"
      className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-neutral-900"
    >
      <div className="max-w-384 mx-auto flex flex-col items-center text-center gap-16">
        <EventTopLabel />

        <EventDetails />

        <EventCountdown />

        <EventCTA />
      </div>
    </section>
  );
}

export default UpcomingEvent;
