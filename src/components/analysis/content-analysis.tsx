
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, AlertTriangle } from "lucide-react"
import { CategoryBar } from "@/components/analysis/category-bar"

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
        <div className="bg-[#fff085] p-4 rounded-lg mb-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#a65f00]" />
            <span className="text-sm font-medium text-[#a65f00]">Suspicious Content Patterns</span>
          </div>
          <p className="text-sm text-[#6a7282]">
            The majority of this account's posts are misleading and repetitive, with very little authentic or
            personal content. This indicates coordinated or buzzer-like activity.
          </p>
        </div>
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
      </CardContent>
    </Card>
  )
}