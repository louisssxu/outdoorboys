import { NextRequest, NextResponse } from "next/server";
import { getTrips, Trip } from "@/lib/db";

export async function GET(request: NextRequest) {
  const trips: Trip[] = await getTrips();
  if (!trips) {
    return NextResponse.json({ message: "No trips found" }, { status: 404 });
  }
  return NextResponse.json({ trips: trips }, { status: 200 });
}
