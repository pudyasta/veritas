import { ChevronDown, Info } from "lucide-react";
import { AlertBanner } from "@/components/ui/alert-banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PostFrequency({ data }: any) {
  return (
    <Card className="border-0 bg-white shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-[#101828]">Post Frequency</CardTitle>
            <Info className="h-4 w-4 text-[#99a1af]" />
          </div>
          <Button size="sm" variant="outline">
            Last 24 hours <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
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

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mb-1 text-[#6a7282] text-sm">User Post</div>
            <div className="font-bold text-2xl text-[#101828]">
              {data.daily.totalPosts} posts
            </div>
            <div className="text-[#99a1af] text-sm">in the last 24 hours</div>
          </div>
          <div>
            <div className="mb-1 text-[#6a7282] text-sm">
              Average Normal Post
            </div>
            <div className="font-bold text-2xl text-[#101828]">
              {data.daily.averageNormalPosts} posts
            </div>
            <div className="text-[#99a1af] text-sm">in the last 24 hours</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
