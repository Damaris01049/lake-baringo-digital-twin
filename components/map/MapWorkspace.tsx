"use client";

import MapCanvas from "./MapCanvas";
import Toolbar from "./toolbar/Toolbar";
import Legend from "./Legend";
import Coordinates from "./Coordinates";
import TimeSlider from "./TimeSlider";

export default function MapWorkspace() {
  return (
    <div className="relative h-full w-full">

      {/* Map */}
      <MapCanvas />

      {/* Top Toolbar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000]">
        <Toolbar />
      </div>

      {/* Legend */}
      <div className="absolute right-4 top-24 z-[1000]">
        <Legend />
      </div>

      {/* Coordinates */}
      <div className="absolute bottom-3 left-3 z-[1000]">
        <Coordinates />
      </div>

      {/* Timeline */}
      <div className="absolute bottom-0 left-0 w-full z-[1000]">
        <TimeSlider />
      </div>

    </div>
  );
}