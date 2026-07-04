"use client";

import { useMap } from "@/lib/map-context";

export default function TimeSlider() {
  const { timelineYear, setTimelineYear, showTimeline } = useMap();

  if (!showTimeline) return null;

  return (
    <div className="border-t bg-white/95 p-3 shadow-lg backdrop-blur">
      <div className="mb-2 flex items-center justify-between text-sm font-medium">
        <span>Historical Timeline</span>
        <span className="font-mono tabular-nums">{timelineYear}</span>
      </div>

      <label htmlFor="timeline-slider" className="sr-only">
        Historical Timeline Year
      </label>

      <input
        id="timeline-slider"
        type="range"
        min={1984}
        max={2025}
        step={1}
        value={timelineYear}
        onChange={(e) => setTimelineYear(Number(e.target.value))}
        className="w-full accent-blue-600"
      />

      <div className="mt-1 flex justify-between text-[10px] text-gray-500">
        <span>1984</span>
        <span>2025</span>
      </div>
    </div>
  );
}
