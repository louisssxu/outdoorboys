import { Trip, insertTrip, getTrips } from "@/app/lib/db";
import { cookies } from "next/headers";

(async function main() {
  const trips: Trip[] = [
    {
      date: "2024-02-18",
      location: "Alaska",
      youtubeUrl:
        "https://www.youtube.com/watch?v=ggWZoH9PeIU&t=1059s&ab_channel=OutdoorBoys",
    },
    {
      date: "2000-01-11",
      location: "Foo",
      youtubeUrl: "Bar",
    },
  ];

  trips.forEach(async (trip) => {
    await insertTrip(trip);
  });
})();
