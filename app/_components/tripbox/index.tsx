import { Trip } from "@/app/_lib/db";
import getImageUrl from "@/app/_lib/getImageUrl";
import Image from "next/image";

export default function TripBox(trip: Trip) {
  return (
    <div className=" w-full sm:w-1/2 md:w-1/4 px-4 mb-8 outline-dashed">
      {JSON.stringify(trip)}

      {/* 
      <Image
        src={getImageUrl(trip.youtubeUrl)}
        alt="Youtube Thumnail"
        fill
      ></Image> */}
    </div>
  );
}
