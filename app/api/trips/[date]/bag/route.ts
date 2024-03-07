import { NextRequest, NextResponse } from "next/server";
import {
  getEquipmentsByTripDate,
  getFoodByTripDate,
  Equipment,
  TripEquipement,
} from "@/lib/db";

export async function GET(
  request: NextRequest,
  context: { params: { date: string } }
) {
  const date: string = context.params.date;
  //   return NextResponse.json({ trip: date }, { status: 200 });

  try {
    const equiments = await getEquipmentsByTripDate(date);
    const food = await getFoodByTripDate(date);
    return NextResponse.json(
      { equiments: equiments, food: food },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Couldnt retrieve bag" },
      { status: 404 }
    );
  }
}
