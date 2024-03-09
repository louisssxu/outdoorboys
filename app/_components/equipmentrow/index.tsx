"useClient";

import { Equipment, Food } from "@/app/_lib/db";
import Link from "next/link";

export default function EquipmentRow({ equipment }: { equipment: Equipment }) {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 mr-4"
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034"
        alt="Laptop"
      />
      <span className="flex flex-grow">
        <span>{equipment.name}</span>
        <span className="mx-1">| Generic</span>
      </span>
      <span className="text-gray-600">
        {/* add url */}
        <Link href={"https://amazon.com"} target="_blank">
          →
        </Link>
      </span>
    </div>
  );
}