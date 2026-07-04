"use client";

import { Ruler } from "lucide-react";

import { useMap } from "@/lib/map-context";

export default function MeasureButton() {
  const { measuring, toggleMeasuring } = useMap();

  return (
    <button
      type="button"
      onClick={toggleMeasuring}
      aria-pressed={measuring}
      className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
        measuring
          ? "border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
          : "bg-white hover:bg-gray-50"
      }`}
    >
      <Ruler className="h-4 w-4" />
      <span className="hidden sm:inline">Measure</span>
    </button>
  );
}
