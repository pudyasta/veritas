"use client";
import { AlertTriangle, Info, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCredibilityStore } from "@/lib/stores/credibility-store";

export function CredibilityScore() {
  const { score } = useCredibilityStore();

  const calculateFill = (segmentIndex: number) => {
    const segmentStart = segmentIndex * 25;
    const segmentEnd = (segmentIndex + 1) * 25;
    if (score <= segmentStart) {
      return 0;
    }
    if (score >= segmentEnd) {
      return 100;
    }
    return ((score - segmentStart) / 25) * 100;
  };

  const barColors = [
    "bg-green-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-red-500",
  ];

  return (
    <Card className="border-0 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-3">
            <div className="mb-1 flex flex-row items-center gap-2">
              <h3 className="font-medium text-[#101828]">Credibility Score</h3>
              <Info className="h-4 w-4 text-[#99a1af]" />
            </div>
            <div className="mb-2 font-bold text-4xl text-[#101828]">
              {score}%
            </div>
            <div className="flex w-48 gap-2">
              {barColors.map((color, index) => (
                <div
                  className="relative h-2 flex-1 rounded-full bg-gray-200"
                  key={index}
                >
                  <div
                    className={`h-full ${color} rounded-full`}
                    style={{ width: `${calculateFill(index)}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-7">
            <div className="mb-4 flex justify-between">
              <Button
                className="border-[#f0b100] bg-[#fff085] text-[#a65f00] text-xs hover:bg-[#ffdd62]"
                size="sm"
                variant="outline"
              >
                <AlertTriangle className="mr-1 h-3 w-3" />
                Suspicious Account
              </Button>
              <Button
                className="border-[#7086fd] bg-[#7086fd] text-white hover:bg-[#52589b]"
                size="sm"
                variant="outline"
              >
                <Share2 className="mr-1 h-3 w-3" />
                Share results
              </Button>
            </div>
            <div className="rounded-lg bg-[#e2e8f0] p-4">
              <p className="text-[#6a7282] text-sm">
                This account shows patterns of potentially manipulative or
                misleading activity. Their content may not be fully reliable.
                Proceed with caution before engaging or sharing.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
