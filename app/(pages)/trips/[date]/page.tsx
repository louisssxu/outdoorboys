import { Equipment, Food, Trip } from "@/app/_lib/db";
import getDomain from "@/app/_lib/getDomain";
import { Key } from "react";
import VideoHeader from "@/app/_components/videoheader";
import FoodRow from "@/app/_components/foodrow";
import EquipmentRow from "@/app/_components/equipmentrow";

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
  const trip: Trip = jsonData.trip;
  const equipments: Equipment[] = jsonData.equipments;
  const foods: Food[] = jsonData.foods;

  return (
    <>
      <h1 className="text-3xl font-bold my-6">What Luke Packed This Trip</h1>
      <p className="mb-6">
        This is a list of gears we see Luke use this video. We provide a link to
        buy the gear if you want to support us.
      </p>
      <VideoHeader trip={trip} />
      <div className="mb-8">
        <h2 className="font-semibold mb-4">Food</h2>
        <div className="space-y-4">
          {foods.map((food: Food, key: Key) => (
            <FoodRow key={key} food={food}></FoodRow>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="font-semibold mb-4">Equipment</h2>
        <div className="space-y-4">
          {equipments.map((equipment: Equipment, key: Key) => (
            <EquipmentRow key={key} equipment={equipment}></EquipmentRow>
          ))}
        </div>
      </div>
    </>
  );
}
