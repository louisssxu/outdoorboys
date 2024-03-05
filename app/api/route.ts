import { NextRequest, NextResponse } from "next/server";
import { dbTest } from "@/app/lib/db";

export async function GET(request: NextRequest) {
  const data = await dbTest();
  return NextResponse.json(data, { status: 200 });
}
