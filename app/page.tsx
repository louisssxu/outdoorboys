import getDomain from "@/app/lib/getDomain";
import { json } from "stream/consumers";
import { Trip } from "./lib/db";
import { Key } from "react";

async function getData(): Promise<any> {
  const domain: string = getDomain();
  const endpoint: string = `${domain}/api/trips`;
  console.log(endpoint);

  try {
    const response = await fetch(endpoint, { cache: "no-store" });

    if (!response.ok) {
      console.error(
        `HTTP Error Response: ${response.status} ${response.statusText}`
      );
      throw new Error("failed to fetch data");
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Invalid content-type:", contentType);
      return {};
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // re-throwing the error after logging it
  }
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <div>
        <h1>
          {process.env.NEXT_PUBLIC_VERCEL_ENV === "development"
            ? "DEVELOPMENT ENVIRONMENT"
            : "DEPLOYMENT ENVIROMENT"}
        </h1>
      </div>
      <div>
        {data.trips &&
          data.trips.map((trip: Trip, index: Key) => (
            <div key={index}>{JSON.stringify(trip)}</div>
          ))}
      </div>
    </>
  );
}

export const runtime = "edge";
