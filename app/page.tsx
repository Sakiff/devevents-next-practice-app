import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";
import { events } from "@/lib/constants";

const Page = async () => {
  "use cache";
  cacheLife("hours");

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  // const response = await fetch(`${BASE_URL}/api/events`);
  // const { events } = await response.json();

  return (
    <section>
      <div className="mt-10 lg:my-20">
        <h1 className="text-center">
          The Hub for Every Dev <br /> Event You Can&apos;t Miss
        </h1>
        <p className="text-center mt-5">
          Hackathons, Meetups and Conferences All in One Place
        </p>
        <ExploreBtn />
      </div>

      <section id="events_section" className="mt-30 lg:mt-50">
        <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>
          {/* eventin typena : IEvent elave ele */}
          <ul className="events">
            {events &&
              events.length > 0 &&
              events.map((event) => (
                <li key={event.title}>
                  <EventCard {...event} />
                </li>
              ))}
          </ul>
        </div>
      </section>
    </section>
  );
};
export default Page;
