import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WordsCluster() {
  return (
    <Card className="bg-white border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-[#101828]">Words Cluster</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-32 bg-[#f8fafc] rounded-lg flex items-center justify-center">
          <span className="text-[#99a1af] text-sm">Word cloud visualization</span>
        </div>
      </CardContent>
    </Card>
  )
}