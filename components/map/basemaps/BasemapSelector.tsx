"use client";

import { Layers } from "lucide-react";

import { useMap, type Basemap } from "@/lib/map-context";
import { basemaps } from "./basemaps";

export default function BasemapSelector() {
  const { basemap, setBasemap } = useMap();

  return (
    <div className="relative flex items-center">
      <Layers className="pointer-events-none absolute left-2.5 h-4 w-4 text-gray-500" />
      <label htmlFor="basemap-select" className="sr-only">
        Basemap
      </label>
      <select
        id="basemap-select"
        value={basemap}
        onChange={(e) => setBasemap(e.target.value as Basemap)}
        className="appearance-none rounded-md border bg-white py-2 pl-8 pr-3 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {(Object.keys(basemaps) as Basemap[]).map((key) => (
          <option key={key} value={key}>
            {basemaps[key].name}
          </option>
        ))}
      </select>
    </div>
  );
}
