"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Word, WordCloud } from "@isoterik/react-word-cloud";

export function WordsCluster({
  data,
}: {
  data: {
    interpretation?: string;
    negativeWords?: string[];
    positiveWords?: string[];
  };
}) {
  const normalizeWords = (words?: string[], color?: string): Word[] =>
    (words ?? []).map((w) => ({
      text: w,
      value: Math.floor(Math.random() * 100) + 10, // adjust word size variation
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
        <div className="w-full h-[300px] flex items-center justify-center">
          <WordCloud words={words} width={400} height={300} />
        </div>
      </CardContent>
    </Card>
  );
}
