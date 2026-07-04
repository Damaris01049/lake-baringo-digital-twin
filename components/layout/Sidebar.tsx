"use client";

import { useMap } from "@/lib/map-context";
import { LAYER_META } from "@/config/layers";

export default function Sidebar() {
  const { layers, toggleLayer } = useMap();

  return (
    <div className="h-full overflow-y-auto p-5">
      <h2 className="mb-1 text-xl font-bold">GIS Layers</h2>
      <p className="mb-4 text-sm text-gray-500">
        Toggle data layers on the map
      </p>

      <div className="space-y-1">
        {LAYER_META.map((layer) => (
          <label
            key={layer.id}
            className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-100"
          >
            <input
              type="checkbox"
              checked={layers[layer.id]}
              onChange={() => toggleLayer(layer.id)}
              className="h-4 w-4"
            />

            <span
              className="inline-block h-3 w-3 shrink-0 rounded-sm"
              style={{
                backgroundColor: layer.color,
                borderRadius: layer.shape === "dot" ? "9999px" : "0.125rem",
              }}
              aria-hidden="true"
            />

            <span className="text-sm">{layer.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
