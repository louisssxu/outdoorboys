import {
  Trip,
  Equipment,
  Ingredient,
  Food,
  FoodIngredient,
  TripEquipement,
  TripFood,
  insertTrip,
  insertEquipment,
  insertFood,
  insertIngredient,
  insertFoodIngredient,
  insertTripEquipment,
  insertTripFood,
  clearTables,
} from "@/app/_lib/db";
import { get } from "http";

(async function main() {
  await clearTables();

  const tripIds: number[] = [];
  const equimentIds: number[] = [];

  const trips: Trip[] = [
    {
      date: "2024-02-18",
      location: "Alaska",
      youtubeUrl:
        "https://www.youtube.com/watch?v=ggWZoH9PeIU&t=1059s&ab_channel=OutdoorBoys",
    },
    {
      date: "2003-01-22",
      location: "Foo",
      youtubeUrl: "Bar",
    },
  ];

  const equiments: Equipment[] = [
    {
      name: "Tent",
      affiliateUrl: "some url",
      category: "Shelter",
    },
    {
      name: "Sleeping Bag",
      affiliateUrl: "some url",
      category: "Shelter",
    },
  ];

  const ingredients: Ingredient[] = [
    {
      ingName: "Rice",
      affiliateUrl: "some url",
    },
    {
      ingName: "Beans",
      affiliateUrl: "some url",
    },
    {
      ingName: "Bacon",
      affiliateUrl: "some url",
    },
  ];

  const foods: Food[] = [
    {
      foodName: "Rice and Beans",
      description: "Rice and Beans description",
      imageUrl: "Rice and beans imgae url",
    },
    {
      foodName: "Rice and Bacon",
      description: "Rice and bacon description",
      imageUrl: "Rice and bacon imge url",
    },
  ];

  for (const trip of trips) {
    const [insertedTrip] = await insertTrip(trip);
    tripIds.push(insertedTrip.tripId);
    console.log("Inserted trip", insertedTrip);
  }

  for (const equipment of equiments) {
    const [insertedEquipment] = await insertEquipment(equipment);
    equimentIds.push(insertedEquipment.equipmentId);
    console.log("Inserted equipment", insertedEquipment);
  }

  for (const ingredient of ingredients) {
    const [insertedIngredient] = await insertIngredient(ingredient);
    console.log("Inserted ingredient", insertedIngredient);
  }

  for (const food of foods) {
    const [insertedFood] = await insertFood(food);
    console.log("Inserted food", insertedFood);
  }

  const foodIngredients: FoodIngredient[] = [
    {
      foodName: "Rice and Beans",
      ingName: "Rice",
    },
    {
      foodName: "Rice and Beans",
      ingName: "Beans",
    },
    {
      foodName: "Rice and Bacon",
      ingName: "Rice",
    },
    {
      foodName: "Rice and Bacon",
      ingName: "Bacon",
    },
  ];

  const tripEquipements: TripEquipement[] = [
    {
      tripId: tripIds[0],
      equipmentId: equimentIds[0],
    },
    {
      tripId: tripIds[0],
      equipmentId: equimentIds[1],
    },
    {
      tripId: tripIds[1],
      equipmentId: equimentIds[0],
    },
  ];

  const tripFoods: TripFood[] = [
    {
      tripId: tripIds[0],
      foodName: "Rice and Beans",
    },
    {
      tripId: tripIds[1],
      foodName: "Rice and Bacon",
    },
  ];

  for (const foodIngredient of foodIngredients) {
    const insertedFoodIngredient = await insertFoodIngredient(foodIngredient);
    console.log("Inserted food ingredient", insertedFoodIngredient);
  }

  for (const tripEquipment of tripEquipements) {
    const insertedTripEquipment = await insertTripEquipment(tripEquipment);
    console.log("Inserted trip equipment", insertedTripEquipment);
  }

  for (const tripFood of tripFoods) {
    const insertedTripFood = await insertTripFood(tripFood);
    console.log("Inserted trip food", insertedTripFood);
  }

  console.log("Seeding complete");
})();
