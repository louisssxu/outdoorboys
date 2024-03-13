"use client";

import { Food } from "@/app/_lib/interface";

export default function FoodRow(food: Food) {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 mr-4"
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034"
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
