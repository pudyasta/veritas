"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info, ChevronDown } from "lucide-react"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { AlertBanner } from "@/components/ui/alert-banner"

export function SentimentAnalysis() {
  const data = [{ positive: 30, negative: 40.5, neutral: 29.5 }]

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
  } satisfies ChartConfig

  return (
    <Card className="bg-white border-0 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-[#101828]">Sentiment Analysis</CardTitle>
            <Info className="w-4 h-4 text-[#99a1af]" />
          </div>
          <Button variant="outline" size="sm">
            This week <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <AlertBanner
          title="Suspicious Content Tones"
          description="Recent posts lean overwhelmingly one-sided in tone (e.g., negative, hostile, or alarmist), with minimal variation."
        />
        <div className="flex items-center gap-6 mb-4">
          <div className="relative w-48 h-48">
            <ChartContainer
              config={chartConfig}
              className="aspect-square w-full max-w-[192px]"
            >
              <RadialBarChart
                data={data}
                endAngle={180}
                innerRadius={60}
                outerRadius={120}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) - 16}
                              className="fill-foreground text-2xl font-bold"
                            >
                              160
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 4}
                              className="fill-muted-foreground"
                            >
                              Posts
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </PolarRadiusAxis>
                <RadialBar
                  dataKey="positive"
                  stackId="a"
                  cornerRadius={5}
                  fill="var(--color-positive)"
                  className="stroke-transparent stroke-2"
                />
                <RadialBar
                  dataKey="negative"
                  stackId="a"
                  cornerRadius={5}
                  fill="var(--color-negative)"
                  className="stroke-transparent stroke-2"
                />
                <RadialBar
                  dataKey="neutral"
                  stackId="a"
                  cornerRadius={5}
                  fill="var(--color-neutral)"
                  className="stroke-transparent stroke-2"
                />
              </RadialBarChart>
            </ChartContainer>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#ff6467] rounded-full"></div>
              <span className="text-sm text-[#6a7282]">Negative</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#7bf1a8] rounded-full"></div>
              <span className="text-sm text-[#6a7282]">Positive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#ffae4c] rounded-full"></div>
              <span className="text-sm text-[#6a7282]">Neutral</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}