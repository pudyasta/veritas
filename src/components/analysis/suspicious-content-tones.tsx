import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export function SuspiciousContentTones() {
  return (
    <Card className="bg-white border-0 shadow-sm">
      <CardContent className="p-6">
        <div className="bg-[#fff085] p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#a65f00]" />
            <span className="text-sm font-medium text-[#a65f00]">Suspicious Content Tones</span>
          </div>
          <p className="text-sm text-[#6a7282]">
            Recent posts lean overwhelmingly one-sided in tone (e.g., negative, hostile, or alarmist), with
            minimal variation.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}