import Link from "next/link";
import getImageUrl from "@/lib/getImageUrl";
import { Trip } from "@/lib/interface";
import { Button } from "../ui/button";
import Image from "next/image";

export default async function VideoHeader(trip: Trip) {
  const attributes = trip.attributes;
  return (
    <>
      <div className="container mx-auto p-4 rounded border ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <span className="block mb-2 text-muted-foreground">
              {attributes.date}
            </span>
            <span className="block font-semibold mb-2">{attributes.title}</span>
            <span className="block mb-2 text-muted-foreground">
              {attributes.location}
            </span>
            <Link href={attributes.url} target="_blank">
              <Button>Watch Now</Button>
            </Link>
          </div>
          <div className=" relative md:w-1/3 aspect-video my-2">
            <Image
              src={getImageUrl(attributes.url)}
              alt={attributes.title}
              fill
              className="aspect-video overflow-hidden rounded-lg object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
