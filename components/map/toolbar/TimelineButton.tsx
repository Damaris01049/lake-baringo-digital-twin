"use client";

import { CalendarClock } from "lucide-react";

import { useMap } from "@/lib/map-context";

export default function TimelineButton() {
  const { showTimeline, toggleTimeline } = useMap();

  return (
    <button
      type="button"
      onClick={toggleTimeline}
      aria-pressed={showTimeline}
      className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
        showTimeline
          ? "border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
          : "bg-white hover:bg-gray-50"
      }`}
    >
      <CalendarClock className="h-4 w-4" />
      <span className="hidden sm:inline">Timeline</span>
    </button>
  );
}
