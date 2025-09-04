export const AvailableChartColors = [
  "blue",
  "emerald",
  "violet",
  "amber",
  "gray",
  "cyan",
  "pink",
  "lime",
  "fuchsia",
] as const

export type AvailableChartColorsKeys = (typeof AvailableChartColors)[number]

export const getColorClassName = (color: AvailableChartColorsKeys, type: "bg" | "stroke" | "fill" | "text"): string => {
  switch (type) {
    case "bg":
      return {
        blue: "bg-blue-500",
        emerald: "bg-emerald-500",
        violet: "bg-violet-500",
        amber: "bg-amber-500",
        gray: "bg-gray-500",
        cyan: "bg-cyan-500",
        pink: "bg-pink-500",
        lime: "bg-lime-500",
        fuchsia: "bg-fuchsia-500",
      }[color]
    case "stroke":
      return {
        blue: "stroke-blue-500",
        emerald: "stroke-emerald-500",
        violet: "stroke-violet-500",
        amber: "stroke-amber-500",
        gray: "stroke-gray-500",
        cyan: "stroke-cyan-500",
        pink: "stroke-pink-500",
        lime: "stroke-lime-500",
        fuchsia: "stroke-fuchsia-500",
      }[color]
    case "fill":
      return {
        blue: "fill-blue-500",
        emerald: "fill-emerald-500",
        violet: "fill-violet-500",
        amber: "fill-amber-500",
        gray: "fill-gray-500",
        cyan: "fill-cyan-500",
        pink: "fill-pink-500",
        lime: "fill-lime-500",
        fuchsia: "fill-fuchsia-500",
      }[color]
    case "text":
      return {
        blue: "text-blue-500",
        emerald: "text-emerald-500",
        violet: "text-violet-500",
        amber: "text-amber-500",
        gray: "text-gray-500",
        cyan: "text-cyan-500",
        pink: "text-pink-500",
        lime: "text-lime-500",
        fuchsia: "text-fuchsia-500",
      }[color]
    default:
      return ""
  }
}
