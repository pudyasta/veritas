// app/api/proxy/route.js
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  const response = await fetch(url);
  const buffer = await response.arrayBuffer();

  return new Response(buffer, {
    headers: {
      "Content-Type": response.headers.get("content-type") || "image/jpeg",
    },
  });
}
