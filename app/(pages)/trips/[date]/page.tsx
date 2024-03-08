import { Equipment } from "@/app/_lib/db";
import getDomain from "@/app/_lib/getDomain";
import { eq } from "drizzle-orm";
import { Key } from "react";

export default async function TripPage({
  params,
}: {
  params: { date: string };
}) {
  // const data = await fetch(`/api/trips/${params.date}`);

  console.log(params.date);
  const data = await fetch(`${getDomain()}/api/trips/${params.date}`, {
    cache: "no-store",
  });
  const jsonData = await data.json();

  return (
    <>
      <div>Trip page</div>
      <h2>Trip:</h2>
      <div>{JSON.stringify(jsonData.trip)}</div>
      <h2>Equipments:</h2>
      {jsonData.equipments &&
        jsonData.equipments.map((equipment: Equipment, index: Key) => (
          <div key={index}>{JSON.stringify(equipment)}</div>
        ))}
      <h2>Foods:</h2>
      {jsonData.foods &&
        jsonData.foods.map((food: any, index: Key) => (
          <div key={index}>{JSON.stringify(food)}</div>
        ))}
    </>
  );
}
