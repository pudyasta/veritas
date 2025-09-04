import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TopContent() {
  return (
    <Card className="bg-white border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-[#101828]">Top Content</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
      </CardContent>
    </Card>
  )
}