import {
  text,
  pgTable,
  serial,
  date,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";

export const trips = pgTable("trips", {
  tripId: serial("trip_id").primaryKey(),
  location: text("location").notNull(),
  date: date("date").notNull(),
  youtubeUrl: text("youtube_url").notNull(),
});

export const equiments = pgTable("equipments", {
  equipmentId: serial("equipment_id").primaryKey(),
  name: text("name").notNull(),
  affiliateUrl: text("affiliate_url").notNull(),
  category: text("category").notNull(),
});

export const foods = pgTable("foods", {
  foodId: serial("food_id").primaryKey(),
  name: text("name").notNull(),
});

export const ingredients = pgTable("ingredients", {
  ingredientId: serial("ingredient_id").primaryKey(),
  name: text("name").notNull(),
  affiliateUrl: text("affiliate_url").notNull(),
});

export const trip_equipment = pgTable(
  "trip_equipment",
  {
    tripId: integer("trip_id")
      .notNull()
      .references(() => trips.tripId),
    equipmentId: integer("equipment_id")
      .notNull()
      .references(() => equiments.equipmentId),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.tripId, table.equipmentId] }),
    };
  }
);

export const trip_food = pgTable(
  "trip_food",
  {
    tripId: integer("trip_id")
      .notNull()
      .references(() => trips.tripId),
    foodId: integer("food_id")
      .notNull()
      .references(() => foods.foodId),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.tripId, table.foodId] }),
    };
  }
);

export const food_ingredient = pgTable(
  "food_ingredient",
  {
    foodId: integer("food_id")
      .notNull()
      .references(() => foods.foodId),
    ingredientId: integer("ingredient_id")
      .notNull()
      .references(() => ingredients.ingredientId),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.ingredientId, table.foodId] }),
    };
  }
);
