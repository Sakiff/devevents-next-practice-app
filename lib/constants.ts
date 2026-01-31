export interface EventItem {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  description?: string;
}

export const events: EventItem[] = [
  {
    title: "Next.js Conf 2026",
    image: "/images/event-full.png",
    slug: "nextjs-conf-2026",
    location: "San Francisco, CA (Hybrid)",
    date: "May 12–14, 2026",
    time: "9:00 AM - 5:00 PM PT",
    description:
      "Official Next.js conference with talks, workshops, and community events.",
  },
  {
    title: "React Summit Amsterdam 2026",
    image: "/images/event1.png",
    slug: "react-summit-amsterdam-2026",
    location: "Amsterdam, Netherlands",
    date: "June 3–4, 2026",
    time: "10:00 AM - 6:00 PM CEST",
    description:
      "Large-scale React conference featuring core contributors and ecosystem talks.",
  },
  {
    title: "JSConf EU 2026",
    image: "/images/event2.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "Apr 22–24, 2026",
    time: "9:00 AM - 6:00 PM CEST",
    description:
      "Community-driven JavaScript conference with workshops and lightning talks.",
  },
  {
    title: "DevOps Days Austin 2026",
    image: "/images/event3.png",
    slug: "devops-days-austin-2026",
    location: "Austin, TX, USA",
    date: "Sep 15–16, 2026",
    time: "8:30 AM - 5:00 PM CDT",
    description:
      "Regional DevOps conference focusing on culture, automation and measurement.",
  },
  {
    title: "GraphQL Summit 2026",
    image: "/images/event4.png",
    slug: "graphql-summit-2026",
    location: "New York, NY, USA",
    date: "Oct 5, 2026",
    time: "9:30 AM - 4:30 PM ET",
    description:
      "Summit for GraphQL users, featuring case studies and tooling deep dives.",
  },
  {
    title: "HackMIT 2026",
    image: "/images/event5.png",
    slug: "hackmit-2026",
    location: "Cambridge, MA, USA",
    date: "Feb 21–23, 2026",
    time: "24-hour hackathon",
    description:
      "Student-run hackathon focused on building creative projects and rapid prototyping.",
  },
  {
    title: "DEV.to Local NYC — March Meetup 2026",
    image: "/images/event6.png",
    slug: "devto-local-nyc-2026",
    location: "New York, NY, USA",
    date: "Mar 10, 2026",
    time: "6:30 PM - 9:00 PM ET",
    description:
      "Local meetup for developers to share projects, talks, and networking.",
  },
];
