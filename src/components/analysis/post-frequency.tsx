import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info, ChevronDown } from "lucide-react"
import { AlertBanner } from "@/components/ui/alert-banner"

export function PostFrequency() {
  return (
    <Card className="bg-white border-0 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-[#101828]">Post Frequency</CardTitle>
            <Info className="w-4 h-4 text-[#99a1af]" />
          </div>
          <Button variant="outline" size="sm">
            Last 24 hours <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <AlertBanner
          title="Abnormal Post Frequency"
          description="The account posts at a rate far above normal engagement levels in a short time."
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-[#6a7282] mb-1">User Post</div>
            <div className="text-2xl font-bold text-[#101828]">67 posts</div>
            <div className="text-sm text-[#99a1af]">in the last 24 hours</div>
          </div>
          <div>
            <div className="text-sm text-[#6a7282] mb-1">Average Normal Post</div>
            <div className="text-2xl font-bold text-[#101828]">10 posts</div>
            <div className="text-sm text-[#99a1af]">in the last 24 hours</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}