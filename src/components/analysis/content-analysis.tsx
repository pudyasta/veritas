import { ChevronDown } from "lucide-react";
import { CategoryBar } from "@/components/analysis/category-bar";
import { AlertBanner } from "@/components/ui/alert-banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contentData = [113, 35, 8, 4]; // Politics, Promotions, Community, Others
const contentColors = ["blue", "amber", "violet", "gray"] as const;

export function ContentAnalysis() {
  return (
    <Card className="border-0 bg-white shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-[#101828]">Content Analysis</CardTitle>
          <Button size="sm" variant="outline">
            This week <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <AlertBanner
          description="The majority of this account's posts are misleading and repetitive, with very little authentic or personal content. This indicates coordinated or buzzer-like activity."
          title="Suspicious Content Patterns"
        />
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[#6a7282] text-sm">Content Type</span>
            <span className="text-[#6a7282] text-sm">160 posts</span>
          </div>

          <CategoryBar
            className="mb-4"
            colors={contentColors}
            values={contentData}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-blue-500" />
              <span className="text-[#6a7282] text-sm">Politics</span>
            </div>
            <div className="text-right">
              <div className="font-medium">113 posts</div>
              <div className="text-[#99a1af] text-sm">40.5%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-amber-500" />
              <span className="text-[#6a7282] text-sm">Promotions</span>
            </div>
            <div className="text-right">
              <div className="font-medium">35 posts</div>
              <div className="text-[#99a1af] text-sm">32.1%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-violet-500" />
              <span className="text-[#6a7282] text-sm">Community posts</span>
            </div>
            <div className="text-right">
              <div className="font-medium">8 posts</div>
              <div className="text-[#99a1af] text-sm">16.8%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-gray-500" />
              <span className="text-[#6a7282] text-sm">Others</span>
            </div>
            <div className="text-right">
              <div className="font-medium">4 posts</div>
              <div className="text-[#99a1af] text-sm">16.8%</div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-4 font-semibold text-[#101828] text-lg">
            Top Content
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-[#f8fafc] p-3">
              <div>
                <div className="mb-1 text-[#99a1af] text-sm">
                  👁 4.2k views | 2 September
                </div>
                <div className="font-medium text-[#101828]">
                  "Breaking news!!! [uncited claim]"
                </div>
              </div>
              <Button size="sm" variant="outline">
                See post
              </Button>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[#f8fafc] p-3">
              <div>
                <div className="mb-1 text-[#99a1af] text-sm">
                  👁 3.1k views | 4 September
                </div>
                <div className="font-medium text-[#101828]">
                  "Share this before it gets deleted!"
                </div>
              </div>
              <Button size="sm" variant="outline">
                See post
              </Button>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[#f8fafc] p-3">
              <div>
                <div className="mb-1 text-[#99a1af] text-sm">
                  👁 2.2k views | 5 September
                </div>
                <div className="font-medium text-[#101828]">
                  "His policy are the worst"
                </div>
              </div>
              <Button size="sm" variant="outline">
                See post
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
