"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Share2, Info } from "lucide-react";
import { useCredibilityStore } from "@/lib/stores/credibility-store";

export function CredibilityScore() {
  const { score } = useCredibilityStore();

  const calculateFill = (segmentIndex: number) => {
    const segmentStart = segmentIndex * 25;
    const segmentEnd = (segmentIndex + 1) * 25;
    if (score <= segmentStart) return 0;
    if (score >= segmentEnd) return 100;
    return ((score - segmentStart) / 25) * 100;
  };

  const barColors = [
    "bg-green-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-red-500",
  ];

  return (
    <Card className="bg-white border-0 shadow-sm">
      <CardContent className="p-6">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-3">
            <div className="flex flex-row items-center mb-1 gap-2">
              <h3 className="font-medium text-[#101828]">Credibility Score</h3>
              <Info className="w-4 h-4 text-[#99a1af]" />
            </div>
            <div className="text-4xl font-bold text-[#101828] mb-2">
              {score}%
            </div>
            <div className="flex gap-2 w-48">
              {barColors.map((color, index) => (
                <div
                  key={index}
                  className="flex-1 h-2 bg-gray-200 rounded-full relative"
                >
                  <div
                    className={`h-full ${color} rounded-full`}
                    style={{ width: `${calculateFill(index)}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-7">
            <div className="flex justify-between mb-4">
              <Button
                variant="outline"
                size="sm"
                className="text-xs bg-[#fff085] border-[#f0b100] text-[#a65f00] hover:bg-[#ffdd62]"
              >
                <AlertTriangle className="w-3 h-3 mr-1" />
                Suspicious Account
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-[#7086fd] text-white border-[#7086fd] hover:bg-[#52589b]"
              >
                <Share2 className="w-3 h-3 mr-1" />
                Share results
              </Button>
            </div>
            <div className="bg-[#e2e8f0] p-4 rounded-lg">
              <p className="text-sm text-[#6a7282]">
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
