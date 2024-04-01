import { Key } from "react";
import getApiURL from "@/lib/getApiURL";
import TripCard from "@/components/tripcard";
import { Trip } from "@/lib/interface";
import { fetcher } from "@/lib/fetcher";

export default async function TripsPage() {
  const data = await fetcher(`${getApiURL()}/api/trips?sort=date:desc`);

  const trips: Trip[] = data.data;

  return (
    <div className="container min-h-screen">
      <h1 className="text-4xl font-bold mx-8 my-12">Lukes Trips</h1>
      <div className=" size-full flex flex-wrap flex-row  ">
        {trips.map((trip: Trip, index: Key) => (
          <TripCard key={index} {...trip} />
        ))}
      </div>
    </div>
  );
}
