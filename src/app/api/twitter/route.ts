import { NextRequest } from "next/server";
import { scrapeAndAnalyze } from "@/lib/socialAnalyzer";
import { platform } from "os";

export async function GET(req: NextRequest) {
  const username = new URL(req.url).searchParams.get("username") ;

  try {
    const result = await scrapeAndAnalyze({
      actorId: "CJdippxWmn9uRfooo",
      input: { from: username, 
                Since:Date.now() - 14 * 24 * 60 * 60 * 1000,
                Until:Date.now() },
    });
    return Response.json(result);
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
