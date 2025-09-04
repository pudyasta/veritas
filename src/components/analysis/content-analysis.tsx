
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { CategoryBar } from "@/components/analysis/category-bar"
import { AlertBanner } from "@/components/ui/alert-banner"

const contentData = [113, 35, 8, 4] // Politics, Promotions, Community, Others
const contentColors = ["blue", "amber", "violet", "gray"] as const

export function ContentAnalysis() {
  return (
    <Card className="bg-white border-0 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-[#101828]">Content Analysis</CardTitle>
          <Button variant="outline" size="sm">
            This week <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <AlertBanner
          title="Suspicious Content Patterns"
          description="The majority of this account's posts are misleading and repetitive, with very little authentic or personal content. This indicates coordinated or buzzer-like activity."
        />
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#6a7282]">Content Type</span>
            <span className="text-sm text-[#6a7282]">160 posts</span>
          </div>

          <CategoryBar values={contentData} colors={contentColors} className="mb-4" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm text-[#6a7282]">Politics</span>
            </div>
            <div className="text-right">
              <div className="font-medium">113 posts</div>
              <div className="text-sm text-[#99a1af]">40.5%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-500 rounded"></div>
              <span className="text-sm text-[#6a7282]">Promotions</span>
            </div>
            <div className="text-right">
              <div className="font-medium">35 posts</div>
              <div className="text-sm text-[#99a1af]">32.1%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-violet-500 rounded"></div>
              <span className="text-sm text-[#6a7282]">Community posts</span>
            </div>
            <div className="text-right">
              <div className="font-medium">8 posts</div>
              <div className="text-sm text-[#99a1af]">16.8%</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-500 rounded"></div>
              <span className="text-sm text-[#6a7282]">Others</span>
            </div>
            <div className="text-right">
              <div className="font-medium">4 posts</div>
              <div className="text-sm text-[#99a1af]">16.8%</div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#101828] mb-4">Top Content</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-lg">
              <div>
                <div className="text-sm text-[#99a1af] mb-1">👁 4.2k views | 2 September</div>
                <div className="font-medium text-[#101828]">"Breaking news!!! [uncited claim]"</div>
              </div>
              <Button variant="outline" size="sm">
                See post
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-lg">
              <div>
                <div className="text-sm text-[#99a1af] mb-1">👁 3.1k views | 4 September</div>
                <div className="font-medium text-[#101828]">"Share this before it gets deleted!"</div>
              </div>
              <Button variant="outline" size="sm">
                See post
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-lg">
              <div>
                <div className="text-sm text-[#99a1af] mb-1">👁 2.2k views | 5 September</div>
                <div className="font-medium text-[#101828]">"His policy are the worst"</div>
              </div>
              <Button variant="outline" size="sm">
                See post
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}