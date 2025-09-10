import { NextRequest } from "next/server";
import { scrapeAndAnalyze } from "@/lib/socialAnalyzer";
import { platform } from "os";

export async function GET(req: NextRequest) {
  const username = new URL(req.url).searchParams.get("username") ;

  try {
    const result = await scrapeAndAnalyze({
      actorId: "apify/instagram-profile-scraper",
      input: { usernames: [username] },
    });
    return Response.json(result);
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
