import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WordCloud from "react-d3-cloud";
export function WordsCluster({
  data,
}: {
  data: {
    interpretation?: string;
    negativeWords?: string[];
    positiveWords?: string[];
  };
}) {
  const normalizeWords = (words?: string[], color?: string) =>
    (words ?? []).map((w) => ({
      text: w,
      value: Math.floor(Math.random() * 8000) + 10,
      color,
    }));

  const negative = normalizeWords(data?.negativeWords, "#ef4444");
  const positive = normalizeWords(data?.positiveWords, "#22c55e");
  const words = [...negative, ...positive];

  return (
    <Card className="border-0 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-[#101828]">Words Cluster</CardTitle>
      </CardHeader>
      <CardContent>
        <WordCloud data={words} />
      </CardContent>
    </Card>
  );
}
