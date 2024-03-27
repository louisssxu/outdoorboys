import Link from "next/link";
import getImageUrl from "@/lib/getImageUrl";
import { Trip } from "@/lib/interface";
import { Button } from "../ui/button";

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
              <Link href={trip.youtubeUrl} target="_blank">
                Watch Now
              </Link>
            </Button>
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
