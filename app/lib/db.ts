import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL || ""; // Set a default value if DATABASE_URL is undefined
const sql = neon(databaseUrl); // Ensure that databaseUrl is always a string

export async function dbTest() {
  const [dbRes] = await sql("SELECT NOW()");
  return dbRes;
}
