import * as db from "@/app/_lib/db";

export default async function DevPage() {
  if (process.env.NODE_ENV === "production") {
    return { status: 404 };
  }

  const trips = await db.getTrips();

  return (
    <>
      <div>DEV PAGE</div>
      {/* {trips.map((trip) => (
        <div key={trip.tripId}>{JSON.stringify(trip)}</div>
      ))} */}
    </>
  );
}
