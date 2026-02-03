import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";

const Page = async () => {
  "use cache";
  cacheLife("hours");

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  // Use a relative path during build when BASE_URL is not set to avoid external HTML error pages
  const eventsUrl = BASE_URL ? `${BASE_URL}/api/events` : `/api/events`;

  let events: IEvent[] = [];
  try {
    const response = await fetch(eventsUrl);

    if (!response.ok) {
      const text = await response.text();
      console.error("Events fetch failed:", response.status, text);
    } else {
      const ct = response.headers.get("content-type") || "";
      if (ct.includes("application/json")) {
        const data = await response.json();
        events = data.events || [];
      } else {
        const text = await response.text();
        console.error(
          "Unexpected content-type when fetching events:",
          ct,
          text?.slice(0, 200),
        );
      }
    }
  } catch (err) {
    console.error("Error fetching events:", err);
  }

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

          <ul className="events">
            {events &&
              events.length > 0 &&
              events.map((event: IEvent) => (
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
