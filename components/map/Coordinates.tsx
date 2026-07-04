"use client";

import { useMap } from "@/lib/map-context";

export default function Coordinates() {
  const { coords } = useMap();

  return (
    <div className="rounded-md bg-white/90 px-3 py-2 font-mono text-xs shadow-lg backdrop-blur">
      {coords
        ? `Lat: ${coords.lat.toFixed(4)} | Lon: ${coords.lng.toFixed(4)}`
        : "Lat: — | Lon: —"}
    </div>
  );
}
