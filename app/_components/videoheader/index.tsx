import Link from "next/link";
import getImageUrl from "@/app/_lib/getImageUrl";
import { Trip } from "@/app/_lib/interface";

export default async function VideoHeader(trip: Trip) {
  const displayDate: string = trip.date.split("T")[0];
  return (
    <>
      <div className="container mx-auto p-4 bg-white rounded shadow ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <span className="block mb-2 text-gray-600">{displayDate}</span>
            <span className="block font-semibold mb-2">{trip.title}</span>
            <span className="block mb-2 text-gray-600">{trip.location}</span>
            <button className="py-2 px-4 bg-black text-white rounded">
              <Link href={trip.youtubeUrl} target="_blank">
                Watch Now
              </Link>
            </button>
          </div>
          <div className="md:w-1/3">
            <img
              className="w-full h-auto rounded my-2"
              src={getImageUrl(trip.youtubeUrl)}
              alt="Youtube Thumbnail"
            />
          </div>
        </div>
      </div>
    </>
  );
}
