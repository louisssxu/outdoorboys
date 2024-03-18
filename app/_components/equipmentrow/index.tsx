"useClient";

import Link from "next/link";
import { Equipment, Media } from "@/app/_lib/interface";
import getApiURL from "@/app/_lib/getApiURL";

export default function EquipmentRow(equipment: Equipment) {
  const media: Media = equipment.media;
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 mr-4"
        src={`${getApiURL()}${media.url}`}
        alt="Laptop"
      />
      <span className="flex flex-grow">
        <span>{equipment.name}</span>
        <span className="mx-1">| Generic</span>
      </span>
      <span className="text-gray-600">
        <Link href={equipment.url} target="_blank">
          →
        </Link>
      </span>
    </div>
  );
}
