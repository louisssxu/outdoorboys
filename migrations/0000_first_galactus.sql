CREATE TABLE IF NOT EXISTS "trips" (
	"trip_id" serial PRIMARY KEY NOT NULL,
	"location" text NOT NULL,
	"date" date NOT NULL,
	"youtube_url" text NOT NULL
);
