import getDomain from "@/app/_lib/getApiURL";
import { Key } from "react";
import VideoHeader from "@/app/_components/videoheader";
import FoodRow from "@/app/_components/foodrow";
import EquipmentRow from "@/app/_components/equipmentrow";
import { Trip, Equipment, Food } from "@/app/_lib/interface";

export default async function TripPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${getDomain()}/api/trips/${params.id}`);
  const jsonData = await res.json();

  console.log(`${getDomain()}/api/trips/${params.id}`);

  const trip: Trip = jsonData;
  const equipments: (number | Equipment)[] = trip.equipments;
  const foods: (number | Food)[] = trip.foods;

  return (
    <>
      <h1 className="text-3xl font-bold my-6">What Luke Packed This Trip</h1>
      <p className="mb-6">
        This is a list of gears we see Luke use this video. We provide a link to
        buy the gear if you want to support us.
      </p>
      <VideoHeader {...trip} />
      {/* <div className="mb-8">
        <h2 className="font-semibold mb-4">Food</h2>
        <div className="space-y-4">
          {foods.map((food: Food, key: Key) => (
            <FoodRow key={key} food={food}></FoodRow>
          ))}
        </div>
      </div> */}
      {/* <div className="mb-8">
        <h2 className="font-semibold mb-4">Equipment</h2>
        <div className="space-y-4">
          {equipments.map((equipment: Equipment, key: Key) => (
            <EquipmentRow key={key} equipment={equipment}></EquipmentRow>
          ))}
        </div>
      </div> */}
    </>
  );
}
