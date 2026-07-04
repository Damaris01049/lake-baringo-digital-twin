"use client";

export default function TimeSlider() {
  return (
    <div className="border-t bg-white/95 p-3 shadow-lg backdrop-blur">

      <div className="mb-2 flex items-center justify-between text-sm font-medium">
        <span>Historical Timeline</span>
        <span>2025</span>
      </div>

      <label htmlFor="timeline-slider" className="sr-only">
        Historical Timeline
      </label>

      <input
        id="timeline-slider"
        type="range"
        min="1984"
        max="2025"
        defaultValue="2025"
        className="w-full"
      />

    </div>
  );
}