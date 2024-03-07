import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

export const sql: NeonQueryFunction<boolean, boolean> = neon(
  process.env.DATABASE_URL!
);

export const db = drizzle(sql, { schema });

(async function configureDatabase() {})();

export async function dbTest() {
  const dbRes = await sql("SELECT NOW()");
  return dbRes;
}

export type Trip = typeof schema.trips.$inferInsert;

export async function insertTrip(trip: Trip) {
  return db.insert(schema.trips).values(trip).returning();
}

export async function getTrips() {
  const data = await db.select().from(schema.trips);
  console.log(data);
  return data;
}

// export async function getTripByDate(date: Date) {
//   return (await db.select().from(schema.trips)).where(
//     eq(schema.trips.date, date)
//   );
// }

// getAl
// deleteTrip

// addEquiment
// getEquipment
// deleteEquipment

// addIngredient
// getIngredient
// deleteIngredient

// addFood
// getFood
// deleteFood
