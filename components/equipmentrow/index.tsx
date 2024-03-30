import Link from "next/link";
import { Equipment, Media } from "@/lib/interface";
import getApiURL from "@/lib/getApiURL";
import { Button } from "../ui/button";
import { equiments } from "@/lib/schema";
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
        <div className="grid gap-4">
          <Image
            src={media.attributes.url}
            alt="Cover"
            width="400"
            height="225"
            className="aspect-video overflow-hidden rounded-lg object-cover"
          />

          <h2 className="font-semibold text-xl sm:text-2xl">
            {attributes.name}
          </h2>
        </div>
        <div className="mt-4 grid gap-2">
          <Link href={`https://${attributes.url}`} target="_blank">
            <Button className="w-full" variant="secondary">
              Visit Store
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
