import { Trip } from "../../_lib/db";
import { Key } from "react";
import getDomain from "@/app/_lib/getDomain";
import TripCard from "@/app/_components/tripbox";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default async function TripsPage() {
  // const { data, error, isLoading } = useSWR("api/trips", fetcher);
  const data = await fetch(`${getDomain()}/api/trips`, {
    cache: "no-store",
  });
  const jsonData = await data.json();
  return (
    <>
      <h1 className="text-4xl font-bold m-2 mb-12">Lukes Trips</h1>
      <div className=" size-full flex flex-wrap -mx-4 ">
        {jsonData &&
          jsonData.trips.map((trip: Trip, index: Key) => (
            <TripCard key={index} {...trip} />
          ))}
      </div>
    </>
  );
}
