import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import * as schema from "./schema";

import dotenv from "dotenv";
import { table } from "console";
import { SelectedFields } from "drizzle-orm/pg-core";
dotenv.config({ path: "./.env.local" });

export const sql: NeonQueryFunction<boolean, boolean> = neon(
  process.env.DATABASE_URL!
);

export const db = drizzle(sql, { schema });

export async function dbTest() {
  const dbRes = await sql("SELECT NOW()");
  return dbRes;
}

export type Trip = typeof schema.trips.$inferInsert;

export async function insertTrip(trip: Trip) {
  return db.insert(schema.trips).values(trip).returning();
}

export async function getTripById(tripId: number) {
  const data = await db
    .select()
    .from(schema.trips)
    .where(eq(schema.trips.tripId, tripId));
  return data;
}

export async function getTripByDate(date: string) {
  const data = await db
    .select()
    .from(schema.trips)
    .where(eq(schema.trips.date, date));
  return data;
}

export async function getTrips() {
  const data = await db.select().from(schema.trips);
  return data;
}

export type Equipment = typeof schema.equiments.$inferInsert;

export async function insertEquipment(equ: Equipment) {
  return db.insert(schema.equiments).values(equ).returning();
}

export async function getEquipmentById(equipmentId: number) {
  const data = await db
    .select()
    .from(schema.equiments)
    .where(eq(schema.equiments.equipmentId, equipmentId));
  return data;
}

export async function getEquipments() {
  const data = await db.select().from(schema.equiments);
  return data;
}

export async function getEquipmentsByTripDate(date: string) {
  const data = await db
    .select(schema.equiments) // not sure why error, but it works
    .from(schema.trips)
    .where(eq(schema.trips.date, date))
    .innerJoin(
      schema.trip_equipment,
      eq(schema.trips.tripId, schema.trip_equipment.tripId)
    )
    .innerJoin(
      schema.equiments,
      eq(schema.trip_equipment.equipmentId, schema.equiments.equipmentId)
    );
  return data;
}

export async function getEquipmentByName(name: string) {
  const data = await db
    .select()
    .from(schema.equiments)
    .where(eq(schema.equiments.name, name));
  return data;
}

export type Food = typeof schema.foods.$inferInsert;

export async function insertFood(food: Food) {
  return db.insert(schema.foods).values(food).returning();
}

export async function getFoods() {
  const data = await db.select().from(schema.foods);
  return data;
}

export async function getFoodByTripDate(date: string) {
  const data = await db
    .select(schema.foods) // not sure why error, but it works
    .from(schema.trips)
    .where(eq(schema.trips.date, date))
    .innerJoin(
      schema.trip_food,
      eq(schema.trips.tripId, schema.trip_food.tripId)
    )
    .innerJoin(
      schema.foods,
      eq(schema.trip_food.foodName, schema.foods.foodName)
    );
  return data;
}

export async function getFoodsByTripId(tripId: number) {
  const data = await db
    .select()
    .from(schema.trip_food)
    .where(eq(schema.trip_food.tripId, tripId));
  return data;
}

export type Ingredient = typeof schema.ingredients.$inferInsert;

export async function insertIngredient(ing: Ingredient) {
  return db.insert(schema.ingredients).values(ing).returning();
}

export async function getIngredients() {
  const data = await db.select().from(schema.ingredients);
  return data;
}

export async function getIngredientsByFoodName(foodName: string) {
  const data = await db
    .select()
    .from(schema.food_ingredient)
    .where(eq(schema.food_ingredient.foodName, foodName));
  return data;
}

export type TripEquipement = typeof schema.trip_equipment.$inferInsert;

export async function insertTripEquipment(tripEqu: TripEquipement) {
  return db.insert(schema.trip_equipment).values(tripEqu).returning();
}

export type TripFood = typeof schema.trip_food.$inferInsert;

export async function insertTripFood(tripFood: TripFood) {
  return db.insert(schema.trip_food).values(tripFood).returning();
}

export type FoodIngredient = typeof schema.food_ingredient.$inferInsert;

export async function insertFoodIngredient(foodIng: FoodIngredient) {
  return db.insert(schema.food_ingredient).values(foodIng).returning();
}

export async function linkFoodIngredient(foodName: string, ingName: string) {
  const foodIng: FoodIngredient = { foodName, ingName };
  return insertFoodIngredient(foodIng);
}

export async function clearTables() {
  await db.delete(schema.trip_food);
  await db.delete(schema.trip_equipment);
  await db.delete(schema.food_ingredient);
  await db.delete(schema.trips);
  await db.delete(schema.foods);
  await db.delete(schema.ingredients);
  await db.delete(schema.equiments);
}
