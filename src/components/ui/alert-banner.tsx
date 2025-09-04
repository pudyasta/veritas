import { WarningChip } from "./warning-chip";

type AlertBannerProps = {
  title: string;
  description: string;
};

export function AlertBanner({ title, description }: AlertBannerProps) {
  return (
    <div className="mb-4 rounded-lg bg-[#D1D5DC]/30 p-4 outline outline-gray-300">
      <WarningChip text={title} />
      <p className="text-gray-500 text-xs">{description}</p>
    </div>
  );
}
