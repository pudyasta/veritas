import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function SuspiciousContentTones() {
  return (
    <Card className="border-0 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="rounded-lg bg-[#fff085] p-4">
          <div className="mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-[#a65f00]" />
            <span className="font-medium text-[#a65f00] text-sm">
              Suspicious Content Tones
            </span>
          </div>
          <p className="text-[#6a7282] text-sm">
            Recent posts lean overwhelmingly one-sided in tone (e.g., negative,
            hostile, or alarmist), with minimal variation.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
