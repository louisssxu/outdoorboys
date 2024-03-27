import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from "@/lib/db";

(async function main() {
  try {
    await migrate(db, { migrationsFolder: "./migrations" });
  } catch (e) {
    return console.error(e);
  }
  console.log("Ran migration");
})();
