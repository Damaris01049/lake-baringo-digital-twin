"use client";

import { useMap } from "@/lib/map-context";

export default function BasemapSelector() {
  const { basemap, setBasemap } = useMap();

  return (
    <select
      value={basemap}
      onChange={(e) => setBasemap(e.target.value as any)}
      className="rounded-md border bg-white px-3 py-2 text-sm"
    >
      <option value="osm">🌍 OpenStreetMap</option>

      <option value="satellite">
        🛰 Esri World Imagery
      </option>

      <option value="terrain">
        🏔 OpenTopoMap
      </option>

      <option value="dark">
        🌑 Carto Dark
      </option>
    </select>
  );
}