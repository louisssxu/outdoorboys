import getImageUrl from "@/lib/getImageUrl";
import { Trip } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";

export default function TripCard(trip: Trip) {
  const displayDate: string = trip.date.split("T")[0];
  return (
    <div className="relative w-full  xs:w-full md:w-1/2 xl:w-1/4 px-4 mb-8">
      <Link href={`trips/${trip.id}`}>
        <div className=" bg-secondary rounded outline-4 hover:outline">
          <div className="relative h-56">
            <Image
              src={getImageUrl(trip.youtubeUrl)}
              alt={trip.title}
              fill
              className="aspect-video overflow-hidden rounded-lg object-cover"
            />
          </div>
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
