import getApiURL from "@/lib/getApiURL";
import { Food, Media } from "@/lib/interface";

export default function FoodRow(food: Food) {
  const media: Media = food.media;
  return <div className="flex items-center">food</div>;
}
