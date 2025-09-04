
import { WarningChip } from "./warning-chip"

interface AlertBannerProps {
  title: string
  description: string
}

export function AlertBanner({ title, description }: AlertBannerProps) {
  return (
    <div className="bg-[#D1D5DC]/30 outline outline-gray-300 p-4 rounded-lg mb-4">
      <WarningChip text={title} />
      <p className="text-xs text-gray-500">
        {description}
      </p>
    </div>
  )
}