import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (token !== process.env.CACHE_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }

  revalidatePath("/", "layout");
  return Response.json({ revalidated: true, now: Date.now() });
}
