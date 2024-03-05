import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export async function dbTest() {
  const [dbRes] = await sql("SELECT NOW()");
  return dbRes;
}
