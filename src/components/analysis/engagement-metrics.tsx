"use client";
import { ChevronDown } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { AlertBanner } from "@/components/ui/alert-banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ProfileData } from "@/lib/types/ProfileData";
import { formatNumber } from "@/lib/analyzeHelper";

const engagementData = [
  { metric: "Likes", user: 2500, normal: 1800 },
  { metric: "Shares", user: 1000, normal: 600 },
  { metric: "Comments", user: 200, normal: 150 },
  { metric: "Reach", user: 4200, normal: 2800 },
  { metric: "Saves", user: 800, normal: 400 },
];

const chartConfig = {
  user: {
    label: "User Baseline",
    color: "var(--chart-1)",
  },
  normal: {
    label: "Normal Baseline",
    color: "var(--chart-2)",
  },
};

export function EngagementMetrics({ data }: any) {
  return (
    <Card className="border-0 bg-white/70 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-[#101828]">Engagement Metrics</CardTitle>
          {/* <Button size="sm" variant="outline">
            This week <ChevronDown className="ml-1 h-3 w-3" />
          </Button> */}
        </div>
      </CardHeader>
      <CardContent>
        {data.warning && data.warning !== "" ? (
          <AlertBanner
            description={data.warning}
            title="Abnormal Post Frequency"
          />
        ) : (
          <div className="rounded-sm bg-[#e2e8f0] p-3 mb-3">
            <p className="text-[#6a7282] text-xs capitalize">
              {data.interpretation}
            </p>
          </div>
        )}
        <div className="mb-4 flex items-center gap-2">
          <span className="font-bold text-2xl text-[#0d542b]">
            {data.totalComparison.percentageChange}
          </span>
          <span className="text-[#6a7282] text-sm">from last week</span>
        </div>

        <ChartContainer
          className="mx-auto mb-4 aspect-square max-h-[200px]"
          config={chartConfig}
        >
          <RadarChart data={data.stats}>
            <ChartTooltip
              content={<ChartTooltipContent indicator="line" />}
              cursor={false}
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
          <div
            className={`flex items-center justify-between rounded-lg bg-${
              data.likes.trend === "up" ? "[#dcfce7]" : "[#ffe2e2]"
            } p-3`}
          >
            <span className="text-[#6a7282] text-sm">Likes</span>
            <div className="flex items-center gap-2">
              <span className="font-medium">
                {formatNumber(data.likes.thisWeek)}
              </span>
              <span className="text-[#0d542b] text-sm">
                {data.likes.percentageChange}
              </span>
            </div>
          </div>
          <div
            className={`flex items-center justify-between rounded-lg bg-${
              data.shares.trend === "up" ? "[#dcfce7]" : "[#ffe2e2]"
            } p-3`}
          >
            <span className="text-[#6a7282] text-sm">Shares</span>
            <div className="flex items-center gap-2">
              <span className="font-medium">
                {formatNumber(data.shares.thisWeek)}
              </span>
              <span className="text-[#0d542b] text-sm">
                {data.shares.percentageChange}
              </span>
            </div>
          </div>
          <div
            className={`flex items-center justify-between rounded-lg bg-${
              data.comments.trend === "up" ? "[#dcfce7]" : "[#ffe2e2]"
            } p-3`}
          >
            <span className="text-[#6a7282] text-sm">Comments</span>
            <div className="flex items-center gap-2">
              <span className="font-medium">
                {formatNumber(data.comments.thisWeek)}
              </span>
              <span className="text-[#0d542b] text-sm">
                {data.comments.percentageChange}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
