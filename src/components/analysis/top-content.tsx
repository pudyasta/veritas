import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TopContent() {
  return (
    <Card className="border-0 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-[#101828]">Top Content</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
      </CardContent>
    </Card>
  );
}
