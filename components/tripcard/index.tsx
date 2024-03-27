import getImageUrl from "@/lib/getImageUrl";
import { Trip } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";

export default function TripCard(trip: Trip) {
  const displayDate: string = trip.date.split("T")[0];
  return (
    <div className="relative w-full sm:w-full lg:w-1/2 xl:w-1/4 px-4 mb-8">
      <Link href={`trips/${trip.id}`}>
        <div className=" bg-secondary rounded shadow">
          <img
            className="w-full h-64 object-cover rounded"
            src={getImageUrl(trip.youtubeUrl)}
            alt={trip.title}
          />
          <div className="p-4">
            <h5 className="text-xl font-semibold mb-2">{trip.title}</h5>
            <p className=" text-muted-foreground">
              {trip.location} • {displayDate}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
