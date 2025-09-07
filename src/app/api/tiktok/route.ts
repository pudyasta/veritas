import { NextRequest } from "next/server";
import { scrapeAndAnalyze } from "@/lib/socialAnalyzer";

export async function GET(req: NextRequest) {
  const username = new URL(req.url).searchParams.get("username") ;

  try {
    const result = await scrapeAndAnalyze({
      actorId: "clockworks/tiktok-profile-scraper",
      input: { 
        
      profiles: [username],
      resultsPerPage : 20
      },
    });
    return Response.json(result);
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
