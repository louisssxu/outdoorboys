import getDomain from "@/lib/getApiURL";
import { Key } from "react";
import VideoHeader from "@/components/videoheader";
import EquipmentRow from "@/components/equipmentrow";
import { Trip, Equipment } from "@/lib/interface";
import { fetcher } from "@/lib/fetcher";

// for faster routing fetch trip -> equipments -> media from /trips page and pass it as props

export default async function TripPage({ params }: { params: { id: string } }) {
  const data = await fetcher(
    `${getDomain()}/api/trips/${
      params.id
    }?populate[equipments][populate][0]=media`
  );
  const trip: Trip = data.data;
  const equipments: Equipment[] = trip.attributes.equipments?.data || [];

  return (
    <div className="container relative">
      <h1 className="text-4xl font-bold mx-8 my-12">
        What Luke Packed This Trip
      </h1>
      <p className="mb-6 text-muted-foreground">
        This is a list of gears we see Luke use this video. We provide a link to
        buy the gear if you want to support us.
      </p>
      <VideoHeader {...trip} />

      <div className="mt-8">
        <h2 className="font-semibold mb-4 text-xl ">Equipments</h2>
        <div className="space-y-4 flex flew-wrap">
          {equipments.map((equipment: Equipment, key: Key) => (
            <EquipmentRow key={key} {...equipment}></EquipmentRow>
          ))}
        </div>
      </div>
    </div>
  );
}
