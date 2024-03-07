CREATE TABLE IF NOT EXISTS "equipments" (
	"equipment_id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"affiliate_url" text NOT NULL,
	"category" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "food_ingredient" (
	"food_name" varchar(100) NOT NULL,
	"ingredient_name" varchar(100) NOT NULL,
	CONSTRAINT "food_ingredient_ingredient_name_food_name_pk" PRIMARY KEY("ingredient_name","food_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "foods" (
	"food_name" varchar(100) PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"image_url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ingredients" (
	"ingredient_name" varchar(100) PRIMARY KEY NOT NULL,
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
	"food_name" varchar(100) NOT NULL,
	CONSTRAINT "trip_food_trip_id_food_name_pk" PRIMARY KEY("trip_id","food_name")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "food_ingredient" ADD CONSTRAINT "food_ingredient_food_name_foods_food_name_fk" FOREIGN KEY ("food_name") REFERENCES "foods"("food_name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "food_ingredient" ADD CONSTRAINT "food_ingredient_ingredient_name_ingredients_ingredient_name_fk" FOREIGN KEY ("ingredient_name") REFERENCES "ingredients"("ingredient_name") ON DELETE no action ON UPDATE no action;
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
 ALTER TABLE "trip_food" ADD CONSTRAINT "trip_food_food_name_foods_food_name_fk" FOREIGN KEY ("food_name") REFERENCES "foods"("food_name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
