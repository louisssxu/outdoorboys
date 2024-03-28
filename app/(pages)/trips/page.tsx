import { Key } from "react";
import getApiURL from "@/lib/getApiURL";
import TripCard from "@/components/tripcard";
import { Trip } from "@/lib/interface";

export default async function TripsPage() {
  const data = await fetch(`${getApiURL()}/api/trips`, {
    cache: "no-store",
  });
  const jsonData = await data.json();
  const trips: Trip[] = jsonData.docs;
  return (
    <div className="container min-h-screen">
      <h1 className="text-4xl font-bold m-12">Luke's Trips ✈︎</h1>
      <div className=" size-full flex flex-wrap -mx-4 ">
        {trips.map((trip: Trip, index: Key) => (
          <TripCard key={index} {...trip} />
        ))}
      </div>
    </div>
  );
}
