"use client";
import { ChevronDown, Info } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { AlertBanner } from "@/components/ui/alert-banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function SentimentAnalysis() {
  const data = [{ positive: 30, negative: 40.5, neutral: 29.5 }];

  const chartConfig = {
    positive: {
      label: "Positive",
      color: "var(--chart-1)",
    },
    negative: {
      label: "Negative",
      color: "var(--chart-2)",
    },
    neutral: {
      label: "Neutral",
      color: "var(--chart-3)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="border-0 bg-white shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-[#101828]">Sentiment Analysis</CardTitle>
            <Info className="h-4 w-4 text-[#99a1af]" />
          </div>
          <Button size="sm" variant="outline">
            This week <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <AlertBanner
          description="Recent posts lean overwhelmingly one-sided in tone (e.g., negative, hostile, or alarmist), with minimal variation."
          title="Suspicious Content Tones"
        />
        <div className="mb-4 flex items-center gap-6">
          <div className="relative h-48 w-48">
            <ChartContainer
              className="aspect-square w-full max-w-[192px]"
              config={chartConfig}
            >
              <RadialBarChart
                data={data}
                endAngle={180}
                innerRadius={60}
                outerRadius={120}
              >
                <ChartTooltip
                  content={<ChartTooltipContent hideLabel />}
                  cursor={false}
                />
                <PolarRadiusAxis axisLine={false} tick={false} tickLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            textAnchor="middle"
                            x={viewBox.cx}
                            y={viewBox.cy}
                          >
                            <tspan
                              className="fill-foreground font-bold text-2xl"
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) - 16}
                            >
                              160
                            </tspan>
                            <tspan
                              className="fill-muted-foreground"
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 4}
                            >
                              Posts
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
                <RadialBar
                  className="stroke-2 stroke-transparent"
                  cornerRadius={5}
                  dataKey="positive"
                  fill="var(--color-positive)"
                  stackId="a"
                />
                <RadialBar
                  className="stroke-2 stroke-transparent"
                  cornerRadius={5}
                  dataKey="negative"
                  fill="var(--color-negative)"
                  stackId="a"
                />
                <RadialBar
                  className="stroke-2 stroke-transparent"
                  cornerRadius={5}
                  dataKey="neutral"
                  fill="var(--color-neutral)"
                  stackId="a"
                />
              </RadialBarChart>
            </ChartContainer>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff6467]" />
              <span className="text-[#6a7282] text-sm">Negative</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#7bf1a8]" />
              <span className="text-[#6a7282] text-sm">Positive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ffae4c]" />
              <span className="text-[#6a7282] text-sm">Neutral</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
