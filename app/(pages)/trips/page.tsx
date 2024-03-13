import { Key } from "react";
import getApiURL from "@/app/_lib/getApiURL";
import TripCard from "@/app/_components/tripbox";
import axios from "axios";
import { Trip } from "@/app/_lib/interface";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default async function TripsPage() {
  // const { data, error, isLoading } = useSWR("api/trips", fetcher);
  // const data = await fetch(`${getDomain()}/api/trips`, {
  //   cache: "no-store",
  // });
  // const jsonData = await data.json();
  // const jsonData = await getTrips();
  console.log(getApiURL());
  const data = await axios.get(`${getApiURL()}/api/trips`);
  // console.log(data.data);
  const trips: Trip[] = data.data.docs;
  // console.log(trips);
  return (
    <>
      <h1 className="text-4xl font-bold m-2 mb-12">Lukes Trips</h1>
      <div className=" size-full flex flex-wrap -mx-4 ">
        {trips.map((trip: Trip, index: Key) => (
          <TripCard key={index} {...trip} />
        ))}
      </div>
    </>
  );
}
