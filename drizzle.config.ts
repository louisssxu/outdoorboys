import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

export default {
  schema: "./app/lib/schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
