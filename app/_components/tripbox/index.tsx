import { Trip } from "@/app/_lib/db";
import getImageUrl from "@/app/_lib/getImageUrl";
import Image from "next/image";
import Link from "next/link";

const onClickHandler = () => {};

export default function TripCard(trip: Trip) {
  return (
    <div className="relative w-full sm:w-full lg:w-1/2 xl:w-1/4 px-4 mb-8">
      <Link href={`trips/${trip.date}`}>
        <div className="bg-white rounded shadow">
          <img
            className="w-full h-64 object-cover rounded-t"
            src={getImageUrl(trip.youtubeUrl)}
            alt={trip.title}
          />
          <div className="p-4">
            <h5 className="text-xl font-semibold mb-2">{trip.title}</h5>
            <p className="text-gray-600">
              {trip.location} • {trip.date}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
