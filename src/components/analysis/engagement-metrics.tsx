"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AlertBanner } from "@/components/ui/alert-banner"

const engagementData = [
  { metric: "Likes", user: 2500, normal: 1800 },
  { metric: "Shares", user: 1000, normal: 600 },
  { metric: "Comments", user: 200, normal: 150 },
  { metric: "Reach", user: 4200, normal: 2800 },
  { metric: "Saves", user: 800, normal: 400 },
]

const chartConfig = {
  user: {
    label: "User Baseline",
    color: "var(--chart-1)",
  },
  normal: {
    label: "Normal Baseline",
    color: "var(--chart-2)",
  },
}

export function EngagementMetrics() {
  return (
    <Card className="bg-white/70 border-0 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-[#101828]">Engagement Metrics</CardTitle>
          <Button variant="outline" size="sm">
            This week <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <AlertBanner
          title="Suspicious Engagement Detected"
          description="The account's likes, comments, and shares don't match its follower size. This suggests manipulated interactions or artificial boosting."
        />
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-[#0d542b]">12.8%</span>
          <span className="text-sm text-[#6a7282]">from last week</span>
        </div>

        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px] mb-4"
        >
          <RadarChart data={engagementData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="metric" />
            <PolarGrid />
            <Radar
              dataKey="user"
              fill="var(--color-user)"
              fillOpacity={0.6}
              stroke="var(--color-user)"
            />
            <Radar
              dataKey="normal"
              fill="var(--color-normal)"
              fillOpacity={0.3}
              stroke="var(--color-normal)"
            />
          </RadarChart>
        </ChartContainer>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-[#ffe2e2] rounded-lg">
            <span className="text-sm text-[#6a7282]">Likes</span>
            <div className="flex items-center gap-2">
              <span className="font-medium">2.5k</span>
              <span className="text-sm text-[#0d542b]">↗ 30%</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#dcfce7] rounded-lg">
            <span className="text-sm text-[#6a7282]">Shares</span>
            <div className="flex items-center gap-2">
              <span className="font-medium">1k</span>
              <span className="text-sm text-[#0d542b]">↗ 10.1%</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#f1f5f9] rounded-lg">
            <span className="text-sm text-[#6a7282]">Comments</span>
            <div className="flex items-center gap-2">
              <span className="font-medium">200</span>
              <span className="text-sm text-[#0d542b]">↗ 2.4%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}