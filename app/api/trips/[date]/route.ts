import { NextRequest, NextResponse } from "next/server";
import { getTripByDate, Trip } from "@/app/lib/db";

export async function GET(
  request: NextRequest,
  context: { params: { date: string } }
) {
  const date: string = context.params.date;
  try {
    const trip: Trip[] = await getTripByDate(date);
    return NextResponse.json({ trip: trip[0] }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Invalid date format. Must be YYYY-MM-DD" },
      { status: 404 }
    );
  }
}
