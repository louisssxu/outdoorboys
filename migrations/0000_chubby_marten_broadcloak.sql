CREATE TABLE IF NOT EXISTS "equipments" (
	"equipment_id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"affiliate_url" text NOT NULL,
	"category" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "food_ingredient" (
	"food_id" integer NOT NULL,
	"ingredient_id" integer NOT NULL,
	CONSTRAINT "food_ingredient_ingredient_id_food_id_pk" PRIMARY KEY("ingredient_id","food_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "foods" (
	"food_id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ingredients" (
	"ingredient_id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"affiliate_url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trip_equipment" (
	"trip_id" integer NOT NULL,
	"equipment_id" integer NOT NULL,
	CONSTRAINT "trip_equipment_trip_id_equipment_id_pk" PRIMARY KEY("trip_id","equipment_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trip_food" (
	"trip_id" integer NOT NULL,
	"food_id" integer NOT NULL,
	CONSTRAINT "trip_food_trip_id_food_id_pk" PRIMARY KEY("trip_id","food_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trips" (
	"trip_id" serial PRIMARY KEY NOT NULL,
	"location" text NOT NULL,
	"youtube_url" text NOT NULL,
	"date" date NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "food_ingredient" ADD CONSTRAINT "food_ingredient_food_id_foods_food_id_fk" FOREIGN KEY ("food_id") REFERENCES "foods"("food_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "food_ingredient" ADD CONSTRAINT "food_ingredient_ingredient_id_ingredients_ingredient_id_fk" FOREIGN KEY ("ingredient_id") REFERENCES "ingredients"("ingredient_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trip_equipment" ADD CONSTRAINT "trip_equipment_trip_id_trips_trip_id_fk" FOREIGN KEY ("trip_id") REFERENCES "trips"("trip_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trip_equipment" ADD CONSTRAINT "trip_equipment_equipment_id_equipments_equipment_id_fk" FOREIGN KEY ("equipment_id") REFERENCES "equipments"("equipment_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trip_food" ADD CONSTRAINT "trip_food_trip_id_trips_trip_id_fk" FOREIGN KEY ("trip_id") REFERENCES "trips"("trip_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trip_food" ADD CONSTRAINT "trip_food_food_id_foods_food_id_fk" FOREIGN KEY ("food_id") REFERENCES "foods"("food_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
