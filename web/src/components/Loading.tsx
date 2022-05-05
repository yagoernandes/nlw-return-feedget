import { CircleNotch } from "phosphor-react";

export default function Loading() {
  return (
    <div className="h-6 w-6 flex items-center justify-center overflow-hidden">
        <CircleNotch weight="bold" className="h-4 w-4 animate-spin" />
    </div>
  )
}
