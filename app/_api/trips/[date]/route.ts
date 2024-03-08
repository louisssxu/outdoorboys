import { NextRequest, NextResponse } from "next/server";
import {
  getTripByDate,
  Trip,
  getEquipmentsByTripDate,
  getFoodByTripDate,
} from "@/app/_lib/db";

export async function GET(
  request: NextRequest,
  context: { params: { date: string } }
) {
  const date: string = context.params.date;
  try {
    const trip: Trip[] = await getTripByDate(date);
    const equipments = await getEquipmentsByTripDate(date);
    const food = await getFoodByTripDate(date);
    return NextResponse.json(
      { trip: trip[0], equipments: equipments, foods: food },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Invalid date format. Must be YYYY-MM-DD" },
      { status: 404 }
    );
  }
}
