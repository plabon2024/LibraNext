import dbConnect from "@/lib/db";

export async function GET(request) {
  const url = new URL(request.url);
  const limitParam = url.searchParams.get("limit");

  const data = await dbConnect("books")
    .find()
    .limit(parseInt(limitParam))
    .toArray();

  return Response.json({ data });
}
