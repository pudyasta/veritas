import { AlertTriangle } from "lucide-react"

interface WarningChipProps {
  text: string
}

export function WarningChip({ text }: WarningChipProps) {
  return (
    <div className="flex items-center gap-2 mb-2 outline-2 outline-[#FFDD62] bg-[#fff9e3] p-2 rounded-full">
      <AlertTriangle className="w-4 h-4 font-semibold text-yellow-700" />
      <span className="text-xs font-semibold text-yellow-700">
        {text}
      </span>
    </div>
  )
}