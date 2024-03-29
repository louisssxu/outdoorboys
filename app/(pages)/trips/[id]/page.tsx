import getDomain from "@/lib/getApiURL";
import { Key } from "react";
import VideoHeader from "@/components/videoheader";
import FoodRow from "@/components/foodrow";
import EquipmentRow from "@/components/equipmentrow";
import { Trip, Equipment, Food } from "@/lib/interface";

export default async function TripPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${getDomain()}/api/trips/${params.id}`, {
    cache: process.env.NODE_ENV === "development" ? "no-cache" : "force-cache",
  });
  const jsonData = await res.json();

  const trip: Trip = jsonData;
  // const equipments: (number | Equipment)[] = trip.equipments;
  const equipments: Equipment[] = trip.equipments;
  const foods: Food[] = trip.foods;

  return (
    <div className="container relative">
      <h1 className="text-3xl font-bold my-6">What Luke Packed This Trip</h1>
      <p className="mb-6">
        This is a list of gears we see Luke use this video. We provide a link to
        buy the gear if you want to support us.
      </p>
      <VideoHeader {...trip} />
      {/* <div className="mt-8">
        <h2 className="font-semibold mb-4">Food</h2>
        <div className="space-y-4">
          {foods.map((food: Food, key: Key) => (
            <FoodRow key={key} {...food}></FoodRow>
          ))}
        </div>
      </div> */}
      <div className="mt-8">
        <h2 className="font-semibold mb-4">Equipment</h2>
        <div className="space-y-4 flex flew-wrap">
          {equipments.map((equipment: Equipment, key: Key) => (
            <EquipmentRow key={key} {...equipment}></EquipmentRow>
          ))}
        </div>
      </div>
    </div>
  );
}
