import {
  text,
  pgTable,
  serial,
  date,
  integer,
  primaryKey,
  varchar,
} from "drizzle-orm/pg-core";

export const trips = pgTable("trips", {
  tripId: serial("trip_id").primaryKey(),
  title: text("title").notNull(),
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
  foodName: varchar("food_name", { length: 100 }).primaryKey(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const ingredients = pgTable("ingredients", {
  ingName: varchar("ingredient_name", { length: 100 }).primaryKey(),
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
    foodName: varchar("food_name", { length: 100 })
      .notNull()
      .references(() => foods.foodName),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.tripId, table.foodName] }),
    };
  }
);

export const food_ingredient = pgTable(
  "food_ingredient",
  {
    foodName: varchar("food_name", { length: 100 })
      .notNull()
      .references(() => foods.foodName),
    ingName: varchar("ingredient_name", { length: 100 })
      .notNull()
      .references(() => ingredients.ingName),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.ingName, table.foodName] }),
    };
  }
);
