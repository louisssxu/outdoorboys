"use client";
import { Trip } from "../../_lib/db";
import { Key } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TripsPage() {
  const { data, error, isLoading } = useSWR("api/trips", fetcher);
  return (
    <>
      <h1>Lukes Trips</h1>
      {data &&
        data.trips.map((trip: Trip, index: Key) => (
          <div key={index}>{JSON.stringify(trip)}</div>
        ))}
    </>
  );
}
