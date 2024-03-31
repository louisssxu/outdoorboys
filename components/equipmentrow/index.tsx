import Link from "next/link";
import { Equipment, Media } from "@/lib/interface";
import getApiURL from "@/lib/getApiURL";
import { Button } from "../ui/button";
import Image from "next/image";

export default function EquipmentRow(equipment: Equipment) {
  const attributes = equipment.attributes;

  const media: Media = attributes.media.data;

  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm m-4 md:w-1/3 sm: w-full"
      data-v0-t="card"
    >
      <div className="p-4 md:p-6">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src={media.attributes.url}
            alt="Cover"
            width="400"
            height="225"
            className="aspect-video overflow-hidden rounded-lg object-cover"
          />
        </div>

        <h2 className=" m-3 font-semibold  lg:text-2xl text-lg">
          {attributes.name}
        </h2>
        <div className="mt-4 gap-2 flex flex-row">
          <Link
            href={`https://${attributes.url}`}
            target="_blank"
            className="w-1/2"
          >
            <Button variant="default" className="w-full">
              Visit Store
            </Button>
          </Link>
          <Link
            href={`https://${attributes.alturl}`}
            target="_blank"
            className="w-1/2"
          >
            <Button variant="secondary" className="w-full">
              View Similar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
