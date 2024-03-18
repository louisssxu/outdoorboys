"use client";

import getApiURL from "@/app/_lib/getApiURL";
import { Food, Media } from "@/app/_lib/interface";

export default function FoodRow(food: Food) {
  const media: Media = food.media;
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 mr-4"
        src={`${getApiURL()}${media.url}`}
        alt="Laptop"
      />
      <span className="flex flex-grow">
        <span>{food.name}</span>
        {/* generic */}
        <span className="mx-1">| {food.description}</span>
      </span>
      <span className="text-gray-600">→</span>
    </div>
  );
}
