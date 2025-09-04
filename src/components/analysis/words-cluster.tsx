import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WordsCluster() {
  return (
    <Card className="border-0 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-[#101828]">Words Cluster</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-32 items-center justify-center rounded-lg bg-[#f8fafc]">
          <span className="text-[#99a1af] text-sm">
            Word cloud visualization
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
