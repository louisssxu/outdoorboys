import Link from "next/link";
import getImageUrl from "@/lib/getImageUrl";
import { Trip } from "@/lib/interface";
import { Button } from "../ui/button";
import Image from "next/image";

export default async function VideoHeader(trip: Trip) {
  const displayDate: string = trip.date.split("T")[0];
  return (
    <>
      <div className="container mx-auto p-4 rounded border ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <span className="block mb-2 text-muted-foreground">
              {displayDate}
            </span>
            <span className="block font-semibold mb-2">{trip.title}</span>
            <span className="block mb-2 text-muted-foreground">
              {trip.location}
            </span>
            <Button>
              <Link href={trip.youtubeUrl} target="_blank" className="w-full">
                Watch Now
              </Link>
            </Button>
          </div>
          <div className=" relative md:w-1/3 aspect-video">
            <Image
              src={getImageUrl(trip.youtubeUrl)}
              alt={trip.title}
              fill
              className="aspect-video overflow-hidden rounded-lg object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
