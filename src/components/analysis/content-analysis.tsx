import { ChevronDown } from "lucide-react";
import { CategoryBar } from "@/components/analysis/category-bar";
import { AlertBanner } from "@/components/ui/alert-banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumber } from "@/lib/analyzeHelper";

const contentColors = ["blue", "amber", "violet", "gray"] as const;

export function ContentAnalysis({ data }: { data: any }) {
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
        {data.warning && data.warning !== "" ? (
          <AlertBanner
            description={data.warning}
            title="Suspicious Content Tones"
          />
        ) : (
          <div className="rounded-sm bg-[#e2e8f0] p-3 mb-3">
            <p className="text-[#6a7282] text-xs capitalize">
              {data.interpretation}
            </p>
          </div>
        )}
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[#6a7282] text-sm">Content Type</span>
            <span className="text-[#6a7282] text-sm">
              {data.categories.reduce((sum: number, c) => sum + c.postCount, 0)}{" "}
              posts
            </span>
          </div>

          <CategoryBar
            className="mb-4"
            colors={contentColors}
            values={data.categories.map(
              (c: { name: string; percentage: string; postCount: number }) =>
                c.postCount
            )}
          />
        </div>

        <div className="space-y-3">
          {data.categories.map(
            (
              c: { name: string; percentage: string; postCount: number },
              i: number
            ) => (
              <div className="flex items-center justify-between" key={c.name}>
                <div className="flex items-center gap-2">
                  <div
                    className={`h-3 w-3 rounded bg-${contentColors[i]}-500`}
                  />
                  <span className="text-[#6a7282] text-sm">{c.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-medium">{c.postCount} posts</div>
                  <div className="text-[#99a1af] text-sm">{c.percentage}</div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-6">
          <h3 className="mb-4 font-semibold text-[#101828] text-lg">
            Top Content
          </h3>
          <div className="space-y-4">
            {data.topPosts.map(
              (p: { title: string; url: string; likes: number }, i: number) => (
                <div
                  className="flex items-center justify-between rounded-lg bg-[#f8fafc] p-3"
                  key={p.title}
                >
                  <div>
                    <div className="mb-1 text-[#99a1af] text-sm">
                      👁 {formatNumber(p.likes)} views | 2 September
                    </div>
                    <div className="font-medium text-[#101828]">{p.title}</div>
                  </div>
                  <Button size="sm" variant="outline">
                    <a href={p.url} target="_blank">
                      See post
                    </a>
                  </Button>
                </div>
              )
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
