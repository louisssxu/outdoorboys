import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");
  const token = request.nextUrl.searchParams.get("token");

  if (token !== process.env.CACHE_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }
  if (!path) {
    return Response.json({
      revalidated: false,
      now: Date.now(),
      message: "Missing path to revalidate",
    });
  }
  revalidatePath("/", "layout");
  return Response.json({ revalidated: true, now: Date.now() });
}
