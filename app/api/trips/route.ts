import { NextRequest, NextResponse } from "next/server";
import { getTrips } from "@/app/lib/db";

export async function GET(request: NextRequest) {
  const data = await getTrips();
  return NextResponse.json(data, { status: 200 });
}
