import { AlertTriangle } from "lucide-react";

type WarningChipProps = {
  text: string;
};

export function WarningChip({ text }: WarningChipProps) {
  return (
    <div className="mb-2 flex items-center gap-2 rounded-full bg-[#fff9e3] p-2 outline-2 outline-[#FFDD62]">
      <AlertTriangle className="h-4 w-4 font-semibold text-yellow-700" />
      <span className="font-semibold text-xs text-yellow-700">{text}</span>
    </div>
  );
}
