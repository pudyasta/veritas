import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { tweets } = await req.json();

    if (!tweets || !Array.isArray(tweets)) {
      return new Response(
        JSON.stringify({ error: "Tweets array required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const text = tweets.map((t: any) => t.text).join("\n");
    console.log(text)

    const aiRes = await client.chat.completions.create({
      model: "gpt-4o-mini", 
      messages: [
        { role: "system", content: "You are a social media analyst." },
        { role: "user", content: `Analyze the following tweets:\n${text}` },
      ],
    });

    return new Response(
      JSON.stringify({ analysis: aiRes.choices[0].message?.content || "No analysis." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Analyze API error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
